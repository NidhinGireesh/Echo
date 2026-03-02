import React from 'react';

const Input = ({
    label,
    error,
    className = '',
    ...props
}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            {label && (
                <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>
                    {label}
                </label>
            )}
            <input
                style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: error ? '1px solid #ef4444' : '1px solid var(--border)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    transition: 'var(--transition)',
                    outline: 'none',
                }}
                className={`cs-input ${className}`}
                onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.boxShadow = '0 0 0 3px var(--primary-glow)';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = error ? '#ef4444' : 'var(--border)';
                    e.target.style.boxShadow = 'none';
                }}
                {...props}
            />
            {error && (
                <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{error}</span>
            )}
        </div>
    );
};

export default Input;
