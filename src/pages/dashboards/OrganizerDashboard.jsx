import React from 'react';
import { motion } from 'framer-motion';
import { Upload, PieChart, TrendingUp, Users, ExternalLink, Plus, Award } from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const OrganizerDashboard = () => {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Ambassador Dashboard</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Lead your campus community, onboard events, and earn perks.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button variant="outline">
                        <Users size={18} style={{ marginRight: '0.5rem' }} /> Manage Clubs
                    </Button>
                    <Button>
                        <Plus size={18} style={{ marginRight: '0.5rem' }} /> Onboard New Event
                    </Button>
                </div>
            </header>

            {/* Ambassador Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {[
                    { icon: <TrendingUp color="var(--primary)" />, label: 'Marketplace Influence', value: '₹42,500', sub: 'Commission Earned' },
                    { icon: <Users color="var(--secondary)" />, label: 'Students Onboarded', value: '1,240', sub: '+15% this month' },
                    { icon: <ExternalLink color="var(--accent)" />, label: 'Event Outreach', value: '12 Active', sub: 'In 3 colleges' },
                    { icon: <Award size={24} color="#a855f7" />, label: 'Current Tier', value: 'Silver', sub: '250pts to Gold' }
                ].map((stat, i) => (
                    <Card key={i} padding="1.5rem" className="glass">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ padding: '0.75rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>{stat.icon}</div>
                        </div>
                        <div style={{ fontSize: '1.75rem', fontWeight: '800' }}>{stat.value}</div>
                        <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{stat.label}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{stat.sub}</div>
                    </Card>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* Active Promotions */}
                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Onboarded Events</h2>
                    <Card padding="0">
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                    <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>EVENT</th>
                                    <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>TIER</th>
                                    <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>STATUS</th>
                                    <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>REACH</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { title: 'Cyber Security Hackathon', tier: 'Gold', reach: '8,400', status: 'Live' },
                                    { title: 'Entrepreneurship Summit', tier: 'Silver', reach: '5,200', status: 'Pending' },
                                    { title: 'Cultural Fest Promo', tier: 'Free', reach: '1,250', status: 'Completed' }
                                ].map((promo, i) => (
                                    <tr key={i} style={{ borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: '600' }}>{promo.title}</td>
                                        <td style={{ padding: '1.25rem' }}><Badge variant={promo.tier.toLowerCase()}>{promo.tier}</Badge></td>
                                        <td style={{ padding: '1.25rem' }}>
                                            <span style={{
                                                fontSize: '0.8rem',
                                                color: promo.status === 'Live' ? 'var(--secondary)' :
                                                    promo.status === 'Pending' ? 'var(--accent)' : 'var(--text-muted)'
                                            }}>
                                                • {promo.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1.25rem' }}>{promo.reach}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </section>

                {/* Tech Clubs */}
                <aside>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Managed Clubs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'IEEE SB MEC', members: '250+', logo: 'I' },
                            { name: 'TinkerHub MEC', members: '400+', logo: 'T' },
                            { name: 'FOSS Cell', members: '180+', logo: 'F' }
                        ].map((club, i) => (
                            <Card key={i} padding="1rem">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>
                                        {club.logo}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.1rem' }}>{club.name}</h4>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{club.members} Members</p>
                                    </div>
                                    <Button variant="ghost" size="sm">Manage</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default OrganizerDashboard;
