import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
        primary: 'bg-[var(--primary)] text-white hover:bg-[var(--secondary)] shadow-sm',
        secondary: 'bg-[var(--bg-subtle)] text-[var(--text-main)] hover:bg-[var(--border)] border border-[var(--border)]',
        outline: 'bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-glow)]',
        ghost: 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-subtle)]',
        glass: 'glass text-[var(--text-main)] hover:bg-[var(--bg-subtle)]'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs rounded-[var(--radius-sm)]',
        md: 'px-5 py-2.5 text-sm rounded-[var(--radius-md)]',
        lg: 'px-8 py-4 text-base rounded-[var(--radius-lg)] font-bold'
    };

    // Convert classes to standard CSS using our index.css variables
    const buttonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        transition: 'var(--transition)',
        cursor: 'pointer',
        border: 'none',
        gap: '0.5rem',
        borderRadius: size === 'lg' ? 'var(--radius-lg)' : size === 'sm' ? 'var(--radius-sm)' : 'var(--radius-md)',
    };

    const variantStyles = {
        primary: {
            background: 'var(--primary)',
            color: 'white',
            boxShadow: '0 4px 14px 0 var(--primary-glow)',
        },
        secondary: {
            background: 'var(--bg-subtle)',
            color: 'var(--text-main)',
            border: '1px solid var(--border)',
        },
        outline: {
            background: 'transparent',
            border: '2px solid var(--primary)',
            color: 'var(--primary)',
        },
        ghost: {
            background: 'transparent',
            color: 'var(--text-muted)',
        },
        glass: {
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-main)',
        }
    };

    const sizeStyles = {
        sm: { padding: '0.5rem 1rem', fontSize: '0.8rem' },
        md: { padding: '0.75rem 1.5rem', fontSize: '0.9rem' },
        lg: { padding: '1rem 2rem', fontSize: '1rem' }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
                ...buttonStyle,
                ...variantStyles[variant],
                ...sizeStyles[size],
            }}
            className={`cs-button ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
