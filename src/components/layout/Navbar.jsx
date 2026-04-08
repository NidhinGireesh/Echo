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
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] h-20 flex items-center transition-all duration-500 ${
                scrolled ? 'bg-[#070d1f]/80 backdrop-blur-3xl border-b border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.5)]' : 'bg-[#070d1f]/40 backdrop-blur-xl border-b border-white/5 shadow-2xl'
            }`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                            <Cloud size={22} className="text-[#070d1f] fill-current" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-headline font-black tracking-tighter text-white leading-none">
                                CampusSphere
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/60">The Digital Astral</span>
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
                            <Link to="/signup" className="px-6 py-2.5 bg-gradient-to-br from-secondary/40 to-[#070d1f]/40 backdrop-blur-xl border border-white/10 text-white rounded-xl text-sm font-black hover:scale-105 active:scale-95 transition-all shadow-[0_8px_32px_rgba(193,128,255,0.15)]">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-white relative z-[101]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[#070d1f]/80 backdrop-blur-md z-[110] md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        <motion.div
                            initial={{ y: '-100%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '-100%', opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 left-0 right-0 bg-[#070d1f] z-[120] px-6 pt-24 pb-10 md:hidden shadow-2xl border-b border-white/10"
                        >
                            <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <MobileNavLink 
                                            key={link.path}
                                            link={link}
                                            hasSubmenu={link.name === 'Events'}
                                            isActive={location.pathname === link.path}
                                            onClose={() => setIsOpen(false)}
                                        />
                                    ))}
                                </nav>

                                <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                                    <Link 
                                        to="/login" 
                                        onClick={() => setIsOpen(false)}
                                        className="w-full py-4 text-center border border-white/10 rounded-2xl font-bold text-white block hover:bg-white/5 transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link 
                                        to="/signup" 
                                        onClick={() => setIsOpen(false)}
                                        className="w-full py-4 text-center bg-gradient-to-br from-primary to-secondary border border-white/10 rounded-2xl font-black text-[#070d1f] block shadow-[0_8px_32px_rgba(var(--color-primary),0.3)]"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

// Helper component for Mobile Nav Links with Accordion support
const MobileNavLink = ({ link, hasSubmenu, isActive, onClose }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Sub-items for Events
    const eventSubItems = [
        { label: 'Gaming', path: '/gaming' },
        { label: 'STEM', path: '/stem' },
        { label: 'Creative', path: '/creative' },
        { label: 'Lifestyle', path: '/lifestyle' },
    ];

    if (hasSubmenu) {
        return (
            <div className="flex flex-col">
                <div className={`flex items-center w-full justify-between rounded-xl transition-all ${isExpanded ? 'bg-white/5' : ''}`}>
                    <Link
                        to={link.path}
                        onClick={onClose}
                        className={`flex-1 py-4 px-4 text-xl font-headline font-black transition-all ${
                            isActive ? 'text-primary' : 'text-white'
                        }`}
                    >
                        {link.name}
                    </Link>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setIsExpanded(!isExpanded);
                        }}
                        className="p-4 text-on-surface-variant hover:text-white transition-colors"
                        aria-label="Toggle Submenu"
                    >
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="material-symbols-outlined select-none text-2xl">expand_more</span>
                        </motion.div>
                    </button>
                </div>
                
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pb-4 flex flex-col gap-1">
                                {eventSubItems.map((sub) => (
                                    <Link
                                        key={sub.path}
                                        to={sub.path}
                                        onClick={onClose}
                                        className="py-3 px-10 text-sm font-bold text-on-surface-variant hover:text-white transition-colors border-l-2 border-white/5 ml-6 hover:border-primary/50"
                                    >
                                        {sub.label}
                                    </Link>
                                ))}
                                <Link
                                    to={link.path}
                                    onClick={onClose}
                                    className="py-3 px-10 text-sm font-black text-primary hover:text-white transition-colors border-l-2 border-white/5 ml-6 italic"
                                >
                                    View All Events
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="h-px bg-white/5 mx-4" />
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <Link
                to={link.path}
                onClick={onClose}
                className={`w-full py-4 px-4 text-xl font-headline font-black transition-all flex items-center justify-between rounded-xl ${
                    isActive ? 'text-primary bg-white/5' : 'text-white hover:bg-white/5'
                }`}
            >
                {link.name}
                {isActive && <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--color-primary),0.8)]" />}
            </Link>
            <div className="h-px bg-white/5 mx-4" />
        </div>
    );
};

export default Navbar;
