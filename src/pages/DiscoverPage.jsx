import React, { useEffect } from 'react';
import { users } from '../data/mockData';

const DiscoverPage = () => {
    useEffect(() => {
        const glow = document.getElementById('cursor-glow');
        if (!glow) return;
        
        const handleMouseMove = (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="p-6 lg:p-12 relative w-full overflow-hidden max-w-7xl mx-auto">
            {/* Interactive Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[80px]"></div>

            {/* Hero Section */}
            <section className="mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-3 block opacity-80">Curation Engine</span>
                        <h1 className="text-5xl lg:text-7xl font-black font-headline tracking-tighter leading-none text-on-surface">
                            Discover Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Venture</span>
                        </h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-white/5 transition-all">
                            <span className="material-symbols-outlined text-base">tune</span>
                            Filters
                        </button>
                        <button className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-white/5 transition-all">
                            <span className="material-symbols-outlined text-base">trending_up</span>
                            Trending
                        </button>
                    </div>
                </div>

                {/* Featured Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="md:col-span-2 lg:col-span-2 glass-panel p-8 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-12">
                                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-secondary/20">High Potential Match</span>
                                <button className="p-2 rounded-full bg-white/5 text-on-surface hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">bookmark</span>
                                </button>
                            </div>
                            <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">CUSAT Tech Hub</h2>
                            <p className="text-on-surface-variant text-base mb-8 max-w-sm leading-relaxed">A collaborative incubator for student-led startups and AI-assisted automation. Looking for a lead React developer.</p>
                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {['React', 'Node.js', 'Tailwind'].map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-primary-dim font-bold uppercase border border-white/10">{tag}</span>
                                    ))}
                                </div>
                                <button className="w-full py-4 bg-primary text-[#070d1f] font-black rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20">Connect to Venture</button>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-6 flex flex-col">
                        <div className="w-12 h-12 rounded-2xl bg-tertiary/20 flex items-center justify-center text-tertiary mb-6 border border-tertiary/20">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                        <h3 className="text-xl font-headline font-bold mb-2">HackClub Squads</h3>
                        <p className="text-on-surface-variant text-sm mb-6">Quickly assemble a winning team for the upcoming Excel Hackathon.</p>
                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex -space-x-3">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span className="material-symbols-outlined text-primary cursor-pointer hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>

                    <div className="glass-panel overflow-hidden group">
                        <div className="h-32 w-full bg-surface-container-highest flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl opacity-20">inventory_2</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-headline font-bold mb-2">KTU Result Scraper API</h3>
                            <p className="text-on-surface-variant text-sm mb-4">Reliable API for fetching latest KTU results fast.</p>
                            <span className="inline-block px-3 py-1 rounded-full bg-tertiary/10 text-[10px] text-tertiary font-black uppercase tracking-widest">Security</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personalized Matches Section */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-headline font-bold tracking-tight text-on-surface">Personalized Matches</h2>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full border border-white/5 text-on-surface-variant hover:bg-white/5"><span className="material-symbols-outlined">chevron_left</span></button>
                        <button className="p-2 rounded-full border border-white/5 text-on-surface-variant hover:bg-white/5"><span className="material-symbols-outlined">chevron_right</span></button>
                    </div>
                </div>
                <div className="flex gap-6 scroll-x-auto no-scrollbar pb-6 px-4 -mx-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:px-0 md:mx-0">
                    {[
                        { title: 'MEC Project Incubator', match: '94%', color: 'text-primary' },
                        { title: 'CET Connect Platform', match: '88%', color: 'text-secondary' },
                        { title: 'TKM Smart Campus', match: '82%', color: 'text-tertiary' }
                    ].map((item, i) => (
                        <div key={i} className="glass-panel p-6 hover:translate-y-[-4px] transition-transform group cursor-pointer border border-transparent hover:border-primary/20 min-w-[280px] md:min-w-0">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl bg-surface-container-highest border border-white/5 flex items-center justify-center">
                                    <span className="material-symbols-outlined opacity-40">hub</span>
                                </div>
                                <span className={`${item.color} text-xs font-black`}>{item.match} MATCH</span>
                            </div>
                            <h4 className="font-headline font-bold text-on-surface mb-2">{item.title}</h4>
                            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Developing decentralized infrastructure for campus communities.</p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="material-symbols-outlined text-sm opacity-40">code</span>
                                    <span className="material-symbols-outlined text-sm opacity-40">brush</span>
                                </div>
                                <button className="px-4 py-2 rounded-lg bg-white/5 text-[10px] font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-[#070d1f] transition-all">Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DiscoverPage;
