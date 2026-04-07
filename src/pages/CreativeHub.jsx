import React from 'react';
import { creativeData } from '../data/mockData';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

const CreativeStudio = () => {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12 relative z-10">
            <OptimizedCursorGlow />

            {/* Creative Specific Background Orbs */}
            <div className="liquid-bg">
                <div className="orb w-[500px] h-[500px] bg-magenta-600/10 top-[-10%] right-[-5%] animation-delay-0" style={{backgroundColor: 'rgba(255, 0, 255, 0.1)'}}></div>
                <div className="orb w-[600px] h-[600px] bg-orange-500/10 bottom-[-20%] left-[-10%] animation-delay-[-4s]"></div>
            </div>

            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-orange-400 font-black text-xs uppercase tracking-[0.3em]">
                        <span className="w-8 h-[1px] bg-orange-500/50"></span>
                        The Creative Studio
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tight">
                        Design <span className="text-gradient !from-magenta-500 !to-orange-500 italic font-black">Dreams</span>
                    </h1>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {['All', 'UI/UX Design', 'AI Art', 'Video Editing', 'Posters'].map((tag) => (
                        <button key={tag} className="px-5 py-2 rounded-full glass-panel !text-[10px] font-black uppercase tracking-widest border-white/5 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all shrink-0">
                            {tag}
                        </button>
                    ))}
                </div>
            </header>

            {/* Masonry-style Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {creativeData.portfolios.map((work, i) => (
                    <div key={i} className="break-inside-avoid glass-panel overflow-hidden group border-orange-500/5 hover:border-orange-500/30 transition-all">
                        <div className="relative overflow-hidden">
                            <img 
                                src={work.image} 
                                alt={work.title} 
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-transparent to-transparent opacity-60"></div>
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-black tracking-widest text-white border border-white/10 uppercase">
                                    {work.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 space-y-3">
                            <h3 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors">{work.title}</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">By {work.author}</span>
                                <button className="material-symbols-outlined text-on-surface-variant hover:text-white transition-colors">favorite</button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Commission Bounty Tile (Injected into masonry for vibe) */}
                <div className="break-inside-avoid glass-panel p-8 bg-gradient-to-br from-orange-500/20 via-[#070d1f] to-[#070d1f] border-orange-500/30">
                    <div className="flex items-center gap-3 text-orange-400 mb-6">
                        <span className="material-symbols-outlined">payments</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Open Bounties</span>
                    </div>
                    <div className="space-y-6">
                        {creativeData.bounties.map((bounty) => (
                            <div key={bounty.id} className="space-y-2 group/bounty">
                                <h4 className="text-sm font-black text-white group-hover/bounty:text-orange-400 transition-colors leading-tight">
                                    {bounty.task}
                                </h4>
                                <div className="flex items-center justify-between">
                                    <span className="text-on-surface-variant text-[10px] font-bold uppercase">{bounty.organizer}</span>
                                    <span className="text-green-400 font-black text-sm">{bounty.reward}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 rounded-xl bg-orange-600/40 text-white text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">
                        View All Commissions
                    </button>
                </div>
            </div>
            
            {/* CTA */}
            <section className="glass-panel p-12 text-center space-y-6 border-white/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-magenta-500/5 to-transparent">
                <h2 className="text-3xl md:text-5xl font-black text-white">Showcase Your <br/> Masterpiece</h2>
                <p className="text-on-surface-variant max-w-xl mx-auto font-bold opacity-60">Ready to inspire the campus? Upload your portfolio and start taking commissions today.</p>
                <div className="flex gap-4 justify-center pt-4">
                    <button className="glass-button !px-12 !py-4 !bg-orange-500/30 !border-orange-400/30">Upload Portfolio</button>
                </div>
            </section>
        </div>
    );
};

export default CreativeStudio;
