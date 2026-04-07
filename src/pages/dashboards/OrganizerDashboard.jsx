import React from 'react';
import OptimizedCursorGlow from '../../components/ui/OptimizedCursorGlow';

const OrganizerDashboard = () => {
    return (
        <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full relative selection:bg-secondary/20">
            <OptimizedCursorGlow className="bg-primary/20" />

            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black font-headline tracking-tight text-white mb-2">Ambassador Hub</h1>
                    <p className="text-on-surface-variant font-medium opacity-60">Lead your campus community and onboard elite events.</p>
                </div>
                <div className="flex gap-3">
                    <button className="glass-panel px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                        <span className="material-symbols-outlined text-lg">groups</span>
                        Clubs
                    </button>
                    <button className="bg-primary text-[#070d1f] px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-lg font-black">plus_one</span>
                        New Event
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { icon: 'trending_up', label: 'Influence', value: '42.5k', color: 'text-primary', bg: 'bg-primary/10' },
                    { icon: 'person_add', label: 'Onboarded', value: '1,240', color: 'text-secondary', bg: 'bg-secondary/10' },
                    { icon: 'share', label: 'Outreach', value: '12 Active', color: 'text-tertiary', bg: 'bg-tertiary/10' },
                    { icon: 'workspace_premium', label: 'Tier', value: 'Silver', color: 'text-white', bg: 'bg-white/10' }
                ].map((stat, i) => (
                    <div key={i} className="glass-panel p-6 group transition-all hover:translate-y-[-4px]">
                        <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <span className={`material-symbols-outlined ${stat.color} text-2xl`}>{stat.icon}</span>
                        </div>
                        <div className="text-3xl font-black font-headline text-white mb-1">{stat.value}</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Event Table */}
                <section className="lg:col-span-2 glass-panel overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center">
                        <h2 className="font-headline font-black text-xl text-white">Event Registry</h2>
                        <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Full Analytics</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/2">
                                    <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Event Node</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Priority</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Reach</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { title: 'Tathva Hackathon', tier: 'Gold', reach: '8,400', status: 'Live', color: 'text-secondary' },
                                    { title: 'Kerala Startup Summit', tier: 'Silver', reach: '5,200', status: 'Pending', color: 'text-tertiary' },
                                    { title: 'Hestia Promo Campaign', tier: 'Free', reach: '1,250', status: 'Done', color: 'text-on-surface-variant' }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors cursor-pointer group">
                                        <td className="px-6 py-5">
                                            <div className="text-sm font-black text-white group-hover:text-primary transition-colors">{row.title}</div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="text-[8px] font-black px-2 py-1 bg-white/5 border border-white/10 rounded-md uppercase tracking-widest">{row.tier}</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-1.5 h-1.5 rounded-full bg-current ${row.color}`}></span>
                                                <span className={`text-[10px] font-black uppercase tracking-tighter ${row.color}`}>{row.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm font-bold text-on-surface-variant opacity-60">{row.reach}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Managed Clubs */}
                <aside className="glass-panel p-6">
                    <h2 className="font-headline font-black text-xl text-white mb-8">Managed Cells</h2>
                    <div className="space-y-4">
                        {[
                            { name: 'IEEE SB MEC', members: '250+', initial: 'I', color: 'bg-primary' },
                            { name: 'TinkerHub MEC', members: '400+', initial: 'T', color: 'bg-secondary' },
                            { name: 'FOSS Cell', members: '180+', initial: 'F', color: 'bg-tertiary' }
                        ].map((club, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 hover:border-primary/20 transition-all cursor-pointer group">
                                <div className={`w-10 h-10 rounded-xl ${club.color} text-[#070d1f] flex items-center justify-center font-black group-hover:scale-110 transition-transform`}>
                                    {club.initial}
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-black text-white mb-0.5">{club.name}</div>
                                    <div className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">{club.members} Nodes</div>
                                </div>
                                <span className="material-symbols-outlined text-on-surface-variant opacity-20 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 rounded-xl border border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-white transition-all">Onboard New Cell</button>
                </aside>
            </div>
        </div>
    );
};

export default OrganizerDashboard;
