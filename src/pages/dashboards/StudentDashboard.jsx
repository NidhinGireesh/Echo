import { users } from '../../data/mockData';

const user = users[0];

const StudentDashboard = () => {
    // Add custom cursor effect inside this component since it's dashboard specific, or global.
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

    const nameParts = user.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    return (
        <>
            <style>{`
                .glass-panel {
                    background: rgba(28, 37, 62, 0.2);
                    backdrop-filter: blur(24px);
                    border: 1px solid rgba(223, 228, 254, 0.1);
                }
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 1.5rem;
                }
                #cursor-glow {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(133, 173, 255, 0.15) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    transform: translate(-50%, -50%);
                    transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
                    mix-blend-mode: screen;
                }
                .hover-glow:hover ~ #cursor-glow {
                    opacity: 0.4;
                    width: 600px;
                    height: 600px;
                }
            `}</style>

            {/* Interactive Cursor Glow */}
            <div id="cursor-glow"></div>

            <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
                <div className="bento-grid">
                    {/* Welcome Tile (Wide) */}
                    <section className="col-span-12 lg:col-span-8 glass-panel rounded-3xl p-8 relative overflow-hidden group">
                        <div className="relative z-10 h-full flex flex-col justify-center">
                            <span className="text-secondary font-headline font-bold tracking-widest text-xs uppercase mb-2">Academic Overview</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-4 leading-tight">
                                Welcome back,<br />
                                <span className="text-primary-fixed">{user.name}</span>
                            </h2>
                            <p className="text-on-surface-variant max-w-md mb-8 text-lg">
                                You have 3 collaboration requests and your latest Project "Nebula" is trending in the marketplace.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-surface-container-high/30 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-medium">Global Rank</p>
                                        <p className="font-headline font-bold">#{user.rank}</p>
                                    </div>
                                </div>
                                <div className="bg-surface-container-high/30 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-medium">Credits</p>
                                        <p className="font-headline font-bold">{user.credits?.toLocaleString() || '1,250'} 🜚</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <img alt="Background pattern" className="w-full h-full object-cover rounded-3xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjDoy5HfdU99cVMMM9SbMMxv1Sy0vO97y4dXWLn363pbEFx_Fq1du_WDy01llntPXq_avnreQI-FMfz02aNmvlPKA06SF_IJqfJpdfPIHhE5mPTCGyqtNScMnPBURy-CazfjvId6PWYRh3oenHPZsztg8Ik5x_5fq_OW3eEgjW07HOGZlFZ5dLcE6kaiHU8VRXgeXORw8lQT2TiZyJtB3I2qecNTdLcSn1lvADbCapVUQ9R_mGGIx7R_xHjU--Y4j32ROrKBEUlB30" />
                        </div>
                    </section>

                    {/* Featured Asset (Tall) */}
                    <section className="col-span-12 lg:col-span-4 glass-panel rounded-3xl p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-headline font-bold text-lg">Featured Asset</h3>
                            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_horiz</span>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 group">
                            <img alt="Cyber City Blueprint" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKtg-adexYrt4LiKXy-2zRFMJFE4eJD2aYCVQ5THdfOnYoJ13egLF5SgJ7aA_A5_LSzbbwFO8nFqSa9DzDchDitEdRAYjGeDGyM2oj83-Jcg-ZmRzLgeTOzWmO0CunisroYrz6kq6ggJSsA3PPc5F4JdMUfWLtOt4eIXyVc0bCFgdrqesGX6Qt0ut2Ed67SSshDSIvdo5F7CDzlQh9RSuRoOV6PM2UBUcVzmcKJp93-QPXENQoq9zbQrOgKYsX1AKz_iHVQXUEAIfQ" />
                            <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">
                                HOT DEAL
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-headline font-extrabold text-xl mb-1">CyberCity V.2 UI Kit</h4>
                            <p className="text-sm text-on-surface-variant mb-6">Full modular design system for meta-verse dashboards.</p>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center -space-x-3">
                                    <img alt="Contributor" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn8NCOf9d0OR716P_YDUwvX7x8B65YUPUS7II8K2HTVME6a8pu41f6bfDd30OcdZsaLZHbaNjuYw3NEsrYDruRoNarYsoz7Bi5Fb52u7_iCArdmVWWChlZJe3NM_kw0vnaoPzeNyRdb0i81_xsS4N5m3COXcgxPb7727vqtVl14d-IFhhlGv_kZCdcTYu_usLAaqkBkXLD3rEKvxxYlUoRT2hvdL8g_gvu-7K7F-8_V7LCKjqj9ZEI_erpgsSxOIbCJlDwOQn_wiRI" />
                                    <img alt="Contributor" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ86Rv7TPZ-bCzz61qLfIuJTmZDDDlyYBOaYM7oGcPZUt27CYN8hPc0s0wQ0gwXCROa8Sij99vIfSz5zajdzjE5SZteG0YAhKNcnoHxad_db9opuRqzrcjKBxbmSvVloZUU-fxgz-mU-x3vKk8PjUY6hJC8BWoVndvjIsh9YgkBPiIiW5Gm_V49RDbIvY4U4ekG_pJFra5LF5D9w3VkL-iPXGgWGntul11eBlOt1_QLVAF13nahZXk33jg0wxjAOrQ10vruleSgVH3" />
                                    <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-[10px] font-bold">+12</div>
                                </div>
                                <span className="font-headline font-black text-xl text-primary">450 🜚</span>
                            </div>
                            <button className="w-full py-3 bg-surface-container-highest/50 backdrop-blur-sm border border-outline-variant/30 rounded-xl font-bold hover:bg-surface-container-high transition-colors">
                                Purchase License
                            </button>
                        </div>
                    </section>

                    {/* Quick Actions (Medium) */}
                    <section className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel rounded-3xl p-6">
                        <h3 className="font-headline font-bold text-lg mb-6">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-container-high/20 border border-outline-variant/10 hover:border-primary/40 transition-all group backdrop-blur-md">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary">upload_file</span>
                                </div>
                                <span className="text-sm font-medium">Mint Asset</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-container-high/20 border border-outline-variant/10 hover:border-secondary/40 transition-all group backdrop-blur-md">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-secondary">groups</span>
                                </div>
                                <span className="text-sm font-medium">Join Squad</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-container-high/20 border border-outline-variant/10 hover:border-tertiary/40 transition-all group backdrop-blur-md">
                                <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-tertiary">rocket_launch</span>
                                </div>
                                <span className="text-sm font-medium">Launch Lab</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-container-high/20 border border-outline-variant/10 hover:border-primary-fixed/40 transition-all group backdrop-blur-md">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary-fixed">payments</span>
                                </div>
                                <span className="text-sm font-medium">Withdraw</span>
                            </button>
                        </div>
                    </section>

                    {/* Skill Tree (Small) */}
                    <section className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel rounded-3xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-headline font-bold text-lg">Skill Tree</h3>
                            <span className="text-xs text-primary font-bold">LVL {user.level || 24}</span>
                        </div>
                        <div className="space-y-6">
                            {(user.skills || [
                                { name: 'Full-Stack Development', level: '88%', fill: 88, color: 'bg-primary', shadow: 'shadow-[0_0_8px_rgba(133,173,255,0.5)]', text: 'text-primary' },
                                { name: 'UI/UX Design', level: '64%', fill: 64, color: 'bg-secondary', shadow: 'shadow-[0_0_8px_rgba(193,128,255,0.5)]', text: 'text-secondary' },
                                { name: 'Project Management', level: '42%', fill: 42, color: 'bg-tertiary', shadow: 'shadow-[0_0_8px_rgba(255,109,175,0.5)]', text: 'text-tertiary' }
                            ]).map((skill, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-on-surface-variant">{skill.name}</span>
                                        <span className={skill.text}>{skill.level}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-surface-container-high/40 rounded-full overflow-hidden">
                                        <div className={`h-full ${skill.color} rounded-full ${skill.shadow || ''}`} style={{ width: `${skill.fill}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-surface-container-high/40 to-surface-container-lowest/40 backdrop-blur-md flex items-center justify-between border border-white/5">
                            <div>
                                <p className="text-[10px] uppercase font-black text-on-surface-variant tracking-wider">Staking Earnings</p>
                                <p className="text-xl font-headline font-black text-on-surface">+12.4%</p>
                            </div>
                            <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
                        </div>
                    </section>

                    {/* Recent Activity (Asymmetric Wide) */}
                    <section className="col-span-12 glass-panel rounded-3xl p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <h3 className="font-headline font-extrabold text-2xl">Streaming Activity</h3>
                            <div className="flex gap-2">
                                <span className="bg-secondary-container/20 text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer">All Channels</span>
                                <span className="bg-surface-container-highest/40 px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant cursor-pointer hover:bg-surface-container-highest/60 transition-colors">My Squads</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-high/30 transition-colors backdrop-blur-sm group cursor-pointer">
                                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors min-w-[3rem]">
                                    <img alt="Activity" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1O_QFT3KmE2mmSz47jmYKKjJVhqyynpCJYLEW1YWiHvFZBW4vEyPstNCX6h8CNNN5M-Z5cA_lQyWtOTU28aVo6BRxRZMxg4qKd8Vj74Txs7yLQZCoptXMe_IgNMXcTpj2W9KomRTY9CCHn4YqY4WxEi8NCTEbV2f2OwyDLRakrg6Xbu4J_w61C5pJ-qDh9lnKf6MKEaj73sn7mooybFyd69vvey0_LXTUP-wV3B3fByNiC6DHxhwCuX5aaXQC4HTAOvVfGRLQ9c2g" />
                                </div>
                                <div className="flex-1">
                                    <h5 className="font-bold text-sm">System Update Shared</h5>
                                    <p className="text-xs text-on-surface-variant">Kernel 4.0 was deployed to the main network.</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-medium text-on-surface">2m ago</p>
                                    <span className="text-[10px] text-primary">#tech</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-high/30 transition-colors backdrop-blur-sm group cursor-pointer">
                                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-secondary/30 transition-colors min-w-[3rem]">
                                    <img alt="Activity" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNWJbRhDdm-C7rjtJhZe0VJHa_l8a35HuJDxlkMC6rPArIT2OoOSGrfSfUJ8lRLsL0TB-XM25p62gAO72v6tO72SyntICsOsag96G3toRB-M721Oe_4IJn9leZx29t5zA_E6u8CdGuy5owMp5DGv6TOxB32XBZSSkOoA7DXwjACNvMPBD8nUA29Jz45ZOkwMYRt7TJ9cZziQNTaozU9cbWyqPGQwQMdEtOSkcsGKMMZNQOxzHkk1N0q-ymik_4MBFkYUGjfNy-5cqR" />
                                </div>
                                <div className="flex-1">
                                    <h5 className="font-bold text-sm">Collaboration Request</h5>
                                    <p className="text-xs text-on-surface-variant">Zero-Sum Squad wants you for "Project Horizon".</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-medium text-on-surface">1h ago</p>
                                    <span className="text-[10px] text-secondary">#teams</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-high/30 transition-colors backdrop-blur-sm group cursor-pointer">
                                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-tertiary/30 transition-colors min-w-[3rem]">
                                    <img alt="Activity" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ1mZ0xCZSbCAzlJXl27E8CKbK7erBmWKVPJ-f0wwg4Vg8JhOwlqwWH07LvhP3i3x5bLS0tD_XfbCpo1gA0VKroHCweTpRchJiiitpzaiJo2FBGNRm-41st5bEJkhBrxHqMbgut2qShzDeUWfmTQGrWaa3O3JLoDLufmzFySYALmU0mygtZT6SbxXmRR8tf5wX1QIwDH1KHXj2wgSpqIGV5zQTIcyYLBFEQ9U4zCJ2A1JoRsijxO9cX9t1c57JgeXwzh5EWAxRQtqZ" />
                                </div>
                                <div className="flex-1">
                                    <h5 className="font-bold text-sm">Sale Confirmed</h5>
                                    <p className="text-xs text-on-surface-variant">"Retro Glitch Overlay" sold for 120 🜚.</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-medium text-on-surface">4h ago</p>
                                    <span className="text-[10px] text-tertiary">#sales</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;
