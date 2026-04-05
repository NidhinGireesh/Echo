import React, { useEffect } from 'react';
import { users } from '../data/mockData';

const MessagingPage = () => {
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

    const currentUser = users[0];

    return (
        <div className="flex h-[calc(100vh-64px)] w-full overflow-hidden relative z-10 font-body selection:bg-primary/20">
            {/* Interactive Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[80px]"></div>

            {/* Left Pane: Inbox */}
            <aside className="w-80 lg:w-96 flex-shrink-0 border-r border-white/5 flex flex-col bg-[#070d1f]/40 backdrop-blur-2xl">
                <div className="p-6 border-b border-white/5">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="font-headline text-xl font-black tracking-tight text-white">Inbox</h1>
                        <span className="bg-secondary/20 text-secondary px-2 py-0.5 rounded-full text-[10px] font-black border border-secondary/20">12 NEW</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex-1 bg-white/10 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5">Primary</button>
                        <button className="flex-1 text-on-surface-variant py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors">Archive</button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
                    <div className="glass-panel p-4 bg-primary/10 border-primary/30 group cursor-pointer transition-all">
                        <div className="flex gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border border-white/10 shrink-0">
                                <span className="material-symbols-outlined text-[#070d1f] font-black">rocket_launch</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-sm font-black truncate text-white">Star-Ship Protocol</h3>
                                    <span className="text-[9px] text-primary font-black uppercase">2m</span>
                                </div>
                                <p className="text-xs text-on-surface-variant line-clamp-1 mt-0.5 font-medium">Alex: The astral assets are ready...</p>
                                <div className="flex mt-2 gap-1.5">
                                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-[8px] rounded-full uppercase tracking-tighter font-black border border-primary/20">Engineering</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mock Chat Items */}
                    {[1,2,3,4].map(i => (
                        <div key={i} className="p-4 rounded-xl hover:bg-white/5 transition-colors group border border-transparent cursor-pointer">
                            <div className="flex gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/10">
                                    <img alt="User" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src={`https://i.pravatar.cc/100?u=${i+20}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-sm font-bold text-on-surface-variant group-hover:text-white transition-colors">Explorer_{i}42</h3>
                                        <span className="text-[9px] text-on-surface-variant/40 font-bold uppercase">{i}h</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant/60 line-clamp-1 mt-0.5">Static transmission received...</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Middle Pane: Chat Content */}
            <main className="flex-1 flex flex-col bg-transparent relative overflow-hidden backdrop-blur-sm">
                {/* Chat Header */}
                <header className="h-16 flex-shrink-0 flex items-center justify-between px-8 border-b border-white/5 bg-[#070d1f]/40 backdrop-blur-2xl z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[#070d1f] font-black text-xs">SP</div>
                        <div>
                            <h2 className="text-sm font-black font-headline text-white">Star-Ship Protocol</h2>
                            <span className="text-[9px] text-primary font-black uppercase flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(133,173,255,1)]"></span> 4 active now
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
                            <span className="material-symbols-outlined">videocam</span>
                        </button>
                        <button className="p-2 text-on-surface-variant hover:text-white transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                        </button>
                    </div>
                </header>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto px-8 py-10 space-y-8 custom-scrollbar relative z-10">
                    <div className="flex items-center gap-4 py-4">
                        <div className="h-px flex-1 bg-white/5"></div>
                        <span className="text-[9px] font-black text-on-surface-variant/40 tracking-[0.3em] uppercase">Transmission Start</span>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>
                    
                    <div className="flex gap-4 max-w-2xl">
                        <img alt="Alex" className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/100?u=alex" />
                        <div className="space-y-1">
                            <div className="flex items-baseline gap-2">
                                <span className="text-xs font-black text-white">Alex Chen</span>
                                <span className="text-[9px] text-on-surface-variant/40 font-bold uppercase">14:20</span>
                            </div>
                            <div className="glass-panel p-4 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-sm leading-relaxed text-on-surface-variant font-medium">
                                Hey team, I've pushed the initial wireframes for the Astral Orb navigation. Check the asset pane.
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 shrink-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-xs" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
                        </div>
                        <div className="space-y-1 text-right">
                            <div className="flex items-baseline gap-2 justify-end">
                                <span className="text-[9px] text-on-surface-variant/40 font-bold uppercase">14:22</span>
                                <span className="text-xs font-black text-primary">You</span>
                            </div>
                            <div className="bg-primary/10 border border-primary/20 p-4 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl text-sm leading-relaxed text-primary-dim font-medium backdrop-blur-md shadow-lg shadow-primary/5">
                                Looks incredible. I love the fluid motion on the hover states.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <footer className="p-6 bg-[#070d1f]/60 backdrop-blur-3xl border-t border-white/5 z-20">
                    <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-2xl border border-white/10 focus-within:border-primary/40 transition-colors group">
                        <button className="text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">add_circle</span>
                        </button>
                        <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 placeholder:text-on-surface-variant/40 text-white font-medium" placeholder="Send transmission..." type="text" />
                        <div className="flex items-center gap-3">
                            <button className="text-on-surface-variant hover:text-white transition-colors">
                                <span className="material-symbols-outlined">sentiment_satisfied</span>
                            </button>
                            <button className="bg-primary hover:bg-primary-dim text-[#070d1f] w-10 h-10 rounded-full flex items-center justify-center active:scale-90 transition-all shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined font-black" style={{fontSize: '20px'}}>send</span>
                            </button>
                        </div>
                    </div>
                </footer>
            </main>

            {/* Right Pane: Shared Assets */}
            <aside className="hidden xl:flex w-80 flex-col border-l border-white/5 bg-[#070d1f]/40 backdrop-blur-2xl p-8 z-10">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-8 block">Shared Nodes</h3>
                <div className="space-y-6">
                    {[1, 2].map(i => (
                        <div key={i} className="group relative aspect-video rounded-2xl overflow-hidden glass-panel border-white/5 p-1 hover:border-primary/30 transition-all cursor-pointer">
                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-40"></div>
                                <img alt="Shared Asset" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" src={`https://picsum.photos/seed/${i+100}/400/225`} />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-sm">
                                    <button className="bg-white/10 p-3 rounded-full text-white border border-white/20 hover:bg-white/20">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-auto pt-8">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-6 block">Direct Access</h3>
                    <div className="grid grid-cols-4 gap-3">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="relative aspect-square rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group cursor-pointer hover:border-primary/20 transition-all">
                                <img src={`https://i.pravatar.cc/100?u=user${i}`} className="w-full h-full object-cover rounded-lg opacity-40 group-hover:opacity-100 transition-all" alt="Avatar" />
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-[#070d1f]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default MessagingPage;
