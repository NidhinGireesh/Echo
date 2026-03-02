import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Megaphone, ShoppingBag, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { events, projects, leaderboard } from '../data/mockData';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section style={{
                padding: '6rem 0 4rem 0',
                textAlign: 'center',
                background: 'radial-gradient(circle at top right, var(--primary-glow), transparent), radial-gradient(circle at bottom left, var(--secondary-glow), transparent)',
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="primary" className="fade-in" style={{ marginBottom: '1.5rem' }}>
                            <Sparkles size={14} style={{ marginRight: '0.5rem' }} />
                            Kerala's Largest Student Network
                        </Badge>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            maxWidth: '900px',
                            marginInline: 'auto'
                        }}>
                            Where Kerala's <span className="gradient-text">Brightest Minds</span> Collaborate & Create
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-muted)',
                            marginBottom: '2.5rem',
                            maxWidth: '600px',
                            marginInline: 'auto'
                        }}>
                            The all-in-one platform for Kerala's college students to promote events, trade projects, and find mentors.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/signup">
                                <Button size="lg">Join as Student</Button>
                            </Link>
                            <Link to="/events/promote">
                                <Button variant="outline" size="lg">Promote Event</Button>
                            </Link>
                            <Link to="/marketplace/sell">
                                <Button variant="secondary" size="lg">Sell Project</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Features Preview */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            { icon: <Megaphone color="var(--primary)" />, title: "Event Promotions", desc: "Reach 50,000+ students across 150+ Kerala colleges instantly." },
                            { icon: <ShoppingBag color="var(--secondary)" />, title: "Project Marketplace", desc: "Buy or sell high-quality academic projects with secure transfers." },
                            { icon: <Users color="var(--accent)" />, title: "Peer Collaboration", desc: "Find partners for your next big hackathon or startup idea." }
                        ].map((feature, idx) => (
                            <Card key={idx} padding="2rem">
                                <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
                                <h3 style={{ marginBottom: '0.75rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Events Carousel (Static Grid for Prototype) */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-surface)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Trending Events</h2>
                            <p style={{ color: 'var(--text-muted)' }}>Don't miss out on what's happening in Kerala colleges.</p>
                        </div>
                        <Link to="/events">
                            <Button variant="ghost">View All Events <ArrowRight size={16} /></Button>
                        </Link>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        {events.map((event) => (
                            <Card key={event.id} padding="0">
                                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                                        <Badge variant={event.tier.toLowerCase()}>{event.tier}</Badge>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>{event.category}</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{event.date}</span>
                                    </div>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{event.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{event.college}</p>
                                    <Link to={`/events/${event.id}`}>
                                        <Button variant="outline" style={{ width: '100%' }}>Interested</Button>
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Marketplace Projects</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginInline: 'auto' }}>
                            Hand-picked premium projects from across Kerala.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {projects.map((project) => (
                            <Card key={project.id} padding="1rem">
                                <div style={{ height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem' }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => <Badge key={tag} size="sm">{tag}</Badge>)}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                    <span style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--primary)' }}>{project.price}</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Trophy size={14} color="var(--accent)" />
                                        <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{project.rating}</span>
                                    </div>
                                </div>
                                <Link to={`/marketplace/${project.id}`} style={{ marginTop: '1.5rem', display: 'block' }}>
                                    <Button variant="primary" style={{ width: '100%' }}>View Details</Button>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* College Leaderboard Preview */}
            <section style={{ padding: '5rem 0', background: 'var(--bg-main)' }}>
                <div className="container">
                    <Card padding="3rem" style={{ border: '2px solid var(--primary-glow)' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '4rem',
                            alignItems: 'center'
                        }}>
                            <div>
                                <Badge variant="warning" style={{ marginBottom: '1rem' }}>College Ranking</Badge>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Kerala Campus Leaderboard</h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                    See how your college ranks based on event participation, project innovation, and collaboration points.
                                </p>
                                <Link to="/leaderboard">
                                    <Button variant="secondary">View Full Rankings</Button>
                                </Link>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {leaderboard.slice(0, 3).map((item) => (
                                    <div key={item.rank} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.5rem',
                                        padding: '1rem',
                                        background: 'var(--bg-subtle)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--border)'
                                    }}>
                                        <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', minWidth: '30px' }}>#{item.rank}</span>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '1rem' }}>{item.name}</h4>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.district}</p>
                                        </div>
                                        <span style={{ fontWeight: '700' }}>{item.points} pts</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '8rem 0', textAlign: 'center' }}>
                <div className="container">
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        padding: '4rem 2rem',
                        borderRadius: 'var(--radius-xl)',
                        color: 'white'
                    }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to elevate your campus life?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                            Join thousands of students across Kerala today.
                        </p>
                        <Link to="/signup">
                            <Button variant="glass" size="lg" style={{ color: 'white', borderColor: 'white' }}>Create Free Account</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
