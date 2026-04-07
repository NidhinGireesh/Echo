import React from 'react';
import { gamingData } from '../data/mockData';
import OptimizedCursorGlow from '../components/ui/OptimizedCursorGlow';

const GamingHub = () => {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12 relative z-10">
            <OptimizedCursorGlow />

            {/* Gaming Specific Background Orbs */}
            <div className="liquid-bg">
                <div className="orb w-[500px] h-[500px] bg-purple-600/20 top-[-10%] left-[-5%] animation-delay-0"></div>
                <div className="orb w-[600px] h-[600px] bg-green-500/10 bottom-[-20%] right-[-10%] animation-delay-[-5s]"></div>
            </div>

            {/* Header */}
            <header className="space-y-2">
                <div className="flex items-center gap-3 text-purple-400 font-black text-xs uppercase tracking-[0.3em]">
                    <span className="w-8 h-[1px] bg-purple-500/50"></span>
                    The Gaming Arena
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-black text-white tracking-tight">
                    Level <span className="text-gradient !from-purple-400 !to-green-400 italic font-black">Up</span>
                </h1>
            </header>

            {/* Hero Carousel - Live Tournaments */}
            <section className="relative h-[300px] md:h-[450px] rounded-[2.5rem] overflow-hidden group glass-panel border-purple-500/20">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={gamingData.tournaments[0].image} 
                        alt="Featured Tournament" 
                        className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 p-8 md:p-16 flex flex-col justify-end h-full w-full max-w-3xl">
                    <div className="flex gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest border border-red-500/30 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Live Now
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest border border-purple-500/30">
                            {gamingData.tournaments[0].prize} Prize Pool
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        {gamingData.tournaments[0].title}
                    </h2>
                    <div className="flex gap-4">
                        <button className="glass-button !bg-purple-600/40 !border-purple-400/30 !px-10">Register Now</button>
                        <button className="glass-button !from-white/5 !to-transparent !px-10">View Brackets</button>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* LFG Bento Tile */}
                <div className="md:col-span-8 glass-panel p-8 border-green-500/10 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl group-hover:bg-green-500/10 transition-all"></div>
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-2xl font-black text-white mb-2">Looking For Squad</h3>
                            <p className="text-on-surface-variant text-sm font-bold opacity-60">Find teammates for your next conquest.</p>
                        </div>
                        <div className="flex gap-2">
                            <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-on-surface focus:outline-none focus:border-green-500/50">
                                <option>All Games</option>
                                <option>Valorant</option>
                                <option>BGMI</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {gamingData.lfg.map((post) => (
                            <div key={post.id} className="glass-panel !rounded-2xl p-5 border-white/5 hover:bg-white/5 transition-all flex items-center justify-between group/item">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-green-500/20 to-purple-500/20 flex items-center justify-center font-black text-xs text-white border border-white/10">
                                        {post.user.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-white font-black">{post.user}</span>
                                            <span className="px-2 py-0.5 rounded-md bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                                                {post.game}
                                            </span>
                                            <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-widest border border-purple-500/20">
                                                {post.rank}
                                            </span>
                                        </div>
                                        <p className="text-on-surface-variant text-xs font-medium">{post.message}</p>
                                    </div>
                                </div>
                                <button className="px-6 py-2 rounded-xl bg-white/5 hover:bg-green-500 hover:text-[#070d1f] text-xs font-black transition-all border border-white/10">
                                    Join Lobby
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leaderboard Tile */}
                <div className="md:col-span-4 glass-panel p-8 border-purple-500/10 h-full">
                    <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-purple-400">emoji_events</span>
                        Campus Kings
                    </h3>
                    <div className="space-y-6">
                        {gamingData.leaderboard.map((team) => (
                            <div key={team.rank} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${
                                        team.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : 
                                        team.rank === 2 ? 'bg-slate-400/20 text-slate-400' : 
                                        'bg-orange-700/20 text-orange-700'
                                    }`}>
                                        {team.rank}
                                    </span>
                                    <div>
                                        <p className="text-white font-black text-sm">{team.college}</p>
                                        <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold opacity-60">Top Squad • {team.logo}</p>
                                    </div>
                                </div>
                                <span className="text-purple-400 font-black text-sm">{team.points} XP</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 rounded-xl border border-white/5 text-on-surface-variant hover:text-white hover:bg-white/5 transition-all text-xs font-black uppercase tracking-widest">
                        View Ranking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GamingHub;
