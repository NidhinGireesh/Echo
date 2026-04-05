import React from 'react';
import { Cpu, Zap, X, Heart } from 'lucide-react';

export default function MatchmakingCard() {
  return (
    <div className="w-full max-w-md overflow-hidden glass-panel border border-white/10 backdrop-blur-2xl">
      <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-surface p-8 text-center text-white border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(167,139,250,0.15),transparent)] pointer-events-none"></div>
        <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/5">
          Looking for Co-Founder
        </span>
        <h2 className="text-3xl font-black font-headline tracking-tighter leading-none mt-2 text-white">App Interface Developer</h2>
      </div>
      
      <div className="p-6">
        <h3 className="font-headline font-bold text-white mb-2">The Vision</h3>
        <p className="text-sm text-on-surface-variant font-medium leading-relaxed opacity-80">
          I've built a robust TCP/IP networking backend architecture to handle large-scale data routing. I need a mobile specialist to build out the consumer-facing app.
        </p>

        <div className="mt-6 border-t border-white/5 pt-6">
          <h3 className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">Missing Tech Stack</h3>
          <div className="flex gap-2">
            <span className="flex items-center rounded-lg bg-primary/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20">
              <Zap className="mr-1.5 h-3.5 w-3.5 fill-current" /> Flutter
            </span>
            <span className="flex items-center rounded-lg bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant border border-white/10">
              <Cpu className="mr-1.5 h-3.5 w-3.5" /> UI/UX Design
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-on-surface-variant hover:bg-white/10 hover:border-white/20 active:scale-90 transition-all group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
          <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-[#070d1f] backdrop-blur-xl border border-white/10 text-white shadow-lg shadow-primary/20 hover:scale-110 active:scale-95 transition-all">
            <Heart className="h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
}
