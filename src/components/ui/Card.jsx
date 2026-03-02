import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
    children,
    className = '',
    padding = '1.5rem',
    hover = true,
    ...props
}) => {
    return (
        <motion.div
            whileHover={hover ? { translateY: -8, boxShadow: 'var(--shadow)' } : {}}
            style={{
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                padding: padding,
                transition: 'var(--transition)',
                position: 'relative',
                overflow: 'hidden',
            }}
            className={`cs-card ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
