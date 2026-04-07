import React from 'react';
import OptimizedCursorGlow from '../../components/ui/OptimizedCursorGlow';

export default function AmbassadorDashboard() {
    return (
        <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full relative selection:bg-primary/20">
            <OptimizedCursorGlow className="bg-primary/20" />

            <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-black font-headline tracking-tighter text-white mb-2">Ambassador Hub</h1>
                    <p className="text-on-surface-variant font-medium opacity-60">You are currently operating in the <span className="text-primary">Gold Tier</span>.</p>
                </div>
                <div className="bg-primary/10 px-6 py-3 rounded-2xl border border-primary/30 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Gold Level Unlocked</span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { icon: 'groups', label: 'Onboarded', value: '124', color: 'text-primary', bg: 'bg-primary/10' },
                    { icon: 'calendar_month', label: 'Moderated', value: '14', color: 'text-secondary', bg: 'bg-secondary/10' },
                    { icon: 'trending_up', label: 'Impact', value: '+150', color: 'text-tertiary', bg: 'bg-tertiary/10' }
                ].map((stat, i) => (
                    <div key={i} className="glass-panel p-8 group hover:bg-white/5 transition-all">
                        <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <span className={`material-symbols-outlined ${stat.color} text-2xl`}>{stat.icon}</span>
                        </div>
                        <div className="text-4xl font-black font-headline text-white mb-1 tracking-tighter">{stat.value}</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-60">{stat.label}</div>
                    </div>
                ))}
            </div>

            <section className="glass-panel p-8">
                <h3 className="font-headline font-black text-xl text-white mb-8 tracking-tight">Recent Campus Integrations</h3>
                <div className="space-y-4">
                    {[
                        { title: 'CET Green Campus Drive', participants: '50+ Registered', yield: '150 🜚', color: 'text-primary' },
                        { title: "Tathva '26 Launch Event", participants: '120+ Registered', yield: '300 🜚', color: 'text-secondary' },
                        { title: 'MEC Innovation Summit', participants: '85+ Registered', yield: '200 🜚', color: 'text-tertiary' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
                            <div>
                                <div className="text-sm font-black text-white mb-1 group-hover:text-primary transition-colors">{item.title}</div>
                                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">{item.participants}</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-xs font-black uppercase tracking-widest ${item.color}`}>+ {item.yield}</span>
                                <span className="material-symbols-outlined text-on-surface-variant opacity-20 group-hover:opacity-100 transition-opacity">chevron_right</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
