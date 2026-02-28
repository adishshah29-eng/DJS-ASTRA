import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import FooterCTA from './components/FooterCTA';
import Home from './pages/Home';
import Bots from './pages/Bots';
import Team from './pages/Team';
import Competitions from './pages/Competitions';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/bots" element={<PageTransition><Bots /></PageTransition>} />
        <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
        <Route path="/competitions" element={<PageTransition><Competitions /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ marginTop: 'var(--nav-height)' }}>
          <AnimatedRoutes />
        </main>
        <FooterCTA />
      </div>
    </Router>
  );
}

export default App;
