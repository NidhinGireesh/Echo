import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

    return (
        <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/20">
            {/* Liquid Background Orbs */}
            <div className="liquid-bg">
                <div className="orb w-[500px] h-[500px] bg-primary/10 top-[-10%] left-[-10%]"></div>
                <div className="orb w-[600px] h-[600px] bg-secondary/10 bottom-[-20%] right-[-10%] animation-delay-[-5s]"></div>
                <div className="orb w-[400px] h-[400px] bg-tertiary/5 top-[40%] left-[50%] animation-delay-[-10s]"></div>
            </div>

            {/* TopNavBar */}
            <header className="fixed top-0 left-0 right-0 h-16 z-[60] bg-[#070d1f]/40 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-6">
                <div className="flex items-center gap-8 flex-1">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[#070d1f]">
                            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_queue</span>
                        </div>
                        <h1 className="text-xl font-headline font-black text-white tracking-tighter leading-none hidden sm:block">CampusSphere</h1>
                    </Link>
                    
                    <div className="relative max-w-md w-full group hidden md:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
                        <input 
                            className="w-full bg-white/5 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-on-surface-variant/40" 
                            placeholder="Explore the astral..." 
                            type="text" 
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dim text-[#070d1f] px-5 py-1.5 rounded-full text-sm font-black active:scale-95 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">bolt</span>
                        Create
                    </button>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                        <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full"></span>
                        </button>
                        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                    <div className="w-px h-6 bg-white/10 mx-2"></div>
                    <Link to="/profile" className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/150?u=aida" alt="User" className="w-8 h-8 rounded-full border border-primary/30 object-cover" />
                    </Link>
                </div>
            </header>

            {/* SideNavBar */}
            <aside className="fixed left-0 top-0 h-full w-64 z-50 bg-[#0c1326]/40 backdrop-blur-2xl border-r border-white/5 hidden lg:flex flex-col py-8 px-4 pt-24">
                <nav className="flex-1 space-y-1">
                    {[
                        { icon: 'dashboard', label: 'Dashboard', path: '/dashboard/student' },
                        { icon: 'storefront', label: 'Marketplace', path: '/marketplace' },
                        { icon: 'explore', label: 'Discover', path: '/discover' },
                        { icon: 'calendar_today', label: 'Events', path: '/events' },
                        { icon: 'chat_bubble', label: 'Messaging', path: '/messages' },
                        { icon: 'leaderboard', label: 'Leaderboard', path: '/leaderboard' },
                        { icon: 'account_circle', label: 'Profile', path: '/profile' },
                    ].map((item) => (
                        <Link 
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 py-3 px-4 rounded-xl font-bold transition-all duration-300 group shadow-sm ${
                                isActive(item.path) 
                                ? 'text-primary bg-[#1c253e] border border-primary/30 translate-x-1 shadow-lg shadow-[#070d1f]' 
                                : 'text-on-surface-variant hover:text-white border border-transparent hover:bg-white/5'
                            }`}
                        >
                            <span className={`material-symbols-outlined ${isActive(item.path) ? 'fill-[1]' : 'group-hover:scale-110 transition-transform'}`}>
                                {item.icon}
                            </span>
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
                    <button className="w-full bg-gradient-to-r from-primary to-primary-dim text-[#070d1f] font-black py-3 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-primary/10">
                        <span className="material-symbols-outlined">add_circle</span>
                        <span>New Post</span>
                    </button>
                    <div className="space-y-1 text-xs font-bold text-on-surface-variant">
                        <Link to="/help" className="flex items-center gap-3 py-2 px-4 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">help</span>
                            <span>Help Center</span>
                        </Link>
                        <button className="w-full flex items-center gap-3 py-2 px-4 hover:text-white transition-colors text-left">
                            <span className="material-symbols-outlined text-sm">logout</span>
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#070d1f]/60 backdrop-blur-2xl border-t border-white/5 px-6 py-3 flex justify-between items-center z-[60]">
                {[
                    { icon: 'dashboard', label: 'Dash', path: '/dashboard/student' },
                    { icon: 'storefront', label: 'Market', path: '/marketplace' },
                    { icon: 'add_box', label: 'Add', path: '#', center: true },
                    { icon: 'explore', label: 'Explore', path: '/discover' },
                    { icon: 'account_circle', label: 'Me', path: '/profile' },
                ].map((item, i) => (
                    item.center ? (
                        <button key={i} className="bg-primary w-12 h-12 rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-primary/20 text-[#070d1f]">
                            <span className="material-symbols-outlined font-bold text-2xl">add</span>
                        </button>
                    ) : (
                        <Link 
                            key={item.path}
                            to={item.path}
                            className={`flex flex-col items-center gap-1 ${isActive(item.path) ? 'text-primary' : 'text-on-surface-variant'}`}
                        >
                            <span className={`material-symbols-outlined ${isActive(item.path) ? 'fill-[1]' : ''}`}>
                                {item.icon}
                            </span>
                            <span className="text-[10px] font-bold">{item.label}</span>
                        </Link>
                    )
                ))}
            </nav>

            {/* Main Content Area */}
            <main className="lg:ml-64 pt-16 pb-20 md:pb-0 min-h-screen relative z-10">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
