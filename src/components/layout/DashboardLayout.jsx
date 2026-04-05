import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
    const location = useLocation();
    
    // Helper function to check if link is active
    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-primary/30 selection:text-primary min-h-screen">
            {/* Background Orbs (Shared) */}
            <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-tertiary/5 blur-[120px] rounded-full"></div>
            </div>

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/20 backdrop-blur-lg border-b border-white/10 shadow-xl shadow-black/20 flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-2xl font-bold bg-gradient-to-br from-blue-300 to-blue-500 bg-clip-text text-transparent font-headline tracking-tight">
                        CampusSphere
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/discover" className={`font-headline tracking-tight transition-all duration-300 ${isActive('/discover') ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1' : 'text-slate-400 hover:text-slate-200'}`}>Discover</Link>
                        <Link to="/events" className={`font-headline tracking-tight transition-all duration-300 ${isActive('/events') ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1' : 'text-slate-400 hover:text-slate-200'}`}>Events</Link>
                        <Link to="/messages" className={`font-headline tracking-tight transition-all duration-300 ${isActive('/messages') ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1' : 'text-slate-400 hover:text-slate-200'}`}>Messages</Link>
                        <Link to="/leaderboard" className={`font-headline tracking-tight transition-all duration-300 ${isActive('/leaderboard') ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1' : 'text-slate-400 hover:text-slate-200'}`}>Leaderboard</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block group">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input className="bg-surface-container-lowest/40 border border-outline-variant/20 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 w-64 transition-all" placeholder="Search the astral..." type="text" />
                    </div>
                    <button className="hidden lg:block bg-gradient-to-br from-primary to-primary-container px-5 py-2 text-on-primary-container font-headline font-bold text-sm rounded-xl hover:scale-105 active:scale-95 transition-transform mr-4">
                        Upload Asset
                    </button>
                    <button className="text-slate-400 hover:bg-white/5 p-2 rounded-full transition-all scale-95 active:scale-90">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </button>
                    <button className="text-slate-400 hover:bg-white/5 p-2 rounded-full transition-all scale-95 active:scale-90">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                    </button>
                    <Link to="/profile">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMiRPZrHmZ6mEFjfXe2UHExXxox7zFx6upAKeophITCKH_TMMM-zwyQKAUKmd0e0NWMNjpzged1Je_-gegGssgYf1O94btuFLqBP5AvwbwfFUSlOrVKU7cbJDeziLo-w-6TuzHvZgSHBl95DkLH5WE__hxXF5HFjPWKDtOId30a_6pCsOk2zVzUqHaKzEMS82w30RJ7IsAytDLZSl3gT7pgyjNYsxEdwYHSIQy_e5RzZ1QiyWdSoEUvu-zCXuwrVN1fG3spo8Lemeg" alt="User" className="w-8 h-8 rounded-full border border-white/10 hover:border-primary transition-all object-cover" />
                    </Link>
                </div>
            </nav>

            {/* SideNavBar */}
            <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-slate-950/40 backdrop-blur-xl border-r border-white/5 shadow-2xl shadow-black/50 hidden lg:flex flex-col py-8 gap-4 pt-24" style={{boxShadow: 'inset 0 1px 0 0 rgba(223, 228, 254, 0.1)'}}>
                <div className="px-6 mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center overflow-hidden">
                        <svg className="w-6 h-6 text-on-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M13.13 22.19L11.5 18.36 7.67 16.73c-1.39-.59-1.39-2.55 0-3.14l11.18-4.79c1.24-.53 2.53.76 2 2l-4.79 11.18c-.6 1.4-2.55 1.4-3.14 0l.21.21zM5 13l2-1-2-1-1-2-1 2-2 1 2 1 1 2 1-2zm13-8l-1 2-2 1 2 1 1 2 1-2 2-1-2-1-1-2zm-7.5-3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"/></svg>
                    </div>
                    <div>
                        <p className="font-black text-blue-400 text-sm uppercase tracking-wider font-headline">CampusSphere</p>
                        <p className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">The Digital Astral</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <Link to="/dashboard/student" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-transform duration-200 group font-headline font-semibold text-sm ${isActive('/dashboard/student') ? 'bg-primary/10 text-primary border-r-4 border-primary' : 'text-slate-500 hover:bg-white/5 hover:translate-x-1'}`}>
                        <svg className={`w-5 h-5 ${isActive('/dashboard/student') ? 'text-primary' : 'group-hover:text-primary transition-colors'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span>Dashboard</span>
                    </Link>
                    
                    <Link to="/marketplace" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-transform duration-200 group font-headline font-semibold text-sm ${isActive('/marketplace') ? 'bg-blue-500/10 text-blue-300 border-r-4 border-blue-500' : 'text-slate-500 hover:bg-white/5 hover:translate-x-1'}`}>
                        <svg className={`w-5 h-5 ${isActive('/marketplace') ? 'text-blue-300' : 'group-hover:text-primary transition-colors'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        <span>Marketplace</span>
                    </Link>
                    
                    <Link to="/discover" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-transform duration-200 group font-headline font-semibold text-sm ${isActive('/discover') ? 'bg-blue-500/10 text-blue-300 border-r-4 border-blue-500' : 'text-slate-500 hover:bg-white/5 hover:translate-x-1'}`}>
                        <svg className={`w-5 h-5 ${isActive('/discover') ? 'text-blue-300' : 'group-hover:text-primary transition-colors'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                        <span>Matchmaking</span>
                    </Link>
                    
                    <Link to="/events" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-transform duration-200 group font-headline font-semibold text-sm ${isActive('/events') ? 'bg-blue-500/10 text-blue-300 border-r-4 border-blue-500' : 'text-slate-500 hover:bg-white/5 hover:translate-x-1'}`}>
                        <svg className={`w-5 h-5 ${isActive('/events') ? 'text-blue-300' : 'group-hover:text-primary transition-colors'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span>Tech Clubs / Events</span>
                    </Link>

                    <Link to="/messages" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-transform duration-200 group font-headline font-semibold text-sm ${isActive('/messages') ? 'bg-blue-500/10 text-blue-300 border-r-4 border-blue-500' : 'text-slate-500 hover:bg-white/5 hover:translate-x-1'}`}>
                        <svg className={`w-5 h-5 ${isActive('/messages') ? 'text-blue-300' : 'group-hover:text-primary transition-colors'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        <span>Inbox</span>
                    </Link>
                    
                    <Link to="/leaderboard" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-transform duration-200 group font-headline font-semibold text-sm ${isActive('/leaderboard') ? 'bg-blue-500/10 text-blue-300 border-r-4 border-blue-500' : 'text-slate-500 hover:bg-white/5 hover:translate-x-1'}`}>
                        <svg className={`w-5 h-5 ${isActive('/leaderboard') ? 'text-blue-300' : 'group-hover:text-primary transition-colors'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        <span>Competition</span>
                    </Link>
                    
                    <Link to="/profile" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-transform duration-200 group font-headline font-semibold text-sm ${isActive('/profile') ? 'bg-blue-500/10 text-blue-300 border-r-4 border-blue-500' : 'text-slate-500 hover:bg-white/5 hover:translate-x-1'}`}>
                        <svg className={`w-5 h-5 ${isActive('/profile') ? 'text-blue-300' : 'group-hover:text-primary transition-colors'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        <span>Proof of Work</span>
                    </Link>

                </nav>

                <div className="px-4 mt-auto border-t border-white/5 pt-6 space-y-2">
                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-surface-variant/20 hover:bg-surface-variant/40 border border-outline-variant/30 text-on-surface rounded-xl font-bold transition-all duration-300 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        New Project
                    </button>
                    <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="text-sm">Settings</span>
                    </Link>
                </div>
            </aside>

            {/* Mobile Navigation */}
            <nav className="fixed bottom-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-t border-white/5 md:hidden z-50 flex justify-around items-center py-4 px-6">
                <Link to="/discover" className={`flex flex-col items-center gap-1 ${isActive('/discover') ? 'text-blue-400' : 'text-slate-500'}`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                    <span className="text-[10px] uppercase font-bold">Discover</span>
                </Link>
                <Link to="/events" className={`flex flex-col items-center gap-1 ${isActive('/events') ? 'text-blue-400' : 'text-slate-500'}`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <span className="text-[10px] uppercase font-bold">Clubs</span>
                </Link>
                <Link to="/messages" className={`flex flex-col items-center gap-1 ${isActive('/messages') ? 'text-blue-400' : 'text-slate-500'}`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    <span className="text-[10px] uppercase font-bold">Inbox</span>
                </Link>
                <Link to="/profile" className={`flex flex-col items-center gap-1 ${isActive('/profile') ? 'text-blue-400' : 'text-slate-500'}`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <span className="text-[10px] uppercase font-bold">Profile</span>
                </Link>
            </nav>

            <main className="pt-24 lg:ml-64 relative z-10 w-full min-h-screen">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
