import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Users, Star, ArrowLeft, Download, ShieldCheck, Github } from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { projects } from '../../data/mockData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id)) || projects[0];

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <Link to="/marketplace" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                <ArrowLeft size={16} /> Back to Marketplace
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'start' }}>
                {/* Left Column: Details */}
                <section>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                            {project.tags.map(tag => <Badge key={tag} variant="primary">{tag}</Badge>)}
                        </div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{project.title}</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            A comprehensive solution designed specifically for {project.category} applications. This project includes fully documented source code, a research report, and deployment guides.
                        </p>
                    </div>

                    <div style={{
                        height: '450px',
                        background: 'var(--bg-surface)',
                        borderRadius: 'var(--radius-xl)',
                        marginBottom: '3rem',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                style={{
                                    width: '80px', height: '80px', borderRadius: '50%', background: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                <Play size={32} color="var(--primary)" fill="var(--primary)" />
                            </motion.button>
                        </div>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What's Included</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {[
                                'Full Source Code (React + Node.js)',
                                'Firebase/MongoDB Integration',
                                'Comprehensive Documentation',
                                'UI/UX Design Assets (Figma)',
                                'Deployment Guide',
                                '30-minute Mentor Call'
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                                    <CheckCircle2 size={18} color="var(--secondary)" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Right Column: Sidebar */}
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <Card padding="2rem" style={{ border: '2px solid var(--primary)' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>{project.price}</div>
                        <Button size="lg" style={{ width: '100%', marginBottom: '1rem' }}>Buy Project Now</Button>
                        <Button variant="outline" size="lg" style={{ width: '100%' }}>Live Preview</Button>
                        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <ShieldCheck size={14} /> 7-Day Refund Guarantee
                        </div>
                    </Card>

                    <Card padding="1.5rem">
                        <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Seller Profile</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '800' }}>
                                {project.seller[0]}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem' }}>{project.seller}</h4>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.college} Student</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderTop: '1px solid var(--border)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: '700' }}>14</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Sales</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: '700' }}>{project.rating} ★</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Rating</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: '700' }}>98%</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Response</div>
                            </div>
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
};

export default ProjectDetail;
