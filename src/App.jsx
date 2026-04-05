import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import DashboardLayout from './components/layout/DashboardLayout';

// Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import PricingPage from './pages/PricingPage';

// Dashboard Pages
import StudentDashboard from './pages/dashboards/StudentDashboard';
import OrganizerDashboard from './pages/dashboards/OrganizerDashboard';
import SellerDashboard from './pages/dashboards/SellerDashboard';
import Marketplace from './pages/marketplace/Marketplace';
import ProjectDetail from './pages/marketplace/ProjectDetail';
import LeaderboardPage from './pages/LeaderboardPage';
import DiscoverPage from './pages/DiscoverPage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import MessagingPage from './pages/MessagingPage';

const AppContent = () => {
  const location = useLocation();
  const isDashboardRoute = [
    '/dashboard', '/marketplace', '/leaderboard', '/discover', '/events', '/profile', '/messages'
  ].some(route => location.pathname.startsWith(route));

  if (isDashboardRoute) {
    return (
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/organizer" element={<OrganizerDashboard />} />
          <Route path="/dashboard/seller" element={<SellerDashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/:id" element={<ProjectDetail />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagingPage />} />
        </Routes>
      </DashboardLayout>
    );
  }

  // Public Layout routes
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
