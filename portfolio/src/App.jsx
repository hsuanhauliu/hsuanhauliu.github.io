import { Routes, Route } from 'react-router-dom';

import StarrySkyContainer from './components/background/StarrySkyContainer';
import Footer from './components/Footer'
import PortfolioPage from './components/PortfolioPage';
import ProjectPage from './components/ProjectPage';

import './styles/background/StarrySkyContainer.css'
import './App.css'

export default function App() {
  return (
    <div className="antialiased">
      <StarrySkyContainer />

      {/* Content Area */}
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

