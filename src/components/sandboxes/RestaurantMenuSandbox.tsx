import React, { useState } from 'react';
import { ShoppingBag, Bell, Plus, Minus, CheckCircle, Utensils } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

export const RestaurantMenuSandbox: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([
    { id: '1', name: 'Chef Special Paneer Tikka', price: 14.50, category: 'Starters', quantity: 1 },
    { id: '2', name: 'Artisanal Woodfired Pizza', price: 18.00, category: 'Mains', quantity: 0 },
    { id: '3', name: 'Iced Matcha Espresso Latte', price: 6.50, category: 'Beverages', quantity: 2 },
  ]);

  const [waiterAlerted, setWaiterAlerted] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCallWaiter = () => {
    setWaiterAlerted(true);
    setTimeout(() => setWaiterAlerted(false), 4000);
  };

  const handleDispatchOrder = () => {
    setOrderSent(true);
    setTimeout(() => setOrderSent(false), 4000);
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header bar */}
      <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-[#4cd7f6] uppercase tracking-wider">
            TABLE #14 // CONTACTLESS DINE-IN
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <Utensils className="w-4 h-4 text-[#ffb596]" />
            <span>Grand Palace Bistro QR Menu</span>
          </div>
        </div>

        <button
          onClick={handleCallWaiter}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all ${
            waiterAlerted
              ? 'bg-amber-500 text-slate-950 shadow-glowCyan'
              : 'bg-white/10 border border-white/15 text-amber-300 hover:bg-amber-500/20'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>{waiterAlerted ? 'Waiter Notified (KDS Chime Sent!)' : 'Call Waiter Bell'}</span>
        </button>
      </div>

      {/* Menu & Cart Split View */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Menu Items */}
        <div className="md:col-span-7 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            DIGITAL MENU SELECTION
          </div>

          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#141622] p-4 rounded-xl border border-white/10 flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-bold text-white">{item.name}</div>
                <div className="text-xs font-mono text-[#4cd7f6]">${item.price.toFixed(2)}</div>
              </div>

              <div className="flex items-center gap-3 bg-[#11131b] p-1.5 rounded-lg border border-white/10">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-slate-300 hover:bg-white/20 text-xs"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-4 text-center text-xs font-mono font-bold text-white">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-6 h-6 rounded bg-[#4cd7f6] text-[#11131b] flex items-center justify-center font-bold text-xs"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Cart Summary */}
        <div className="md:col-span-5 bg-[#141622] p-5 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center justify-between">
              <span>LIVE CART SUMMARY</span>
              <ShoppingBag className="w-4 h-4 text-[#4cd7f6]" />
            </div>

            <div className="space-y-2 pt-2">
              {items
                .filter((i) => i.quantity > 0)
                .map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs text-slate-300">
                    <span>
                      {item.quantity}x {item.name}
                    </span>
                    <span className="font-mono text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between text-sm font-bold text-white font-mono">
              <span>TOTAL AMOUNT</span>
              <span className="text-[#4cd7f6] text-lg">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleDispatchOrder}
              disabled={total === 0 || orderSent}
              className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                orderSent
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] hover:scale-105'
              }`}
            >
              {orderSent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Order Sent to Kitchen KDS!</span>
                </>
              ) : (
                <span>Dispatch Order to Kitchen</span>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
