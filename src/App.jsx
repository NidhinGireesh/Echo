import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';

// Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import OrganizerDashboard from './pages/dashboards/OrganizerDashboard';
import SellerDashboard from './pages/dashboards/SellerDashboard';
import Marketplace from './pages/marketplace/Marketplace';
import ProjectDetail from './pages/marketplace/ProjectDetail';
import PricingPage from './pages/PricingPage';
import LeaderboardPage from './pages/LeaderboardPage';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/marketplace/:id" element={<ProjectDetail />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/organizer" element={<OrganizerDashboard />} />
            <Route path="/dashboard/seller" element={<SellerDashboard />} />

            {/* Fallback for other requested routes in prototype */}
            <Route path="/events" element={<StudentDashboard />} />
            <Route path="/events/promote" element={<OrganizerDashboard />} />
            <Route path="/marketplace/sell" element={<SellerDashboard />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
