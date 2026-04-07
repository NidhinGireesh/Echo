import React from 'react';
import { lifestyleData } from '../data/mockData';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

const LifestyleHub = () => {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12 relative z-10 font-body">
            <OptimizedCursorGlow />

            {/* Lifestyle Specific Background Orbs */}
            <div className="liquid-bg">
                <div className="orb w-[500px] h-[500px] bg-yellow-500/10 top-[-10%] right-[10%] animation-delay-0"></div>
                <div className="orb w-[600px] h-[600px] bg-red-500/5 bottom-[-15%] left-[-5%] animation-delay-[-6s]"></div>
            </div>

            {/* Header */}
            <header className="space-y-2">
                <div className="flex items-center gap-3 text-yellow-500 font-black text-xs uppercase tracking-[0.3em]">
                    <span className="w-8 h-[1px] bg-yellow-500/50"></span>
                    The Lifestyle Hub
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tight">
                    Living <span className="text-red-400 italic">Bold</span>
                </h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Community Drives Tile */}
                <div className="lg:col-span-8 space-y-8">
                    <section className="glass-panel p-8 md:p-10 border-white/5 bg-gradient-to-br from-yellow-500/10 to-transparent">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <h3 className="text-3xl font-black text-white mb-2">Community Drives</h3>
                                <p className="text-on-surface-variant text-sm font-bold opacity-70">Impact beyond the classroom.</p>
                            </div>
                            <button className="text-yellow-400 font-black text-xs hover:text-white uppercase tracking-[0.2em] transition-colors pb-1 border-b border-yellow-400/30">View All Drives</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {lifestyleData.communityDrives.map((drive) => (
                                <div key={drive.id} className="glass-panel p-6 border-white/10 hover:bg-white/5 transition-all group flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-lg font-black text-white group-hover:text-yellow-400 transition-colors leading-tight">{drive.title}</h4>
                                            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-white transition-colors">volunteer_activism</span>
                                        </div>
                                        <div className="space-y-2 text-xs font-bold text-on-surface-variant opacity-60 uppercase tracking-widest">
                                            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">schedule</span> {drive.date}</p>
                                            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> {drive.location}</p>
                                        </div>
                                    </div>
                                    <div className="pt-6 flex justify-between items-center border-t border-white/5 mt-4">
                                        <span className="text-on-surface text-xs font-black">{drive.attendees} Joined</span>
                                        <button className="px-6 py-2 rounded-xl bg-yellow-500/20 text-yellow-400 text-[10px] font-black uppercase tracking-widest border border-yellow-500/30 hover:bg-yellow-500 hover:text-[#070d1f] transition-all">
                                            RSVP Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Mega Events Horizontal Card */}
                    <section className="glass-panel p-8 border-white/5 relative overflow-hidden group min-h-[300px] flex flex-col justify-center">
                        <div className="absolute inset-x-0 bottom-0 top-0 z-0">
                            <img 
                                src={lifestyleData.megaEvents[0].image} 
                                alt="Mega Event" 
                                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#070d1f] via-[#070d1f]/80 to-transparent"></div>
                        </div>
                        <div className="relative z-10 max-w-lg space-y-4">
                            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-[10px] font-black tracking-[0.2em] uppercase border border-red-500/20 w-fit">Mega Event</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                {lifestyleData.megaEvents[0].title}
                            </h2>
                            <p className="text-on-surface-variant font-bold opacity-70">Experiencing the grandest cultural procession of the year. Save the dates.</p>
                            <div className="pt-4 flex gap-4">
                                <button className="glass-button !px-8 !py-3 !bg-red-500/30 !border-red-400/30">Get Passes</button>
                                <span className="flex items-center gap-2 text-white font-black text-xs"><span className="material-symbols-outlined">event</span> {lifestyleData.megaEvents[0].date}</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Campus Life Board (Reddit Style) */}
                <div className="lg:col-span-4 glass-panel p-8 border-white/5 flex flex-col max-h-[800px]">
                    <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-red-400">forum</span>
                            Campus Life Board
                        </h3>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Real talk. Real people.</p>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-6 no-scrollbar">
                        {lifestyleData.discussionFeed.map((post) => (
                            <div key={post.id} className="space-y-3 group/post cursor-pointer border-b border-white/5 pb-4 hover:border-white/20 transition-all">
                                <div className="flex justify-between items-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">
                                    <span>r/{post.author}</span>
                                    <span>{post.time}</span>
                                </div>
                                <h4 className="text-sm font-black text-white group-hover/post:text-red-400 transition-colors leading-relaxed">
                                    {post.topic}
                                </h4>
                                <div className="flex gap-4 text-xs font-bold text-on-surface-variant opacity-60">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">chat_bubble</span> {post.replies}</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">share</span> Share</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button className="w-full mt-8 py-4 rounded-xl bg-gradient-to-br from-red-500/20 to-transparent text-white text-xs font-black uppercase tracking-widest border border-red-500/20 hover:scale-[1.02] active:scale-95 transition-all">
                        Post to Board
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LifestyleHub;
