import React from 'react';
import { users, projects } from '../data/mockData';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

const ProfilePage = () => {
    const currentUser = users[0];

    return (
        <div className="flex-1 p-8 overflow-y-auto relative z-10 selection:bg-primary/20">
            <OptimizedCursorGlow />

            <div className="max-w-7xl mx-auto space-y-12">
                {/* Hero Profile Section */}
                <header className="relative flex flex-col md:flex-row gap-8 items-start md:items-end">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl relative group">
                            <img alt="Profile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://i.pravatar.cc/300?u=felix" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-primary text-[#070d1f] p-1.5 rounded-xl border-4 border-[#070d1f] shadow-lg">
                            <span className="material-symbols-outlined text-lg font-black">verified</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                            <h1 className="text-4xl font-black font-headline tracking-tight text-white">{currentUser.name}</h1>
                            <span className="bg-secondary/20 text-secondary text-[10px] px-3 py-1 rounded-full border border-secondary/30 font-black tracking-widest uppercase backdrop-blur-md">Lvl {currentUser.level || 42} Archon</span>
                        </div>
                        <p className="text-on-surface-variant max-w-lg mb-6 leading-relaxed font-medium">Product Designer & Computational Architect. Building the future of spatial decentralized protocols.</p>
                        <div className="flex gap-8">
                            <div className="flex flex-col">
                                <span className="text-2xl font-black font-headline text-primary">{currentUser.points || '12.4k'}</span>
                                <span className="text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-black">Reputation</span>
                            </div>
                            <div className="flex flex-col border-x border-white/5 px-8">
                                <span className="text-2xl font-black font-headline text-tertiary">154</span>
                                <span className="text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-black">Proofs</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black font-headline text-secondary">89%</span>
                                <span className="text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-black">Impact</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="glass-button !px-6 !py-2.5 !text-[10px] !from-white/5 !to-transparent">Edit Identity</button>
                        <button className="glass-button !px-6 !py-2.5 !text-[10px]">Share Proof</button>
                    </div>
                </header>

                {/* Bento Grid Content */}
                <div className="grid grid-cols-12 gap-6 pb-20">
                    {/* Contribution Density Chart */}
                    <div className="col-span-12 lg:col-span-8 glass-panel p-8 relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-8 relative z-10">
                            <div>
                                <h3 className="font-headline font-black text-xl text-white">Contribution Density</h3>
                                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-1">428 nodes synchronized this cycle</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-[8px] text-on-surface-variant font-black uppercase tracking-wider">
                                <span>Min</span>
                                <div className="w-3 h-3 rounded-[2px] bg-white/5"></div>
                                <div className="w-3 h-3 rounded-[2px] bg-primary/20"></div>
                                <div className="w-3 h-3 rounded-[2px] bg-primary/40"></div>
                                <div className="w-3 h-3 rounded-[2px] bg-primary/70"></div>
                                <div className="w-3 h-3 rounded-[2px] bg-primary shadow-[0_0_8px_rgba(133,173,255,0.5)]"></div>
                                <span>Max</span>
                            </div>
                        </div>
                        <div className="overflow-x-auto pb-2 custom-scrollbar relative z-10">
                            <div className="flex gap-1.5 w-max">
                                {Array.from({ length: 48 }).map((_, i) => (
                                    <div key={i} className="grid grid-rows-7 gap-1.5">
                                        {Array.from({ length: 7 }).map((_, j) => {
                                            const shades = ['bg-white/5', 'bg-primary/10', 'bg-primary/20', 'bg-primary/40', 'bg-primary/70', 'bg-primary'];
                                            const rand = Math.floor(Math.random() * 6);
                                            return <div key={j} className={`w-3 h-3 rounded-[2px] transition-all hover:scale-150 hover:z-20 cursor-crosshair ${shades[rand]} ${rand > 4 ? 'shadow-[0_0_5px_currentColor]' : ''}`} />;
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Badges Section */}
                    <div className="col-span-12 lg:col-span-4 glass-panel p-8 relative group overflow-hidden">
                        <h3 className="font-headline font-black text-xl mb-8 relative z-10 text-white">Masteries</h3>
                        <div className="grid grid-cols-4 gap-6 relative z-10">
                            {currentUser.badges?.slice(0, 3).map((badge, idx) => (
                                <div key={idx} className="group/badge cursor-help relative flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/badge:scale-110 group-hover/badge:border-primary/50 group-hover/badge:shadow-[0_0_20px_rgba(133,173,255,0.2)] transition-all duration-300">
                                        <span className="material-symbols-outlined text-primary text-2xl">{badge.icon || 'terminal'}</span>
                                    </div>
                                    <span className="text-[8px] mt-3 font-black text-on-surface-variant uppercase text-center tracking-tighter opacity-60">{badge.name}</span>
                                </div>
                            ))}
                            <div className="group/badge cursor-help relative flex flex-col items-center">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale opacity-20 group-hover/badge:grayscale-0 group-hover/badge:opacity-100 group-hover/badge:scale-110 transition-all duration-300">
                                    <span className="material-symbols-outlined text-on-surface-variant text-2xl">military_tech</span>
                                </div>
                                <span className="text-[8px] mt-3 font-black text-on-surface-variant/30 uppercase text-center tracking-tighter">Locked</span>
                            </div>
                        </div>
                        <button className="w-full mt-10 py-3 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all relative z-10 bg-white/5">Expand Grid</button>
                    </div>

                    {/* Recent Proof Submissions */}
                    <div className="col-span-12 glass-panel p-8 relative overflow-hidden">
                        <div className="flex justify-between items-end mb-8 relative z-10">
                            <div>
                                <h3 className="font-headline font-black text-2xl tracking-tight text-white">Proof Archive</h3>
                                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-1">Validated cryptographic assets</p>
                            </div>
                            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
                                <button className="px-4 py-1.5 rounded-lg bg-primary text-white text-[9px] font-black uppercase">All</button>
                                <button className="px-4 py-1.5 rounded-lg text-[9px] font-black text-on-surface-variant hover:text-white uppercase">Nodes</button>
                                <button className="px-4 py-1.5 rounded-lg text-[9px] font-black text-on-surface-variant hover:text-white uppercase">Assets</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {projects.slice(0, 3).map((project, idx) => (
                                <div key={idx} className="group relative bg-[#070d1f]/40 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" src={project.image} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] to-transparent opacity-80"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-primary/20 text-[8px] font-black text-primary uppercase tracking-widest border border-primary/20">{project.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="font-black text-lg text-white leading-tight group-hover:text-primary transition-colors">{project.title}</h4>
                                            <span className="text-[9px] text-on-surface-variant font-black uppercase opacity-40">2d ago</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs">
                                            <div className="flex items-center gap-1.5">
                                                <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>thumb_up</span>
                                                <span className="font-black text-white">1.2k</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 ml-auto">
                                                <span className="bg-secondary/20 text-secondary text-[8px] px-2 py-0.5 rounded-md border border-secondary/30 font-black">+{project.points || 450} REP</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
