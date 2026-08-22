import React, { useEffect, useRef } from 'react';

export const CyberShaderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

void main() {
    vec2 uv = v_texCoord;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    // Base ambient glow color
    vec3 color = vec3(0.005, 0.015, 0.04);
    
    // Floating cyber particles
    for(float i = 0.0; i < 35.0; i++) {
        float h = hash(vec2(i, 123.45));
        vec2 pos = vec2(sin(u_time * 0.25 + h * 6.28), cos(u_time * 0.2 + h * 6.28)) * 0.85;
        float dist = length(p - pos);
        float size = 0.003 + h * 0.006;
        float glow = 0.0012 / dist;
        color += vec3(0.2, 0.7, 1.0) * glow * smoothstep(size * 2.0, size, dist);
    }
    
    // Subtle digital grid lines
    float grid = sin(p.x * 12.0 + u_time * 0.2) * sin(p.y * 12.0 + u_time * 0.1);
    color += vec3(0.08, 0.18, 0.3) * smoothstep(0.97, 1.0, grid);
    
    // Radial Vignette
    float vignette = 1.0 - length(uv - 0.5) * 1.3;
    color *= clamp(vignette, 0.0, 1.0);
    
    gl_FragColor = vec4(color, 0.45);
}`;

    const compileShader = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = window.innerHeight - e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let animId: number;

    const render = (t: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTimeLoc) gl.uniform1f(uTimeLoc, t * 0.001);
      if (uResLoc) gl.uniform2f(uResLoc, canvas.width, canvas.height);
      if (uMouseLoc) gl.uniform2f(uMouseLoc, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-70 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
