import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, Heart, X, Sparkles } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const MatchmakingSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [matches, setMatches] = useState([]);

    const potentialMatches = [
        {
            id: 1,
            name: "Sanjay Kumar",
            role: "Backend Developer",
            stack: ["Node.js", "MongoDB", "Python"],
            college: "CET",
            bio: "Building a fintech app, looking for a React expert to handle the frontend.",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Anjali Menon",
            role: "Flutter Developer",
            stack: ["Dart", "Flutter", "Firebase"],
            college: "MEC",
            bio: "Passionate about mobile UX. Seeking a backend partner for a health-tech project.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Kevin Jose",
            role: "UI/UX Designer",
            stack: ["Figma", "Adobe XD", "Prototyping"],
            college: "NIT Calicut",
            bio: "Designer turned builder. Need a developer to bring my glassmorphism dreams to life.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    const currentProfile = potentialMatches[currentIndex];

    const handleNext = (isMatch) => {
        if (isMatch) {
            setMatches([...matches, currentProfile]);
        }
        if (currentIndex < potentialMatches.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(-1); // End of list
        }
    };

    if (currentIndex === -1) {
        return (
            <Card padding="2rem" className="glass" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                    <Sparkles size={48} style={{ margin: '0 auto' }} />
                </div>
                <h3>All Caught Up!</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    We've shown you all potential matches for today. Check back later for more co-founder suggestions.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                    {matches.map(m => (
                        <Badge key={m.id} variant="secondary">Matched with {m.name}</Badge>
                    ))}
                </div>
            </Card>
        );
    }

    return (
        <section style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Sparkles size={24} color="var(--primary)" />
                <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Tinder for <span className="gradient-text">Co-Founders</span></h2>
            </div>

            <div style={{ position: 'relative', height: '450px', maxWidth: '400px', margin: '0 auto' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentProfile.id}
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        exit={{ opacity: 0, x: -50, rotate: -5 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                    >
                        <Card padding="0" style={{ overflow: 'hidden', height: '100%', position: 'relative' }}>
                            <img
                                src={currentProfile.image}
                                alt={currentProfile.name}
                                style={{ width: '100%', height: '60%', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{currentProfile.name}</h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{currentProfile.college}</p>
                                    </div>
                                    <Badge variant="primary">{currentProfile.role}</Badge>
                                </div>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineClamp: 2 }}>{currentProfile.bio}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {currentProfile.stack.map(s => (
                                        <Badge key={s} variant="secondary" style={{ fontSize: '0.7rem' }}>{s}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                position: 'absolute',
                                bottom: '1rem',
                                left: '0',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '2rem',
                                padding: '0 1rem'
                            }}>
                                <button
                                    onClick={() => handleNext(false)}
                                    style={{
                                        border: 'none',
                                        background: 'rgba(255, 0, 0, 0.1)',
                                        color: '#ff4444',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <X size={24} />
                                </button>
                                <button
                                    onClick={() => handleNext(true)}
                                    style={{
                                        border: 'none',
                                        background: 'rgba(0, 255, 128, 0.1)',
                                        color: '#00cc66',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Heart size={24} fill="currentColor" />
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MatchmakingSection;
