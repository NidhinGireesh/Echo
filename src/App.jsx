import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import DashboardLayout from './components/layout/DashboardLayout';

// Loading Fallback
const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-surface z-[100]">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Lazy Pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// Lazy Dashboard Pages
const StudentDashboard = lazy(() => import('./pages/dashboards/StudentDashboard'));
const OrganizerDashboard = lazy(() => import('./pages/dashboards/OrganizerDashboard'));
const SellerDashboard = lazy(() => import('./pages/dashboards/SellerDashboard'));
const AmbassadorDashboard = lazy(() => import('./pages/dashboards/AmbassadorDashboard'));
const Marketplace = lazy(() => import('./pages/marketplace/Marketplace'));
const ProjectDetail = lazy(() => import('./pages/marketplace/ProjectDetail'));
const LeaderboardPage = lazy(() => import('./pages/LeaderboardPage'));
const DiscoverPage = lazy(() => import('./pages/DiscoverPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const MessagingPage = lazy(() => import('./pages/MessagingPage'));
const MintAssetPage = lazy(() => import('./pages/MintAssetPage'));
const JoinSquadPage = lazy(() => import('./pages/JoinSquadPage'));
const LaunchLabPage = lazy(() => import('./pages/LaunchLabPage'));
const WithdrawPage = lazy(() => import('./pages/WithdrawPage'));

// Lazy Category Hubs
const GamingHub = lazy(() => import('./pages/GamingHub'));
const STEMHub = lazy(() => import('./pages/STEMHub'));
const CreativeHub = lazy(() => import('./pages/CreativeHub'));
const LifestyleHub = lazy(() => import('./pages/LifestyleHub'));

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<LoadingScreen />}>
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
            <Route element={<DashboardLayout><MintAssetPage /></DashboardLayout>} path="/mint" />
            <Route element={<DashboardLayout><JoinSquadPage /></DashboardLayout>} path="/squad" />
            <Route element={<DashboardLayout><LaunchLabPage /></DashboardLayout>} path="/launch" />
            <Route element={<DashboardLayout><WithdrawPage /></DashboardLayout>} path="/withdraw" />

            {/* Category Hubs */}
            <Route element={<DashboardLayout><GamingHub /></DashboardLayout>} path="/gaming" />
            <Route element={<DashboardLayout><STEMHub /></DashboardLayout>} path="/stem" />
            <Route element={<DashboardLayout><CreativeHub /></DashboardLayout>} path="/creative" />
            <Route element={<DashboardLayout><LifestyleHub /></DashboardLayout>} path="/lifestyle" />

            {/* Fallbacks */}
            <Route element={<Navigate to="/dashboard/student" replace />} path="/dashboard" />
            <Route element={<Navigate to="/" replace />} path="*" />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
