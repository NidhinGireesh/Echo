import React from 'react';
import { stemData } from '../data/mockData';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

const STEMLab = () => {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12 relative z-10 font-body">
            <OptimizedCursorGlow />

            {/* STEM Specific Background Orbs */}
            <div className="liquid-bg">
                <div className="orb w-[500px] h-[500px] bg-cyan-600/10 top-[-5%] left-[10%] animation-delay-0"></div>
                <div className="orb w-[600px] h-[600px] bg-blue-500/10 bottom-[10%] left-[-10%] animation-delay-[-7s]"></div>
            </div>

            {/* Header */}
            <header className="space-y-2">
                <div className="flex items-center gap-3 text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">
                    <span className="w-8 h-[1px] bg-cyan-500/50"></span>
                    The STEM Lab
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tight">
                    Innovate <span className="text-cyan-500 italic font-black underline decoration-cyan-500/30 underline-offset-8">Faster</span>
                </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Hardware Exchange Grid */}
                <div className="md:col-span-8 space-y-6">
                    <div className="flex justify-between items-center bg-[#070d1f]/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5">
                        <div>
                            <h3 className="text-xl font-black text-white">Hardware Exchange</h3>
                            <p className="text-on-surface-variant text-xs font-bold opacity-60">Physical components for your next MVP.</p>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-widest border border-cyan-500/20 hover:bg-cyan-500 hover:text-[#070d1f] transition-all">
                            List Component
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stemData.hardwareExchange.map((item) => (
                            <div key={item.id} className="glass-panel p-6 border-cyan-500/5 group hover:border-cyan-500/30 transition-all flex flex-col justify-between h-48">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">{item.item}</h4>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${
                                            item.type === 'Trade' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                        }`}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <p className="text-on-surface-variant text-xs font-medium line-clamp-2 opacity-80 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-cyan-400 font-black text-sm">{item.price}</span>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-white transition-colors">shopping_cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Research Matchmaking Tile */}
                <div className="md:col-span-4 glass-panel p-8 border-cyan-500/10 h-min sticky top-24">
                    <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-cyan-400">biotech</span>
                        Research & Dev
                    </h3>
                    <div className="space-y-6">
                        {stemData.researchPartners.map((topic, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
                                <h4 className="text-sm font-black text-white mb-2 leading-tight">{topic.topic}</h4>
                                <div className="flex items-center justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                                    <span>{topic.college}</span>
                                    <span className="text-cyan-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                        {topic.seekers} Seekers
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 rounded-xl bg-cyan-600/40 text-white text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
                        Find Partners
                    </button>
                </div>
            </div>

            {/* Innovation Showcase glass card */}
            <section className="space-y-6">
                <h3 className="text-2xl font-black text-white px-2 italic">Innovation Showcase</h3>
                <div className="relative h-[400px] rounded-[3rem] overflow-hidden group glass-panel border-cyan-500/20">
                    <div className="absolute inset-0">
                        <img 
                            src={stemData.innovationShowcase[0].image} 
                            alt="Innovation" 
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#070d1f] via-[#070d1f]/60 to-transparent"></div>
                    </div>
                    <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center p-12 md:p-20 space-y-6">
                        <span className="px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest border border-cyan-500/30 w-fit">Featured Build</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            {stemData.innovationShowcase[0].title}
                        </h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed font-bold opacity-70">
                            A fully autonomous navigation solution for campus deliveries, built by the engineering squad at BVM.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <button className="glass-button !px-8 !py-3 !bg-cyan-500/40 !border-cyan-400/30">Read Technical Paper</button>
                            <button className="material-symbols-outlined w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">share</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default STEMLab;
