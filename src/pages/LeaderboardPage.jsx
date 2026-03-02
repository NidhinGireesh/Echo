import React, { useState } from 'react';
import { Trophy, Search, MapPin, Users, Target, ArrowUpRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { leaderboard } from '../data/mockData';

const LeaderboardPage = () => {
    const [district, setDistrict] = useState('All');
    const districts = ['All', 'Trivandrum', 'Ernakulam', 'Kozhikode', 'Kollam', 'Thrissur', 'Kottayam', 'Palakkad'];

    return (
        <div className="container" style={{ padding: '6rem 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Kerala <span className="gradient-text">Campus</span> Leaderboard</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', marginInline: 'auto' }}>
                    Recognizing the most active and innovative college campuses across the state. Points are awarded for event hosting, project submissions, and collaboration.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1fr)', gap: '3rem' }}>
                <section>
                    {/* Tabs/Filters */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '2rem',
                        background: 'var(--bg-surface)',
                        padding: '1rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)'
                    }}>
                        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }} className="no-scrollbar">
                            {['Highest Points', 'Most Students', 'Active Events'].map(tab => (
                                <Button key={tab} variant={tab === 'Highest Points' ? 'primary' : 'ghost'} size="sm">{tab}</Button>
                            ))}
                        </div>
                        <select
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--radius-md)',
                                background: 'var(--bg-main)',
                                border: '1px solid var(--border)',
                                color: 'var(--text-main)',
                                outline: 'none'
                            }}
                        >
                            {districts.map(d => <option key={d}>{d}</option>)}
                        </select>
                    </div>

                    {/* Table */}
                    <Card padding="0">
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '60px 2fr 1.5fr 1fr', fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            <span>RANK</span>
                            <span>COLLEGE</span>
                            <span>DISTRICT</span>
                            <span>POINTS</span>
                        </div>
                        {leaderboard.map((college, i) => (
                            <div key={college.rank} style={{
                                padding: '1.5rem',
                                borderBottom: i < leaderboard.length - 1 ? '1px solid var(--border)' : 'none',
                                display: 'grid',
                                gridTemplateColumns: '60px 2fr 1.5fr 1fr',
                                alignItems: 'center',
                                transition: 'var(--transition)'
                            }} className="hover:bg-subtle">
                                <span style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '800',
                                    color: college.rank <= 3 ? 'var(--primary)' : 'var(--text-muted)'
                                }}>
                                    #{college.rank}
                                </span>
                                <div style={{ fontWeight: '600' }}>{college.name}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <MapPin size={14} /> {college.district}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{college.points}</span>
                                    {college.rank <= 3 && <Trophy size={16} color="var(--accent)" />}
                                </div>
                            </div>
                        ))}
                    </Card>
                </section>

                <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <Card padding="1.5rem">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>How Points Work</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                { label: 'Event Promotion', pts: '100 pts' },
                                { label: 'Project Approved', pts: '250 pts' },
                                { label: 'Student Join', pts: '10 pts' },
                                { label: 'Collab Success', pts: '150 pts' }
                            ].map((rule, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>{rule.label}</span>
                                    <span style={{ fontWeight: '700', color: 'var(--primary)' }}>+{rule.pts}</span>
                                </div>
                            ))}
                        </div>
                        <Button variant="secondary" style={{ width: '100%', marginTop: '1.5rem' }}>Full Rules</Button>
                    </Card>

                    <Card padding="1.5rem" style={{ background: 'var(--primary)', color: 'white' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Want to boost your college?</h3>
                        <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                            Invite more friends to join CampusSphere and start promoting your events!
                        </p>
                        <Button variant="glass" style={{ width: '100%', borderColor: 'white', color: 'white' }}>Generate Invite Link</Button>
                    </Card>
                </aside>
            </div>
        </div>
    );
};

export default LeaderboardPage;
