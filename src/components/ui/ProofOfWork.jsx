import React from 'react';
import { CheckCircle, Trophy, Github } from 'lucide-react';

export default function ProofOfWork() {
  return (
    <div className="mx-auto w-full max-w-3xl glass-panel p-8 relative overflow-hidden border border-white/10 backdrop-blur-xl">
      <div className="mb-8 flex items-center gap-4 relative z-10">
        <div className="h-20 w-20 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-1">
          <div className="h-full w-full rounded-2xl bg-[#070d1f]"></div>
        </div>
        <div>
          <h2 className="text-2xl font-black font-headline text-white flex items-center gap-2 tracking-tighter">
            Student Profile <span className="material-symbols-outlined text-primary font-black">verified</span>
          </h2>
          <p className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest opacity-60">Kochi, Kerala • 15 Verified Assets</p>
        </div>
      </div>

      <h3 className="mb-4 text-sm font-black font-headline uppercase tracking-widest text-white opacity-80">Verified Badges</h3>
      <div className="mb-8 flex gap-3">
        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md group hover:border-primary/40 transition-all">
          <Trophy className="mb-2 h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-tighter">Top ML Contributor</span>
        </div>
        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md group hover:border-secondary/40 transition-all">
          <Trophy className="mb-2 h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-tighter">NSS Unit Leader</span>
        </div>
      </div>

      <h3 className="mb-4 text-sm font-black font-headline uppercase tracking-widest text-white opacity-80">Featured Implementations</h3>
      <div className="glass-panel p-6 border border-white/5 hover:border-white/10 transition-all group">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-black text-lg text-white group-hover:text-primary transition-colors leading-tight">Machine Learning Energy Waste Detector</h4>
            <p className="mt-2 text-xs text-on-surface-variant font-medium leading-relaxed opacity-60">Algorithm processing live hardware data to predict and cut power anomalies.</p>
          </div>
          <button className="p-2 rounded-xl bg-white/5 text-on-surface-variant hover:text-white hover:bg-white/10 transition-all"><Github className="h-5 w-5"/></button>
        </div>
      </div>
    </div>
  );
}
