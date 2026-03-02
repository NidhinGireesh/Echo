import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, Tag, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { events, projects } from '../../data/mockData';

const StudentDashboard = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Hackathon', 'Workshop', 'Conference', 'Tech Fest'];
    const districts = ['All', 'Trivandrum', 'Kochi', 'Calicut', 'Kollam', 'Thrissur'];

    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome back, Rahul! 👋</h1>
                <p style={{ color: 'var(--text-muted)' }}>Explore what's happening in your campus community today.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1fr)', gap: '2.5rem' }}>
                {/* Main Feed */}
                <section>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Event Feed</h2>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <select style={{
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--border)',
                                background: 'var(--bg-surface)',
                                color: 'var(--text-main)',
                                fontSize: '0.85rem'
                            }}>
                                {districts.map(d => <option key={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }} className="no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '100px',
                                    border: '1px solid',
                                    borderColor: filter === cat ? 'var(--primary)' : 'var(--border)',
                                    background: filter === cat ? 'var(--primary)' : 'var(--bg-surface)',
                                    color: filter === cat ? 'white' : 'var(--text-main)',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    transition: 'var(--transition)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {events.map((event) => (
                            <Card key={event.id} padding="1.5rem" className="fade-in">
                                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                    <div style={{ width: '180px', height: '120px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <Badge variant={event.tier.toLowerCase()} style={{ marginBottom: '0.75rem' }}>{event.tier} Promotion</Badge>
                                            <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)' }}>{event.price}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{event.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>{event.college}</p>
                                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                <Calendar size={14} /> {event.date}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                <MapPin size={14} /> {event.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ alignSelf: 'center' }}>
                                        <Button variant="outline" size="sm">Register</Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Sidebar */}
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    {/* Featured Projects */}
                    <section>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Star size={18} color="var(--accent)" fill="var(--accent)" /> Recommended Projects
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {projects.slice(0, 2).map(project => (
                                <Card key={project.id} padding="1rem">
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <img src={project.image} alt={project.title} style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem', display: 'flex', justifyContent: 'space-between' }}>
                                                {project.title.substring(0, 20)}...
                                                <span style={{ color: 'var(--primary)' }}>{project.price}</span>
                                            </h4>
                                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                                                {project.tags.slice(0, 2).map(tag => <Badge key={tag} size="sm" style={{ fontSize: '0.65rem' }}>{tag}</Badge>)}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        <Link to="/marketplace" style={{ display: 'block', marginTop: '1rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>
                            Browse Marketplace <ArrowRight size={14} />
                        </Link>
                    </section>

                    {/* Quick Stats */}
                    <Card padding="1.5rem">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>Your Progress</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
                                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>12</span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Events Attended</span>
                            </div>
                            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
                                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--secondary)' }}>450</span>
                                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Sphere Points</span>
                            </div>
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
};

export default StudentDashboard;
