import React, { useState, useMemo } from 'react';
import { projects, users } from '../../data/mockData';
import { Link } from 'react-router-dom';
import OptimizedCursorGlow from '../../components/ui/OptimizedCursorGlow';

const ProjectCard = React.memo(({ project }) => (
    <Link to={`/marketplace/${project.id}`} className="group relative flex flex-col glass-panel rounded-[2rem] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
        <div className="aspect-[4/3] overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" src={project.image}/>
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#070d1f]/60 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest border border-white/10">
                    {project.category}
                </span>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-4 gap-2">
                <h3 className="font-black text-lg text-white font-headline tracking-tighter group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                <span className="font-black text-primary whitespace-nowrap text-lg leading-none">{project.price}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[8px] font-black uppercase tracking-widest bg-white/5 border border-white/10 rounded-md px-2 py-1 text-on-surface-variant opacity-60">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-60">{project.seller}</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">shopping_cart</span>
                </button>
            </div>
        </div>
    </Link>
));

const Marketplace = () => {
    const [activeTab, setActiveTab] = useState('All Assets');

    // Filter projects based on the active tab
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            if (activeTab === 'All Assets') return true;
            if (activeTab === 'Design' && project.category === 'UI Kit') return true;
            if (activeTab === 'Code' && project.category === 'API Wrapper') return true;
            if (activeTab === 'Data' && project.category === 'ML Dataset') return true;
            if (activeTab === 'Models' && project.category === 'Machine Learning') return true;
            return false;
        });
    }, [activeTab]);

    return (
        <div className="pt-6 pb-20 px-6 relative z-10 w-full max-w-7xl mx-auto selection:bg-primary/20">
            <OptimizedCursorGlow />

            {/* Hero Section */}
            <header className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 p-10 glass-panel rounded-[2rem] flex flex-col justify-end relative overflow-hidden h-[400px] group border-primary/20">
                        <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-1000">
                            <img className="w-full h-full object-cover mix-blend-screen" src="https://images.unsplash.com/photo-1596422846543-b5c65171e03a?q=80&w=2070&auto=format&fit=crop" alt="Hero Background"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-transparent to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                            <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Student Ventures</span>
                            <h1 className="text-5xl font-black font-headline text-white tracking-tighter mb-4 leading-none">Kerala <br/>Tech <span className="text-primary">Market</span></h1>
                            <p className="text-on-surface-variant max-w-xl text-lg mb-8 leading-relaxed opacity-80">Discover a curated universe of high-fidelity digital assets built by the brightest minds in Kerala's engineering colleges.</p>
                            <div className="flex gap-4">
                                <Link to="/marketplace" className="px-8 py-3 glass-violet hover:scale-105 transition-all shadow-lg shadow-violet-500/20 text-xs uppercase tracking-widest text-center flex items-center justify-center min-w-[160px]">
                                    Connect All
                                </Link>
                                <button className="px-8 py-3 glass-panel border border-white/10 rounded-xl font-black hover:bg-white/5 transition-all text-xs uppercase tracking-widest">Submit Node</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="glass-panel rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group">
                        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6 border border-secondary/20 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-secondary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                        </div>
                        <h2 className="text-2xl font-black font-headline mb-1 text-white tracking-tighter">Top Innovator</h2>
                        <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-6 opacity-60">CET_Labs_Official</p>
                        <div className="flex -space-x-3 mb-8">
                            {users.map(u => (
                                <img key={u.id} className="w-10 h-10 rounded-full border-2 border-[#070d1f]" src={u.avatar} alt="User Avatar" />
                            ))}
                            <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-[#070d1f] flex items-center justify-center text-[10px] font-black text-white">+8</div>
                        </div>
                        <button className="w-full py-3 rounded-xl border border-white/5 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Synchronize</button>
                    </div>
                </div>
            </header>

            {/* Category Filter Bar */}
            <section className="mb-10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3 scroll-x-auto no-scrollbar pb-2 px-4 -mx-4 md:px-0 md:mx-0">
                    {['All Assets', 'Design', 'Code', 'Data', 'Models'].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${
                                activeTab === tab 
                                ? 'glass-violet glass-violet-active' 
                                : 'glass-panel border border-white/5 text-on-surface-variant hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-5 py-2.5 glass-violet bg-violet-500/10 border-violet-500/20 text-[10px] hover:bg-primary/20 transition-all">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        Sort
                    </button>
                </div>
            </section>

            {/* Asset Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>

            {/* Pagination */}
            <div className="mt-20 flex justify-center pb-20">
                <button className="px-12 py-4 glass-violet !rounded-full text-[10px] tracking-[0.2em] hover:bg-primary/20 transition-all flex items-center gap-4">
                    Load More Nodes
                    <span className="material-symbols-outlined animate-bounce">arrow_downward</span>
                </button>
            </div>
        </div>
    );
};

export default Marketplace;
