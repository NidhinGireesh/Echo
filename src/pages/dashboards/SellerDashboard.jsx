import React, { useEffect } from 'react';

const SellerDashboard = () => {
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
        <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full relative selection:bg-tertiary/20">
            {/* Interactive Cursor Glow */}
            <div id="cursor-glow" className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen blur-[80px]"></div>

            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black font-headline tracking-tight text-white mb-2">Seller Forge</h1>
                    <p className="text-on-surface-variant font-medium opacity-60">Architect your assets and monetize your innovation.</p>
                </div>
                <button className="bg-primary text-[#070d1f] px-8 py-4 rounded-2xl flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                    <span className="material-symbols-outlined font-black">rocket_launch</span>
                    Forge New Project
                </button>
            </header>

            {/* Revenue Snapshot */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                <div className="lg:col-span-2 glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-9xl">payments</span>
                    </div>
                    <div className="relative z-10">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-6">Aggregate Revenue</p>
                        <h2 className="text-6xl font-black font-headline text-white mb-8 tracking-tighter">₹24,500 <span className="text-primary text-2xl font-black ml-2">🜚</span></h2>
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Cycle Yield</p>
                                <div className="text-xl font-black text-secondary">+₹8,200</div>
                            </div>
                            <div className="w-px h-10 bg-white/5"></div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Total Orders</p>
                                <div className="text-xl font-black text-white">12</div>
                            </div>
                            <div className="w-px h-10 bg-white/5"></div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Trust Score</p>
                                <div className="text-xl font-black text-tertiary">4.8 ★</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 flex flex-col justify-between">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-8">Forge Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Yield Report</span>
                            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">download</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Deep Analytics</span>
                            <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">bar_chart</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Bulk Transmit</span>
                            <span className="material-symbols-outlined text-tertiary group-hover:translate-x-1 transition-transform">inventory_2</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Project Forge Listings */}
            <section className="pb-20">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black font-headline text-white tracking-tight">Active Artifacts</h2>
                    <span className="bg-primary/20 text-primary text-[10px] px-3 py-1 rounded-full border border-primary/30 font-black tracking-widest uppercase mb-2">5 DEPLOYED</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: 'K-Rail Tracker MVP', price: '₹4,999', sales: '8', views: '450', status: 'Live', color: 'text-primary' },
                        { title: 'Kerala Tourism UI Kit', price: '₹3,499', sales: '4', views: '280', status: 'Live', color: 'text-primary' },
                        { title: 'KTU Result Scraper', price: '₹5,999', sales: '0', views: '120', status: 'Review', color: 'text-secondary' }
                    ].map((project, i) => (
                        <div key={i} className="glass-panel p-6 hover:translate-y-[-4px] transition-transform group">
                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-[8px] font-black px-2 py-1 bg-white/5 border border-white/10 rounded-md uppercase tracking-widest ${project.color}`}>{project.status}</span>
                                <div className="text-xl font-black text-white">{project.price}</div>
                            </div>
                            <h3 className="text-lg font-black text-white mb-6 font-headline tracking-tighter group-hover:text-primary transition-colors">{project.title}</h3>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <p className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Acquisitions</p>
                                    <p className="text-lg font-black text-white">{project.sales}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <p className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Visuals</p>
                                    <p className="text-lg font-black text-white">{project.views}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 py-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Arch</button>
                                <button className="flex-1 py-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:border-primary/40 transition-all">Stats</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SellerDashboard;
