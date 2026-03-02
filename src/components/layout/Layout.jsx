import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: 'var(--bg-main)',
            color: 'var(--text-main)',
        }}>
            <Navbar />
            <main style={{ flex: 1, paddingTop: '4.5rem' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
