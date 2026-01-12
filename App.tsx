
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inquiry from './pages/Inquiry';
import Systems from './pages/Systems';
import Manifesto from './pages/Manifesto';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg-main text-white font-sans selection:bg-white selection:text-black">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/manifesto" element={<Manifesto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
