import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ShieldCheck, ArrowRight, Chrome } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState('Student');
    const navigate = useNavigate();

    const handleAuth = (e) => {
        e.preventDefault();
        // In a real app, logic goes here
        // Redirect to dashboard based on role
        if (role === 'Organizer') navigate('/dashboard/organizer');
        else if (role === 'Seller') navigate('/dashboard/seller');
        else navigate('/dashboard/student');
    };

    const roles = [
        { name: 'Student', desc: 'Find events & collaborate' },
        { name: 'Organizer', desc: 'Promote campus events' },
        { name: 'Seller', desc: 'Market your projects' },
        { name: 'Mentor', desc: 'Guide fellow students' }
    ];

    return (
        <div style={{
            minHeight: 'calc(100vh - 4.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            background: 'var(--bg-surface)'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ width: '100%', maxWidth: '450px' }}
            >
                <Card padding="2.5rem">
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                            {isLogin ? 'Welcome Back!' : 'Create Account'}
                        </h1>
                        <p style={{ color: 'var(--text-muted)' }}>
                            {isLogin ? 'Enter your details to access CampusSphere' : 'Join Kerala\'s premier student network'}
                        </p>
                    </div>

                    <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {!isLogin && (
                            <Input label="Full Name" placeholder="e.g. Rahul Nair" required />
                        )}
                        <Input label="College Email" type="email" placeholder="name@college.edu" required />
                        <Input label="Password" type="password" placeholder="••••••••" required />

                        {!isLogin && (
                            <div style={{ marginTop: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.75rem', display: 'block' }}>
                                    Select Your Primary Role
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                    {roles.map((r) => (
                                        <div
                                            key={r.name}
                                            onClick={() => setRole(r.name)}
                                            style={{
                                                padding: '0.75rem',
                                                borderRadius: 'var(--radius-md)',
                                                border: '1px solid',
                                                borderColor: role === r.name ? 'var(--primary)' : 'var(--border)',
                                                background: role === r.name ? 'var(--primary-glow)' : 'transparent',
                                                cursor: 'pointer',
                                                transition: 'var(--transition)'
                                            }}
                                        >
                                            <div style={{ fontWeight: '600', fontSize: '0.85rem' }}>{r.name}</div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{r.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {isLogin && (
                            <div style={{ textAlign: 'right' }}>
                                <Link to="#" style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Forgot password?</Link>
                            </div>
                        )}

                        <Button type="submit" size="lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                            {isLogin ? 'Log In' : 'Sign Up'} <ArrowRight size={18} />
                        </Button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0' }}>
                            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}></div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>or continue with</span>
                            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}></div>
                        </div>

                        <Button variant="secondary" type="button" style={{ width: '100%' }}>
                            <Chrome size={18} style={{ marginRight: '0.5rem' }} /> Google
                        </Button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '600' }}
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </span>
                    </p>
                </Card>
            </motion.div>
        </div>
    );
};

export default AuthPage;
