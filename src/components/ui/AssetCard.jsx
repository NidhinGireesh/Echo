import React from 'react';
import { Star, Download, Code } from 'lucide-react';

export default function AssetCard() {
  return (
    <div className="group relative w-full max-w-sm glass-panel p-6 border border-white/10 backdrop-blur-xl transition-all hover:translate-y-[-4px] hover:shadow-[0_20px_50px_rgba(167,139,250,0.15)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-lg bg-primary/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20">
          Flutter UI Kit
        </span>
        <span className="flex items-center text-xs font-black text-on-surface-variant uppercase tracking-widest opacity-60">
          <Star className="mr-1 h-3.5 w-3.5 text-secondary fill-current" /> 4.9
        </span>
      </div>
      
      <h3 className="mb-2 text-xl font-black font-headline text-white tracking-tight leading-tight">
        Travel & Tourism App Template
      </h3>
      <p className="mb-6 text-sm text-on-surface-variant font-medium leading-relaxed opacity-70">
        Production-ready frontend assets, responsive map integrations, and custom animated routing.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        <span className="flex items-center text-[10px] font-black uppercase text-on-surface-variant opacity-60 border border-white/5 bg-white/5 px-2 py-1 rounded-md"><Code className="mr-1.5 w-3 h-3"/> Dart</span>
        <span className="flex items-center text-[10px] font-black uppercase text-on-surface-variant opacity-60 border border-white/5 bg-white/5 px-2 py-1 rounded-md"><Code className="mr-1.5 w-3 h-3"/> Firebase</span>
      </div>

      <div className="flex items-center justify-between border-t border-white/5 pt-5">
        <div className="text-2xl font-black font-headline text-white tracking-tighter">₹499</div>
        <button className="glass-button !px-6 !py-2.5 !text-[10px] !rounded-xl">
           Get Asset
        </button>
      </div>
    </div>
  );
}
