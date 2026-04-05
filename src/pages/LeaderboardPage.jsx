import React, { useEffect } from 'react';
import { leaderboard } from '../data/mockData';

const images = {
  1: "https://i.pravatar.cc/150?u=col1",
  2: "https://i.pravatar.cc/150?u=col2",
  3: "https://i.pravatar.cc/150?u=col3",
  4: "https://i.pravatar.cc/150?u=col4",
  5: "https://i.pravatar.cc/150?u=col5",
  6: "https://i.pravatar.cc/150?u=col6"
};

const LeaderboardPage = () => {
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

    const top1 = leaderboard.find(l => l.rank === 1);
    const top2 = leaderboard.find(l => l.rank === 2);
    const top3 = leaderboard.find(l => l.rank === 3);
    const remainingList = leaderboard.filter(l => l.rank > 3);

    return (
        <div className="flex-1 p-6 md:p-12 relative overflow-hidden selection:bg-primary/20 max-w-7xl mx-auto">
            {/* Interactive Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[80px]"></div>

            <header className="mb-16">
                <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest rounded-full border border-secondary/20">
                        Season 24
                    </span>
                    <span className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest opacity-60">Synchronized 2m ago</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter text-white mb-6 leading-none">Global <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Standings</span></h1>
                <p className="text-on-surface-variant max-w-2xl text-lg font-medium leading-relaxed opacity-80">
                    The ultimate hierarchy of academic and social excellence. Track your institution's ascent through real-time engagement nodes.
                </p>
            </header>

            {/* Podium Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-end">
                {/* Rank 2 */}
                {top2 && (
                    <div className="glass-panel p-8 md:h-[360px] flex flex-col items-center justify-end group hover:bg-white/5 transition-all">
                        <div className="relative mb-8">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-secondary/40 rotate-3 group-hover:rotate-0 transition-transform shadow-xl">
                                <img src={images[2]} alt={top2.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#070d1f] rounded-full flex items-center justify-center border-2 border-secondary text-secondary font-black text-xs">2</div>
                        </div>
                        <h3 className="text-xl font-black text-white mb-1 text-center font-headline">{top2.name}</h3>
                        <span className="text-secondary font-black text-[10px] uppercase tracking-widest mb-6">{top2.points.toLocaleString()} Points</span>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-[85%] shadow-[0_0_8px_rgba(193,128,255,0.4)]"></div>
                        </div>
                    </div>
                )}

                {/* Rank 1 (Featured) */}
                {top1 && (
                    <div className="glass-panel p-10 md:h-[420px] flex flex-col items-center justify-end relative overflow-hidden group hover:bg-white/5 transition-all border-primary/30">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        <div className="relative mb-10">
                            <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl group-hover:blur-4xl transition-all"></div>
                            <div className="w-28 h-28 rounded-3xl overflow-hidden border-4 border-primary relative z-10 -rotate-3 group-hover:rotate-0 transition-transform shadow-2xl">
                                <img src={images[1]} alt={top1.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-[#070d1f] shadow-lg">
                                <span className="material-symbols-outlined text-[#070d1f] font-black text-2xl">stars</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-white mb-1 text-center font-headline tracking-tighter">{top1.name}</h3>
                        <span className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-8">{top1.points.toLocaleString()} Astral Points</span>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-full shadow-[0_0_12px_rgba(133,173,255,0.6)]"></div>
                        </div>
                    </div>
                )}

                {/* Rank 3 */}
                {top3 && (
                    <div className="glass-panel p-8 md:h-[320px] flex flex-col items-center justify-end group hover:bg-white/5 transition-all">
                        <div className="relative mb-8">
                            <div className="w-18 h-18 rounded-2xl overflow-hidden border-2 border-tertiary/40 -rotate-3 group-hover:rotate-0 transition-transform shadow-xl">
                                <img src={images[3]} alt={top3.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#070d1f] rounded-full flex items-center justify-center border-2 border-tertiary text-tertiary font-black text-xs">3</div>
                        </div>
                        <h3 className="text-lg font-black text-white mb-1 text-center font-headline">{top3.name}</h3>
                        <span className="text-tertiary font-black text-[10px] uppercase tracking-widest mb-6">{top3.points.toLocaleString()} Points</span>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary w-[70%] shadow-[0_0_8px_rgba(255,109,175,0.4)]"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Standings List */}
            <div className="space-y-4 pb-20">
                <div className="flex items-center justify-between px-4 mb-8">
                    <h2 className="text-2xl font-black font-headline text-white tracking-tight">Node Hierarchy</h2>
                    <div className="flex gap-2 font-black text-[8px] uppercase tracking-widest">
                        <button className="px-5 py-2 rounded-full bg-primary text-[#070d1f] border border-primary/20">All Time</button>
                        <button className="px-5 py-2 rounded-full bg-white/5 text-on-surface-variant hover:bg-white/10 transition-colors">Current Cycle</button>
                    </div>
                </div>

                {remainingList.map((item, index) => {
                    const isDormant = index % 3 === 0;
                    return (
                        <div key={item.rank} className="glass-panel p-5 flex items-center gap-6 group hover:translate-x-2 transition-all cursor-pointer">
                            <span className="w-8 text-center font-black text-on-surface-variant group-hover:text-primary transition-colors text-xs">
                                {item.rank.toString().padStart(2, '0')}
                            </span>
                            <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0">
                                <img src={images[(index % 3) + 4]} alt={item.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-black text-white group-hover:text-primary transition-colors">{item.name}</h4>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className={`text-[8px] uppercase font-black tracking-widest ${isDormant ? 'text-tertiary opacity-60' : 'text-secondary'}`}>
                                        {isDormant ? 'Node Dormant' : 'Link Active'}
                                    </span>
                                    <span className="w-1 h-1 bg-white/10 rounded-full"></span>
                                    <span className="text-[10px] text-on-surface-variant font-bold uppercase opacity-60">{item.students} Entities</span>
                                </div>
                            </div>
                            <div className="text-right hidden sm:block shrink-0">
                                <div className="font-headline font-black text-white">{item.points.toLocaleString()} pts</div>
                                <div className={`text-[8px] flex items-center justify-end gap-1 font-black ${isDormant ? 'text-tertiary' : 'text-primary'}`}>
                                    <span className="material-symbols-outlined text-xs">{isDormant ? 'trending_down' : 'trending_up'}</span>
                                    {isDormant ? '-3.2%' : '+5.4%'}
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-on-surface-variant opacity-20 group-hover:opacity-100 transition-opacity">chevron_right</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LeaderboardPage;
