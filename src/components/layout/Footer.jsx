import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#070d1f] border-t border-white/5 pt-20 pb-10 overflow-hidden">
            {/* Background Blob */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mb-64 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="md:col-span-4 space-y-6">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[#070d1f]">
                                <Cloud size={18} className="fill-current" />
                            </div>
                            <span className="text-xl font-headline font-black text-white">
                                CampusSphere
                            </span>
                        </Link>
                        <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
                            Kerala's premier ecosystem for student collaboration, event promotion, and digital asset commerce. Empowering the next generation of builders.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all border border-white/5">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Platform</h4>
                        <ul className="space-y-4">
                            <li><Link to="/discover" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Discover</Link></li>
                            <li><Link to="/events" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Events</Link></li>
                            <li><Link to="/marketplace" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Marketplace</Link></li>
                            <li><Link to="/leaderboard" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Leaderboard</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link to="/pricing" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link to="/faq" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Support Hub</Link></li>
                            <li><Link to="/terms" className="text-on-surface-variant text-sm hover:text-primary transition-colors">Terms</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Headquarters</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                                <MapPin size={16} className="text-primary" />
                                <span>Thiruvananthapuram, Kerala, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-on-surface-variant text-sm underline group cursor-pointer decoration-white/10 hover:decoration-primary/40">
                                <Mail size={16} className="text-primary" />
                                <span>hello@campussphere.in</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-on-surface-variant text-xs font-medium">
                        &copy; {currentYear} CampusSphere Digital. Built for the Astral.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="text-on-surface-variant text-xs hover:text-white transition-colors">Privacy Strategy</Link>
                        <Link to="/security" className="text-on-surface-variant text-xs hover:text-white transition-colors">Security Audit</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
