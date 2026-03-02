import React from 'react';
import { Check, X, Zap, Crown, Rocket } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const PricingPage = () => {
    const tiers = [
        {
            name: 'Free',
            price: '₹0',
            desc: 'Perfect for small campus clubs',
            icon: <Rocket size={24} color="var(--text-muted)" />,
            features: [
                '1 Active Promotion',
                'Basic Analytics (Views)',
                '3-Day Listing Period',
                'Campus-only visibility',
                'Standard Support'
            ],
            notIncluded: [
                'Push Notifications',
                'Featured Badge',
                'Priority Listing',
                'Email Marketing'
            ],
            buttonText: 'Start for Free',
            variant: 'secondary'
        },
        {
            name: 'Silver',
            price: '₹499',
            desc: 'Ideal for major college fests',
            icon: <Zap size={24} color="var(--primary)" />,
            features: [
                '3 Active Promotions',
                'Advanced Analytics',
                '7-Day Listing Period',
                'District-wide visibility',
                'Silver "Trending" Badge',
                'Push Notifications',
                'Priority Support'
            ],
            notIncluded: [
                'State-wide visibility',
                'Email Marketing'
            ],
            buttonText: 'Choose Silver',
            variant: 'primary',
            recommended: true
        },
        {
            name: 'Gold',
            price: '₹999',
            desc: 'Maximum reach for major sponsors',
            icon: <Crown size={24} color="var(--accent)" />,
            features: [
                'Unlimited Promotions',
                'Full Analytics Suite',
                '30-Day Listing Period',
                'Kerala State-wide visibility',
                'Gold "Premium" Badge',
                'Priority Push Notifications',
                'Dedicated Support Manager',
                'Email Marketing Inclusion'
            ],
            notIncluded: [],
            buttonText: 'Go Gold',
            variant: 'primary'
        }
    ];

    return (
        <div className="container" style={{ padding: '6rem 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simple, <span className="gradient-text">Transparent</span> Pricing</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', marginInline: 'auto' }}>
                    Choose the right promotion tier for your college event and reach thousands of students across Kerala.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                alignItems: 'start'
            }}>
                {tiers.map((tier, i) => (
                    <Card
                        key={i}
                        padding="2.5rem"
                        style={{
                            border: tier.recommended ? '2px solid var(--primary)' : '1px solid var(--border)',
                            position: 'relative',
                            transform: tier.recommended ? 'scale(1.05)' : 'scale(1)',
                            zIndex: tier.recommended ? 1 : 0
                        }}
                    >
                        {tier.recommended && (
                            <Badge variant="primary" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                                Most Popular
                            </Badge>
                        )}
                        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{tier.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tier.name}</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>{tier.price}</div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{tier.desc}</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                            {tier.features.map((feature, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                                    <Check size={16} color="var(--secondary)" /> {feature}
                                </div>
                            ))}
                            {tier.notIncluded.map((feature, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)', opacity: 0.6 }}>
                                    <X size={16} /> {feature}
                                </div>
                            ))}
                        </div>

                        <Button variant={tier.variant} size="lg" style={{ width: '100%' }}>{tier.buttonText}</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;
