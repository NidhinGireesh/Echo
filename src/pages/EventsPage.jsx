import React, { useEffect } from 'react';
import { events, users } from '../data/mockData';

const EventsPage = () => {
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
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12 relative z-10">
            {/* Interactive Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[80px]"></div>

            {/* Featured Events Carousel Header */}
            <section className="space-y-6">
                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Curation</span>
                        <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight">Featured Experiences</h2>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full border border-white/5 text-on-surface-variant hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="p-2 rounded-full border border-white/5 text-on-surface-variant hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>

                <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden group glass-panel">
                    <div className="absolute inset-0 z-0 scale-110 blur-2xl opacity-20 mix-blend-color-dodge transition-transform duration-700 group-hover:scale-100">
                        <img alt="" className="w-full h-full object-cover" src={events[0]?.image || "https://images.unsplash.com/photo-1540575861501-7ad0582371f3?q=80&w=2070&auto=format&fit=crop"} />
                    </div>
                    <div className="relative z-10 w-full h-full overflow-hidden">
                        <img alt="Featured Event" className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src={events[0]?.image || "https://images.unsplash.com/photo-1540575861501-7ad0582371f3?q=80&w=2070&auto=format&fit=crop"} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-[#070d1f]/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-2xl transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                            <div className="flex gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-black uppercase tracking-widest border border-secondary/20">New</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-on-surface text-xs font-bold">{events[0]?.category || 'Tech Conference'}</span>
                            </div>
                            <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">{events[0]?.title || 'Tathva 2026'}</h3>
                            <p className="text-on-surface-variant text-lg mb-8 line-clamp-2">Join the top engineering minds shaping the future of Kerala's tech ecosystem.</p>
                            <div className="flex flex-wrap gap-4">
                                <button className="glass-button !px-8 !py-3">Get Tickets</button>
                                <button className="glass-button !px-8 !py-3 !from-white/5 !to-transparent">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Club Events - Bento Grid */}
            <section className="space-y-8">
                <div className="flex justify-between items-center">
                    <h2 className="font-headline text-2xl font-bold text-on-surface">Upcoming Club Events</h2>
                    <button className="text-primary font-black text-xs hover:text-white uppercase tracking-[0.2em] transition-colors">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto">
                    {/* Large Feature Card */}
                    <div className="md:col-span-2 md:row-span-2 glass-panel p-6 flex flex-col group">
                        <div className="relative h-64 md:h-full rounded-[1.5rem] overflow-hidden mb-6">
                            <img alt="Club Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={events[1]?.image || "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"} />
                            <div className="absolute top-4 left-4 bg-[#070d1f]/90 backdrop-blur-md p-3 rounded-2xl text-center min-w-[60px] shadow-xl border border-white/5">
                                <p className="text-primary font-black text-xl leading-none">24</p>
                                <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mt-1">Oct</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-headline text-2xl font-black group-hover:text-primary transition-colors duration-300">{events[1]?.title || 'Drishti 2026'}</h4>
                            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-bold opacity-60">
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">location_on</span> {events[1]?.college || 'CET Trivandrum'}</span>
                                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">schedule</span> {events[1]?.date || '9:00 PM'}</span>
                            </div>
                            <div className="pt-4 flex justify-between items-center border-t border-white/5">
                                <div className="flex -space-x-3">
                                    {users.map(u => (
                                        <img key={u.id} alt="attendee" className="w-8 h-8 rounded-full border-2 border-[#070d1f]" src={u.avatar} />
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-[#070d1f] bg-white/5 flex items-center justify-center text-[10px] font-bold">+42</div>
                                </div>
                                <button className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-white transition-all duration-300">
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Dynamic Events List */}
                    {events.slice(2, 4).map((event, idx) => (
                        <div key={idx} className="md:col-span-2 glass-panel p-6 flex gap-6 group">
                            <div className="w-32 h-full rounded-2xl overflow-hidden shrink-0">
                                <img alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={event.image} />
                            </div>
                            <div className="flex flex-col justify-between py-1 flex-1">
                                <div>
                                    <span className="text-tertiary text-[10px] font-black tracking-[0.2em] uppercase mb-2 block">{event.category}</span>
                                    <h4 className="font-headline text-lg font-black group-hover:text-primary transition-colors duration-300">{event.title}</h4>
                                    <p className="text-on-surface-variant text-xs mt-2 line-clamp-1 opacity-60 font-bold uppercase">{event.college}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded-md border border-primary/20">{event.date.split(',')[0]}</span>
                                    <span className="text-on-surface-variant text-xs font-bold opacity-60 uppercase">{event.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Categories */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: 'sports_esports', label: 'Gaming', color: 'text-primary', bg: 'bg-primary/10' },
                    { icon: 'palette', label: 'Creative', color: 'text-secondary', bg: 'bg-secondary/10' },
                    { icon: 'science', label: 'STEM', color: 'text-tertiary', bg: 'bg-tertiary/10' },
                    { icon: 'fitness_center', label: 'Lifestyle', color: 'text-on-surface', bg: 'bg-white/10' },
                ].map((cat, i) => (
                    <button key={i} className="glass-panel p-6 flex flex-col items-center gap-3 hover:bg-white/5 transition-all group active:scale-95">
                        <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}>
                            <span className={`material-symbols-outlined ${cat.color} text-3xl`}>{cat.icon}</span>
                        </div>
                        <span className="font-black text-xs uppercase tracking-widest opacity-80">{cat.label}</span>
                    </button>
                ))}
            </section>

            <button className="fixed bottom-20 md:bottom-8 right-6 md:right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary text-[#070d1f] shadow-xl shadow-primary/20 flex items-center justify-center hover:scale-110 hover:rotate-90 active:scale-90 transition-all z-[70]">
                <span className="material-symbols-outlined text-2xl font-black">add</span>
            </button>
        </div>
    );
};

export default EventsPage;
