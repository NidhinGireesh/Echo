import React from 'react';

const Badge = ({
    children,
    variant = 'default',
    className = ''
}) => {
    const styles = {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.75rem',
        borderRadius: '100px',
        fontSize: '0.75rem',
        fontWeight: '600',
        letterSpacing: '0.025em',
        textTransform: 'uppercase',
    };

    const variants = {
        default: {
            background: 'var(--bg-subtle)',
            color: 'var(--text-muted)',
        },
        primary: {
            background: 'var(--primary-glow)',
            color: 'var(--primary)',
            border: '1px solid var(--primary)',
        },
        success: {
            background: 'var(--secondary-glow)',
            color: 'var(--secondary)',
            border: '1px solid var(--secondary)',
        },
        warning: {
            background: 'rgba(245, 158, 11, 0.1)',
            color: '#f59e0b',
            border: '1px solid #f59e0b',
        },
        gold: {
            background: 'linear-gradient(135deg, #fbbf24, #d97706)',
            color: 'white',
            boxShadow: '0 2px 8px rgba(217, 119, 6, 0.4)',
        },
        silver: {
            background: 'linear-gradient(135deg, #94a3b8, #475569)',
            color: 'white',
        }
    };

    return (
        <span style={{ ...styles, ...variants[variant] }} className={`cs-badge ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
