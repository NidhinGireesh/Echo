import React from 'react';
import { motion } from 'framer-motion';
import { Upload, PieChart, TrendingUp, Users, ExternalLink, Plus } from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const OrganizerDashboard = () => {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Organizer Dashboard</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Manage your campus event promotions and track reach.</p>
                </div>
                <Button size="lg">
                    <Plus size={18} style={{ marginRight: '0.5rem' }} /> Create New Promotion
                </Button>
            </header>

            {/* Stats Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {[
                    { icon: <TrendingUp color="var(--primary)" />, label: 'Total Reach', value: '14,250' },
                    { icon: <Users color="var(--secondary)" />, label: 'Unique Visitors', value: '4,820' },
                    { icon: <ExternalLink color="var(--accent)" />, label: 'Click-through Rate', value: '18.5%' },
                    { icon: <PieChart color="#a855f7" />, label: 'Conversion', value: '12.2%' }
                ].map((stat, i) => (
                    <Card key={i} padding="1.5rem">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ padding: '0.75rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>{stat.icon}</div>
                            <Badge variant="success" style={{ fontSize: '0.7rem' }}>+12%</Badge>
                        </div>
                        <div style={{ fontSize: '1.75rem', fontWeight: '800' }}>{stat.value}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{stat.label}</div>
                    </Card>
                ))}
            </div>

            {/* Active Promotions */}
            <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Your Active Promotions</h2>
                <Card padding="0">
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>EVENT</th>
                                <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>TIER</th>
                                <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>REACH</th>
                                <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>STATUS</th>
                                <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>ACTIONS</th>
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
                                    <td style={{ padding: '1.25rem' }}>{promo.reach}</td>
                                    <td style={{ padding: '1.25rem' }}>
                                        <span style={{
                                            fontSize: '0.8rem',
                                            color: promo.status === 'Live' ? 'var(--secondary)' :
                                                promo.status === 'Pending' ? 'var(--accent)' : 'var(--text-muted)'
                                        }}>
                                            • {promo.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem' }}>
                                        <Button variant="ghost" size="sm">Analytics</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </section>
        </div>
    );
};

export default OrganizerDashboard;
