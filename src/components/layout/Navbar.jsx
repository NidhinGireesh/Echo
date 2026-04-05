import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Cloud } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Dashboard', path: '/dashboard/student' },
        { name: 'Marketplace', path: '/marketplace' },
        { name: 'Discover', path: '/discover' },
        { name: 'Events', path: '/events' },
        { name: 'Messaging', path: '/messages' },
        { name: 'Leaderboard', path: '/leaderboard' },
        { name: 'Profile', path: '/profile' },
    ];

    const isDashboard = location.pathname.startsWith('/dashboard') || 
                       ['/discover', '/events', '/marketplace', '/leaderboard', '/profile', '/messages'].includes(location.pathname);

    // If we're on a dashboard route, the SideNavBar or DashboardLayout header handles navigation
    if (isDashboard) return null;function preventOverlap() {}

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] h-20 flex items-center transition-all duration-500 ${
            scrolled ? 'bg-[#070d1f]/70 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#85adff] to-[#c180ff] flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                        <Cloud size={22} className="text-[#070d1f] fill-current" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-headline font-black tracking-tighter text-white leading-none">
                            CampusSphere
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#85adff]/60">The Digital Astral</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-bold transition-all hover:text-primary ${
                                    location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="w-px h-6 bg-white/10"></div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={toggleTheme}
                            className="text-on-surface-variant hover:text-white transition-colors"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <Link to="/login" className="text-sm font-bold text-white hover:text-primary transition-colors">
                            Log in
                        </Link>
                        <Link to="/signup" className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-xl text-sm font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-20 bg-[#070d1f] z-[90] p-6 flex flex-col gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-headline font-black text-white border-b border-white/5 pb-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col gap-4">
                            <Link 
                                to="/login" 
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 text-center border border-white/10 rounded-2xl font-bold text-white"
                            >
                                Log in
                            </Link>
                            <Link 
                                to="/signup" 
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 text-center bg-primary rounded-2xl font-black text-on-primary"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
