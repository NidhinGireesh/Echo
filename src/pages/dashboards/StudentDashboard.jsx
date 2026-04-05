import React, { useEffect } from 'react';
import { users } from '../../data/mockData';

const user = users[0];

const StudentDashboard = () => {
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
        <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full relative">
            {/* Interactive Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[80px]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
                {/* Welcome Tile (Wide) */}
                <section className="col-span-12 lg:col-span-8 glass-panel p-8 relative overflow-hidden group">
                    <div className="relative z-10 h-full flex flex-col justify-center">
                        <span className="text-secondary font-headline font-bold tracking-widest text-xs uppercase mb-2">Academic Overview</span>
                        <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-4 leading-tight">
                            Welcome back,<br />
                            <span className="text-primary-fixed">{user.name}</span>
                        </h2>
                        <p className="text-on-surface-variant max-w-md mb-8 text-lg">
                            You have 3 collaboration requests and your latest Project "K-Rail Tracker" is trending in the marketplace.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-surface-container-high/30 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/5 font-headline">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                                </div>
                                <div>
                                    <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter">Global Rank</p>
                                    <p className="font-bold">#{user.rank}</p>
                                </div>
                            </div>
                            <div className="bg-surface-container-high/30 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/5 font-headline">
                                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                                </div>
                                <div>
                                    <p className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter">Credits</p>
                                    <p className="font-bold">{user.credits?.toLocaleString() || '1,250'} 🜚</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                        <img alt="Background pattern" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" />
                    </div>
                </section>

                {/* Featured Asset (Tall) */}
                <section className="col-span-12 lg:col-span-4 glass-panel p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-headline font-bold text-lg">Featured Asset</h3>
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_horiz</span>
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 group">
                        <img alt="Tourism UI Blueprint" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop" />
                        <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-primary border border-primary/20 uppercase tracking-widest">
                            Hot Deal
                        </div>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-headline font-extrabold text-xl mb-1">Kerala Tourism UI Kit</h4>
                        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Premium modular design system for building dynamic tourism apps.</p>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center -space-x-3">
                                <img alt="Contributor" className="w-8 h-8 rounded-full border-2 border-surface" src="https://i.pravatar.cc/100?u=1" />
                                <img alt="Contributor" className="w-8 h-8 rounded-full border-2 border-surface" src="https://i.pravatar.cc/100?u=2" />
                                <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-[10px] font-bold">+12</div>
                            </div>
                            <span className="font-headline font-black text-xl text-primary">450 🜚</span>
                        </div>
                        <button className="w-full py-3 bg-white/5 border border-white/5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm">
                            Purchase License
                        </button>
                    </div>
                </section>

                {/* Quick Actions (Medium) */}
                <section className="col-span-12 md:col-span-6 lg:col-span-6 glass-panel p-6">
                    <h3 className="font-headline font-bold text-lg mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: 'upload_file', label: 'Mint Asset', color: 'text-primary', bg: 'bg-primary/10' },
                            { icon: 'groups', label: 'Join Squad', color: 'text-secondary', bg: 'bg-secondary/10' },
                            { icon: 'rocket_launch', label: 'Launch Lab', color: 'text-tertiary', bg: 'bg-tertiary/10' },
                            { icon: 'payments', label: 'Withdraw', color: 'text-primary-fixed', bg: 'bg-primary-fixed/10' },
                        ].map((action, i) => (
                            <button key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group backdrop-blur-md">
                                <div className={`w-12 h-12 rounded-full ${action.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                    <span className={`material-symbols-outlined ${action.color}`}>{action.icon}</span>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-tighter opacity-80">{action.label}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Skill Tree (Small) */}
                <section className="col-span-12 md:col-span-6 lg:col-span-6 glass-panel p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-headline font-bold text-lg">Skill Tree</h3>
                        <span className="text-xs text-primary font-black uppercase tracking-widest">LVL {user.level || 24}</span>
                    </div>
                    <div className="space-y-6">
                        {(user.skills || [
                            { name: 'Full-Stack Development', level: '88%', fill: 88, color: 'bg-primary', text: 'text-primary' },
                            { name: 'UI/UX Design', level: '64%', fill: 64, color: 'bg-secondary', text: 'text-secondary' },
                            { name: 'Project Management', level: '42%', fill: 42, color: 'bg-tertiary', text: 'text-tertiary' }
                        ]).map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">
                                    <span>{skill.name}</span>
                                    <span className={skill.text}>{skill.level}</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full ${skill.color} rounded-full shadow-[0_0_12px_rgba(133,173,255,0.3)]`} style={{ width: `${skill.fill}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-4 rounded-2xl bg-white/5 flex items-center justify-between border border-white/5">
                        <div>
                            <p className="text-[10px] uppercase font-black text-on-surface-variant tracking-wider">Staking Earnings</p>
                            <p className="text-xl font-headline font-black text-on-surface">+12.4%</p>
                        </div>
                        <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
                    </div>
                </section>

                {/* Recent Activity (Asymmetric Wide) */}
                <section className="col-span-12 glass-panel p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-headline font-extrabold text-2xl">Streaming Activity</h3>
                        <div className="flex gap-2">
                            <button className="bg-primary text-[#070d1f] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Live</button>
                            <button className="bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">Historical</button>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: 'Syllabus Update Shared', desc: 'KTU 2024 Scheme uploaded to main network.', time: '2m ago', tag: '#academics', color: 'text-primary' },
                            { title: 'Collaboration Request', desc: 'MEC TinkerHub wants you for "HackForKerala".', time: '1h ago', tag: '#teams', color: 'text-secondary' },
                            { title: 'Sale Confirmed', desc: '"Malayalam NLP Dataset" sold for 120 🜚.', time: '4h ago', tag: '#sales', color: 'text-tertiary' }
                        ].map((activity, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                                <div className="w-10 h-10 rounded-xl bg-surface-container-highest/50 flex items-center justify-center border border-white/5">
                                    <span className="material-symbols-outlined text-on-surface-variant">rocket</span>
                                </div>
                                <div className="flex-1">
                                    <h5 className="font-bold text-sm">{activity.title}</h5>
                                    <p className="text-xs text-on-surface-variant opacity-60">{activity.desc}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-on-surface uppercase opacity-40">{activity.time}</p>
                                    <span className={`text-[10px] font-bold ${activity.color}`}>{activity.tag}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StudentDashboard;
