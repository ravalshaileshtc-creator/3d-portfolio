import React, { useState } from 'react';
import { Cpu, Send, Sparkles, Terminal, Copy, Check } from 'lucide-react';

export const AiLearningSandbox: React.FC = () => {
  const [prompt, setPrompt] = useState('How does Gemini 2.5 SDK handle RAG vector embeddings?');
  const [isGenerating, setIsGenerating] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const sampleResponses: Record<string, string> = {
    default: `Gemini 2.5 SDK integrates seamlessly with pgvector for high-performance RAG pipelines:

1. Document Chunking: Documents are split into 512-token chunks with 10% overlap.
2. Vector Embeddings: Text chunks are converted to 768-dim embeddings via Google text-embedding-004.
3. Cosine Search: pgvector calculates nearest neighbors in < 15ms.
4. Reasoning Context: Gemini 2.5 Flash analyzes top-k chunks and streams markdown tokens.`,
  };

  const handleRunQuery = () => {
    setIsGenerating(true);
    setResponse(null);

    setTimeout(() => {
      setResponse(sampleResponses.default);
      setIsGenerating(false);
    }, 1800);
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 flex items-center justify-between">
        <div>
          <div className="text-xs font-mono text-[#ffb596] uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#ffb596]" />
            GOOGLE GEMINI 2.5 AGENT SANDBOX
          </div>
          <div className="text-sm font-bold text-white">Live Streaming Prompt Runner</div>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
          LATENCY: 140ms
        </div>
      </div>

      {/* Prompt Input Box */}
      <div className="bg-[#141622] p-5 rounded-2xl border border-white/10 space-y-3">
        <label className="text-xs font-mono text-slate-300">ENTER PROMPT QUERY:</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 bg-[#11131b] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
          />
          <button
            onClick={handleRunQuery}
            disabled={isGenerating}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              isGenerating
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] hover:scale-105'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>{isGenerating ? 'Streaming...' : 'Run Query'}</span>
          </button>
        </div>
      </div>

      {/* Terminal Stream Output */}
      {response && (
        <div className="bg-[#0b0c12] p-6 rounded-2xl border border-white/15 space-y-4 font-mono text-xs relative animate-in fade-in">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-slate-400">
              <Terminal className="w-4 h-4 text-[#4cd7f6]" />
              <span>GEMINI 2.5 SSE TOKEN STREAM</span>
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded bg-white/10 text-slate-300 hover:text-white"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <pre className="text-slate-200 whitespace-pre-wrap font-mono text-xs leading-relaxed">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
};
