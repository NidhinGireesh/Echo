import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/mockData';

const LandingPage = () => {
    useEffect(() => {
        const glow = document.getElementById('landing-cursor-glow');
        if (!glow) return;
        
        const handleMouseMove = (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#070d1f] text-white selection:bg-primary/30">
            {/* Interactive Cursor Glow */}
            <div id="landing-cursor-glow" className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full pointer-events-none z-[0] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[100px]"></div>

            {/* Background Liquid Orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
                <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full top-[-10%] left-[-10%] blur-[120px] animate-pulse"></div>
                <div className="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full bottom-[-20%] right-[-10%] blur-[120px] animate-pulse" style={{animationDelay: '-5s'}}></div>
            </div>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
                <section className="mb-32">
                    <div className="glass-panel rounded-[4rem] p-12 md:p-24 relative overflow-hidden group border-primary/20">
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <span className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase mb-8 opacity-80">Kerala's Elite Student Network</span>
                            <h1 className="text-6xl md:text-8xl font-headline font-black text-white mb-10 leading-[0.9] tracking-tighter">
                                Architect Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Legacy</span>
                            </h1>
                            <p className="text-on-surface-variant text-xl max-w-2xl mb-14 leading-relaxed font-medium opacity-70">
                                The premium ecosystem for modern builders. Connect, trade artifacts, and monetize your innovation in a space designed for technical excellence.
                            </p>
                            <div className="flex flex-wrap gap-6 justify-center">
                                <Link to="/discover" className="px-12 py-5 bg-primary text-[#070d1f] rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
                                    Explore Discover
                                </Link>
                                <Link to="/marketplace" className="px-12 py-5 glass-panel border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/5 active:scale-95 transition-all">
                                    Enter Marketplace
                                </Link>
                            </div>
                        </div>
                        {/* Abstract Decor */}
                        <div className="absolute right-[-5%] bottom-[-10%] w-1/2 h-full opacity-10 pointer-events-none group-hover:scale-105 transition-transform duration-1000 grayscale">
                            <img src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2064&auto=format&fit=crop" alt="" className="w-full h-full object-cover rounded-[4rem]" />
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { icon: 'target', title: 'Event Hub', desc: 'Promote high-impact tech fests and workshops across institutions instantly.', color: 'text-primary', bg: 'bg-primary/10' },
                        { icon: 'token', title: 'Artifacts', desc: 'Securely trade project repositories and specialized digital assets.', color: 'text-secondary', bg: 'bg-secondary/10' },
                        { icon: 'hub', title: 'Neural Network', desc: 'Synchronize with specialized squad members for elite ventures.', color: 'text-tertiary', bg: 'bg-tertiary/10' }
                    ].map((feature, idx) => (
                        <div key={idx} className="glass-panel rounded-[2.5rem] p-10 hover:translate-y-[-8px] transition-all duration-500 group">
                            <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                                <span className={`material-symbols-outlined ${feature.color} text-3xl`}>{feature.icon}</span>
                            </div>
                            <h3 className="text-2xl font-black font-headline mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-on-surface-variant font-medium leading-relaxed opacity-60">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Live Ecosystem */}
                <section className="space-y-12">
                    <div className="flex justify-between items-end px-4">
                        <div>
                            <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-3 block opacity-80">Live Ecosystem</span>
                            <h2 className="text-4xl font-headline font-black text-white tracking-tighter">Trending Artifacts</h2>
                        </div>
                        <Link to="/discover" className="text-on-surface-variant hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors opacity-60 hover:opacity-100">Explorer Registry</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projects.slice(0, 4).map((project, idx) => (
                            <div key={idx} className="glass-panel rounded-[2rem] overflow-hidden group hover:border-primary/40 transition-all">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#070d1f]/60 backdrop-blur-md text-[8px] font-black text-primary border border-primary/20 tracking-widest uppercase">
                                        Verified
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-black text-lg mb-1 group-hover:text-primary transition-colors font-headline tracking-tight leading-tight">{project.title}</h4>
                                    <div className="flex justify-between items-center mt-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">🜚</div>
                                            <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-60">Proof of Node</span>
                                        </div>
                                        <span className="font-black text-white text-lg">{project.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
