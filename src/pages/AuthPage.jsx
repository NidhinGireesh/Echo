import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const glow = document.getElementById('cursor-glow');
        if (!glow) return;
        
        const handleMouseMove = (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleLogin = () => {
        navigate('/dashboard/student');
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] relative p-6 selection:bg-primary/20">
            {/* Interactive Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full pointer-events-none z-[0] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[100px]"></div>

            <main className="w-full max-w-5xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Brand Side */}
                <div className="space-y-10 hidden lg:block">
                    <div className="space-y-6">
                        <span className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase opacity-80">The Digital Astral Protocol</span>
                        <h1 className="text-7xl font-black font-headline tracking-tighter leading-[0.9] text-white">
                            Campus<span className="text-primary">Sphere</span>
                        </h1>
                        <p className="text-on-surface-variant text-xl leading-relaxed max-w-lg font-medium opacity-60">
                            The premium ecosystem for modern builders. Connect, collaborate, and synchronize your node in a space designed for technical excellence.
                        </p>
                    </div>
                    <div className="flex items-center gap-6 p-6 glass-panel rounded-3xl inline-flex">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <img key={i} className="w-10 h-10 rounded-full border-2 border-[#070d1f]" src={`https://i.pravatar.cc/100?u=user${i}`} alt="User" />
                            ))}
                        </div>
                        <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">+4.2k Entities Synced</p>
                    </div>
                </div>

                {/* Auth Section */}
                <section className="space-y-6">
                    <div className="lg:hidden text-center mb-12">
                        <h1 className="text-5xl font-black font-headline tracking-tighter text-white">Campus<span className="text-primary">Sphere</span></h1>
                    </div>
                    
                    {/* Main Auth Card */}
                    <div className="glass-panel p-8 md:p-12 space-y-10 rounded-[2.5rem] border-primary/20">
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl font-black font-headline text-white tracking-tight">Access Portal</h2>
                            <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest opacity-60">Secure authentication required for orbit</p>
                        </div>

                        {/* Google Login */}
                        <button 
                            onClick={handleLogin}
                            className="w-full py-5 px-8 flex items-center justify-center gap-4 bg-white text-[#070d1f] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5"
                        >
                            <img className="w-6 h-6 grayscale" src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" />
                            <span>Continue with Google</span>
                        </button>

                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-white/5"></div>
                            <span className="flex-shrink mx-6 text-[8px] font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-40">Initialize Payload</span>
                            <div className="flex-grow border-t border-white/5"></div>
                        </div>

                        {/* Profile Setup */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary opacity-80 px-1">Institutional Node</label>
                                    <div className="relative group">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl group-focus-within:text-primary transition-colors">domain</span>
                                        <input className="w-full bg-[#070d1f]/40 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-sm font-bold focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/10" placeholder="e.g. MEC National" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-secondary opacity-80 px-1">Core Specialization</label>
                                    <div className="relative group">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl group-focus-within:text-primary transition-colors">token</span>
                                        <select className="w-full bg-[#070d1f]/40 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-sm font-bold appearance-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer">
                                            <option disabled selected>Choose synchronization path</option>
                                            <option>Fullstack Architect</option>
                                            <option>Visual Designer</option>
                                            <option>Neural Engineer</option>
                                            <option>Blockchain Lead</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={handleLogin}
                                className="w-full bg-gradient-to-r from-primary to-primary-dim text-[#070d1f] py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                            >
                                Connect Node
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AuthPage;
