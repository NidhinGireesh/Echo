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
            name: 'Ambassador',
            price: 'Exclusive',
            desc: 'For campus leaders & tech clubs',
            icon: <Badge size={24} color="var(--secondary)" />,
            features: [
                'Premium Platform Access',
                'Verified Ambassador Badge',
                'Onboard College Events',
                'Commission on Asset Sales',
                'Priority "Proof of Work" Review',
                'Direct Expert Access'
            ],
            notIncluded: [],
            buttonText: 'Apply Now',
            variant: 'primary',
            recommended: true
        },
        {
            name: 'Gold',
            price: '₹999',
            desc: 'Maximum reach for major fests',
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
            <div className="text-center mb-16 relative z-10">
                <h1 className="text-5xl md:text-6xl font-black font-headline tracking-tighter text-white mb-4">Unlock Your <span className="text-primary">Potential</span></h1>
                <p className="text-on-surface-variant font-medium text-lg max-w-xl mx-auto opacity-70">
                    Whether you're promoting a fest, or leading your campus tech community, Echo has the perfect tier for you.
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

                        <button className={`glass-button !w-full !py-4 !text-xs ${tier.recommended ? '' : '!from-white/5 !to-transparent'}`}>
                            {tier.buttonText}
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;
