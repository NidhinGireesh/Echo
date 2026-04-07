import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { users } from '../../data/mockData';
import SmoothScroll from './SmoothScroll';

const user = users[0];

const DashboardLayout = ({ children }) => {
    const location = useLocation();
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

    const navItems = [
        { icon: 'dashboard', label: 'Dashboard', path: '/dashboard/student' },
        { icon: 'storefront', label: 'Marketplace', path: '/marketplace' },
        { icon: 'explore', label: 'Discover', path: '/discover' },
    ];

    const eventSubItems = [
        { icon: 'sports_esports', label: 'Gaming', path: '/gaming' },
        { icon: 'science', label: 'STEM', path: '/stem' },
        { icon: 'palette', label: 'Creative', path: '/creative' },
        { icon: 'fitness_center', label: 'Lifestyle', path: '/lifestyle' },
    ];

    const bottomNavItems = [
        { icon: 'chat_bubble', label: 'Messaging', path: '/messages' },
        { icon: 'leaderboard', label: 'Leaderboard', path: '/leaderboard' },
        { icon: 'account_circle', label: 'Profile', path: '/profile' },
    ];

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/20">
                {/* ... (Background Orbs remain unchanged) ... */}
                <div className="liquid-bg">
                    {/* (Orbs code remains the same as before) */}
                    <div className={`orb w-[500px] h-[500px] top-[-10%] left-[-10%] transition-colors duration-1000 ${
                        isActive('/gaming') ? 'bg-purple-600/20' : 
                        isActive('/stem') ? 'bg-cyan-600/20' : 
                        isActive('/creative') ? 'bg-magenta-600/20' : 
                        isActive('/lifestyle') ? 'bg-yellow-500/10' : 'bg-primary/10'
                    }`} style={isActive('/creative') ? {backgroundColor: 'rgba(255, 0, 255, 0.1)'} : {}}></div>
                    <div className={`orb w-[600px] h-[600px] bottom-[-20%] right-[-10%] animation-delay-[-5s] transition-colors duration-1000 ${
                        isActive('/gaming') ? 'bg-green-500/10' : 
                        isActive('/stem') ? 'bg-blue-600/10' : 
                        isActive('/creative') ? 'bg-orange-500/10' : 
                        isActive('/lifestyle') ? 'bg-red-500/10' : 'bg-secondary/10'
                    }`}></div>
                    <div className="orb w-[400px] h-[400px] bg-tertiary/5 top-[40%] left-[50%] animation-delay-[-10s]"></div>
                </div>

                {/* TopNavBar remains the same */}
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
                        <Link to="/mint" className="hidden sm:flex items-center gap-2 bg-gradient-to-br from-primary/30 to-[#070d1f] backdrop-blur-xl border border-white/10 text-white px-5 py-1.5 rounded-full text-xs font-black hover:scale-105 active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-lg">bolt</span>
                            Create
                        </Link>
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
                            <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full border border-primary/30 object-cover" />
                        </Link>
                    </div>
                </header>

                {/* SideNavBar */}
                <aside className="fixed left-0 top-0 h-full w-64 z-50 bg-[#0c1326]/40 backdrop-blur-2xl border-r border-white/5 hidden lg:flex flex-col py-8 px-4 pt-24">
                    <nav className="flex-1 space-y-1">
                        {navItems.map((item) => (
                            <Link 
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 py-3 px-4 rounded-xl font-bold transition-all duration-300 group shadow-sm ${
                                    isActive(item.path) 
                                    ? 'text-violet-400 bg-white/5 border border-violet-500/30 translate-x-1' 
                                    : 'text-on-surface-variant hover:text-white border border-transparent hover:bg-white/5 hover:backdrop-blur-md'
                                }`}
                            >
                                <span className={`material-symbols-outlined ${isActive(item.path) ? 'fill-[1]' : 'group-hover:scale-110 transition-transform'}`}>
                                    {item.icon}
                                </span>
                                <span className="text-sm">{item.label}</span>
                            </Link>
                        ))}

                        {/* Events Dropdown Section */}
                        <div 
                            className="group/events-dropdown"
                            onMouseEnter={() => setIsEventsOpen(true)}
                            onMouseLeave={() => setIsEventsOpen(false)}
                        >
                            <Link 
                                to="/events"
                                onClick={() => setIsEventsOpen(!isEventsOpen)}
                                className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-bold transition-all duration-300 group shadow-sm ${
                                    isActive('/events') || isEventsOpen
                                    ? 'text-violet-400 bg-white/5 border border-violet-500/30 translate-x-1' 
                                    : 'text-on-surface-variant hover:text-white border border-transparent hover:bg-white/5 hover:backdrop-blur-md'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">calendar_today</span>
                                    <span className="text-sm">Events</span>
                                </div>
                                <span className={`material-symbols-outlined text-sm transition-transform duration-500 ${isEventsOpen ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </Link>

                            {/* Dropdown Menu */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isEventsOpen ? 'max-h-[300px] opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
                                <div className="ml-6 space-y-1 border-l border-white/10 pl-2">
                                    {eventSubItems.map((subItem) => (
                                        <Link
                                            key={subItem.path}
                                            to={subItem.path}
                                            className={`flex items-center gap-3 py-2.5 px-4 rounded-xl text-[13px] font-bold transition-all group ${
                                                isActive(subItem.path)
                                                ? 'text-violet-300 bg-white/5'
                                                : 'text-on-surface-variant/70 hover:text-white hover:bg-white/5'
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                                                {subItem.icon}
                                            </span>
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {bottomNavItems.map((item) => (
                            <Link 
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 py-3 px-4 rounded-xl font-bold transition-all duration-300 group shadow-sm ${
                                    isActive(item.path) 
                                    ? 'text-violet-400 bg-white/5 border border-violet-500/30 translate-x-1' 
                                    : 'text-on-surface-variant hover:text-white border border-transparent hover:bg-white/5 hover:backdrop-blur-md'
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
                        <Link to="/launch" className="w-full bg-gradient-to-br from-primary/20 to-[#070d1f] backdrop-blur-xl border border-white/10 text-white font-black py-3 rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">add_circle</span>
                            <span>New Post</span>
                        </Link>
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
                            <button key={i} className="bg-primary w-12 h-12 rounded-full flex items-center justify-center -mt-8 text-[#070d1f]">
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
        </SmoothScroll>
    );
};

export default DashboardLayout;
