import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/mockData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id)) || projects[0];

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

    return (
        <div className="flex-1 p-6 md:p-12 relative overflow-hidden selection:bg-primary/20 max-w-7xl mx-auto z-10 w-full">
            {/* Interactive Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[80px]"></div>

            <Link to="/marketplace" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant hover:text-white transition-colors mb-12">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Terminal / Marketplace
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-12">
                    <header>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-5xl font-black font-headline text-white tracking-tighter mb-6 leading-none">{project.title}</h1>
                        <p className="text-xl text-on-surface-variant leading-relaxed font-medium opacity-80 max-w-2xl">
                            A high-fidelity technological artifact designed for <span className="text-white">{project.category}</span> implementations.
                            Engineered for rapid deployment and seamless node integration.
                        </p>
                    </header>

                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden glass-panel p-2 group">
                        <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="glass-panel p-10 rounded-[2.5rem]">
                        <h2 className="text-2xl font-black font-headline text-white mb-8 tracking-tight">Functional Specs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: 'code', label: 'Source Hierarchy' },
                                { icon: 'database', label: 'Node Integration' },
                                { icon: 'description', label: 'Technical Manual' },
                                { icon: 'brush', label: 'Visual Blueprints' },
                                { icon: 'rocket_launch', label: 'Deployment Script' },
                                { icon: 'support_agent', label: 'Architect Support' }
                            ].map((spec, i) => (
                                <div key={i} className="flex items-center gap-4 text-on-surface-variant group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-xl">{spec.icon}</span>
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-[#dfdfdf]">{spec.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Sidebar */}
                <aside className="space-y-6">
                    <div className="glass-panel p-10 rounded-[2.5rem] border-primary/30 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-9xl">payments</span>
                        </div>
                        <div className="relative z-10">
                            <div className="text-5xl font-black font-headline text-white mb-8 tracking-tighter">{project.price} <span className="text-primary text-xl">🜚</span></div>
                            <div className="space-y-3">
                                <button className="w-full bg-primary text-[#070d1f] py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Aquire License</button>
                                <button className="w-full glass-panel border border-white/10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white hover:bg-white/5 transition-all">Simulate Preview</button>
                            </div>
                            <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                7-Cycle Trust Protocol Active
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-[2.5rem] group">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-8">Lead Architect</h3>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform border border-white/10">
                                <span className="text-[#070d1f] font-black text-xl font-headline">{project.seller[0]}</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-white font-headline leading-none">{project.seller}</h4>
                                <p className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest mt-2 opacity-60">Level 42 Entity</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-8">
                            <div className="text-center">
                                <div className="text-sm font-black text-white">154</div>
                                <div className="text-[8px] font-black text-on-surface-variant uppercase tracking-tighter opacity-40">Artifacts</div>
                            </div>
                            <div className="text-center border-x border-white/5 whitespace-nowrap">
                                <div className="text-sm font-black text-white">{project.rating} ★</div>
                                <div className="text-[8px] font-black text-on-surface-variant uppercase tracking-tighter opacity-40">Trust</div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-black text-white">99%</div>
                                <div className="text-[8px] font-black text-on-surface-variant uppercase tracking-tighter opacity-40">Sync</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ProjectDetail;
