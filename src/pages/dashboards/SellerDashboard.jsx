import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Package, ShoppingCart, BarChart3, Plus, ArrowUpRight, Download } from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const SellerDashboard = () => {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Seller Hub</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Manage your project listings and monitor your revenue.</p>
                </div>
                <Button size="lg">
                    <Plus size={18} style={{ marginRight: '0.5rem' }} /> Add New Project
                </Button>
            </header>

            {/* Revenue Snapshot */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                <Card padding="2rem" style={{ background: 'linear-gradient(135deg, var(--bg-surface), var(--primary-glow))' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Revenue</p>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)' }}>₹24,500</h2>
                        </div>
                        <div style={{ padding: '0.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', color: 'var(--primary)' }}>
                            <DollarSign size={24} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>This Month</span>
                            <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>₹8,200 <ArrowUpRight size={14} color="var(--secondary)" /></div>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Orders</span>
                            <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>12</div>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Avg. Rating</span>
                            <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>4.8 ★</div>
                        </div>
                    </div>
                </Card>

                <Card padding="2rem">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Quick Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Button variant="outline" style={{ justifyContent: 'flex-start' }}><Download size={16} /> Download Sales Report</Button>
                        <Button variant="outline" style={{ justifyContent: 'flex-start' }}><BarChart3 size={16} /> View Detailed Analytics</Button>
                        <Button variant="outline" style={{ justifyContent: 'flex-start' }}><Package size={16} /> Bulk Upload Files</Button>
                    </div>
                </Card>
            </div>

            {/* Project Listings */}
            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem' }}>Your Project Listings</h2>
                    <Badge variant="primary">5 Active Projects</Badge>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'AI Agro Predictor', price: '₹4,999', sales: '8', views: '450', status: 'Active' },
                        { title: 'Smart Waste IoT', price: '₹3,499', sales: '4', views: '280', status: 'Active' },
                        { title: 'Blockchain Vote', price: '₹5,999', sales: '0', views: '120', status: 'Review' }
                    ].map((project, i) => (
                        <Card key={i} padding="1.5rem">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <Badge variant={project.status === 'Active' ? 'success' : 'warning'}>{project.status}</Badge>
                                <div style={{ fontSize: '1.1rem', fontWeight: '800' }}>{project.price}</div>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{project.title}</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ padding: '0.75rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Sales</div>
                                    <div style={{ fontWeight: '700' }}>{project.sales}</div>
                                </div>
                                <div style={{ padding: '0.75rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Views</div>
                                    <div style={{ fontWeight: '700' }}>{project.views}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <Button variant="secondary" size="sm" style={{ flex: 1 }}>Edit</Button>
                                <Button variant="outline" size="sm" style={{ flex: 1 }}>Stats</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SellerDashboard;
