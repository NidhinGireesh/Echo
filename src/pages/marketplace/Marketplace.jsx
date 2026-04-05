import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingBag, Star, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { projects } from '../../data/mockData';

const Marketplace = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Machine Learning', 'UI Kit', 'ML Dataset', 'API Wrapper', 'IoT', 'Blockchain'];

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Asset <span className="gradient-text">Marketplace</span></h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', marginInline: 'auto' }}>
                    Stop rebuilding from scratch. Buy verified UI kits, custom ML datasets, and specialized code modules.
                </p>
            </div>

            {/* Search and Filters */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '3rem',
                background: 'var(--bg-surface)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search assets (e.g. Figma Kit, Traffic Dataset)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem 0.75rem 2.8rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border)',
                            background: 'var(--bg-main)',
                            color: 'var(--text-main)',
                            outline: 'none'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }} className="no-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '0.6rem 1.25rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid',
                                borderColor: activeCategory === cat ? 'var(--primary)' : 'var(--border)',
                                background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-main)',
                                color: activeCategory === cat ? 'white' : 'var(--text-main)',
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
            </div>

            {/* Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2.5rem'
            }}>
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card padding="0" hover className="fade-in">
                            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    {project.featured && <Badge variant="gold">Editor's Choice</Badge>}
                                    <Badge variant="secondary">{project.type}</Badge>
                                </div>
                                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem' }}>
                                    <div style={{ background: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', backdropFilter: 'blur(4px)', fontWeight: '700' }}>
                                        {project.price}
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                    {project.tags.map(tag => <Badge key={tag} size="sm">{tag}</Badge>)}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.7rem' }}>
                                            {project.seller[0]}
                                        </div>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.seller}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Star size={14} fill="var(--accent)" color="var(--accent)" />
                                        <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{project.rating}</span>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>({project.reviews})</span>
                                    </div>
                                </div>
                                <Link to={`/marketplace/${project.id}`}>
                                    <Button variant="primary" style={{ width: '100%' }}>View Asset Details</Button>
                                </Link>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};


export default Marketplace;
