import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import AmbassadorDashboard from './pages/dashboards/AmbassadorDashboard';
import Marketplace from './pages/marketplace/Marketplace';
import ProjectDetail from './pages/marketplace/ProjectDetail';
import LeaderboardPage from './pages/LeaderboardPage';
import DiscoverPage from './pages/DiscoverPage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import MessagingPage from './pages/MessagingPage';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Marketing Routes */}
          <Route element={<Layout><LandingPage /></Layout>} path="/" />
          <Route element={<Layout><AuthPage /></Layout>} path="/login" />
          <Route element={<Layout><AuthPage /></Layout>} path="/signup" />
          <Route element={<Layout><PricingPage /></Layout>} path="/pricing" />

          {/* Dashboard/Feature Routes */}
          <Route element={<DashboardLayout><StudentDashboard /></DashboardLayout>} path="/dashboard/student" />
          <Route element={<DashboardLayout><OrganizerDashboard /></DashboardLayout>} path="/dashboard/organizer" />
          <Route element={<DashboardLayout><SellerDashboard /></DashboardLayout>} path="/dashboard/seller" />
          <Route element={<DashboardLayout><AmbassadorDashboard /></DashboardLayout>} path="/dashboard/ambassador" />
          <Route element={<DashboardLayout><Marketplace /></DashboardLayout>} path="/marketplace" />
          <Route element={<DashboardLayout><ProjectDetail /></DashboardLayout>} path="/marketplace/:id" />
          <Route element={<DashboardLayout><LeaderboardPage /></DashboardLayout>} path="/leaderboard" />
          <Route element={<DashboardLayout><DiscoverPage /></DashboardLayout>} path="/discover" />
          <Route element={<DashboardLayout><EventsPage /></DashboardLayout>} path="/events" />
          <Route element={<DashboardLayout><ProfilePage /></DashboardLayout>} path="/profile" />
          <Route element={<DashboardLayout><MessagingPage /></DashboardLayout>} path="/messages" />

          {/* Fallbacks */}
          <Route element={<Navigate to="/dashboard/student" replace />} path="/dashboard" />
          <Route element={<Navigate to="/" replace />} path="*" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
