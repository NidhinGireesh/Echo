import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerStyle = {
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        padding: '4rem 0 2rem 0',
        marginTop: 'auto',
    };

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    };

    const linkStyle = {
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        transition: 'var(--transition)',
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand Info */}
                    <div style={{ ...columnStyle, gridColumn: 'span 2' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                width: '32px',
                                height: '32px',
                                borderRadius: 'var(--radius-sm)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                <Globe size={18} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                                CampusSphere
                            </span>
                        </Link>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '300px' }}>
                            Kerala's premier platform for student collaboration, event promotion, and project marketplace. Empowering the next generation of innovators.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={linkStyle}><Twitter size={20} /></a>
                            <a href="#" style={linkStyle}><Linkedin size={20} /></a>
                            <a href="#" style={linkStyle}><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div style={columnStyle}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Platform</h4>
                        <Link to="/events" style={linkStyle}>Events</Link>
                        <Link to="/marketplace" style={linkStyle}>Marketplace</Link>
                        <Link to="/leaderboard" style={linkStyle}>Leaderboard</Link>
                        <Link to="/mentors" style={linkStyle}>Mentorship</Link>
                    </div>

                    {/* Support Links */}
                    <div style={columnStyle}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Resources</h4>
                        <Link to="/how-it-works" style={linkStyle}>How it Works</Link>
                        <Link to="/pricing" style={linkStyle}>Pricing</Link>
                        <Link to="/faq" style={linkStyle}>FAQ</Link>
                        <Link to="/contact" style={linkStyle}>Contact Us</Link>
                    </div>

                    {/* Contact Info */}
                    <div style={columnStyle}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Contact</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <MapPin size={16} /> Thiruvananthapuram, Kerala
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <Mail size={16} /> hello@campussphere.in
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        &copy; {currentYear} CampusSphere Platform. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/privacy" style={{ ...linkStyle, fontSize: '0.8rem' }}>Privacy Policy</Link>
                        <Link to="/terms" style={{ ...linkStyle, fontSize: '0.8rem' }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
