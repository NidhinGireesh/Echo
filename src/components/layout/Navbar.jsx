import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, GraduationCap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';

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
        { name: 'Events', path: '/events' },
        { name: 'Marketplace', path: '/marketplace' },
        { name: 'Leaderboard', path: '/leaderboard' },
        { name: 'Pricing', path: '/pricing' },
    ];

    const navbarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '4.5rem',
        display: 'flex',
        alignItems: 'center',
        transition: 'var(--transition)',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
    };

    return (
        <nav style={navbarStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <Globe size={24} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                        Campus<span style={{ color: 'var(--primary)' }}>Sphere</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                style={{
                                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                                    fontWeight: '500',
                                    fontSize: '0.9rem',
                                    transition: 'var(--transition)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div style={{ width: '1px', height: '1.5rem', background: 'var(--border)' }}></div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--text-main)',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <Link to="/login">
                            <Button variant="ghost" size="sm">Log in</Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="primary" size="sm">Get Started</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-main)'
                    }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
