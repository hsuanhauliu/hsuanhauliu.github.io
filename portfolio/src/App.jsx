import { useState } from 'react';
import StarrySkyContainer from './components/background/StarrySkyContainer';
import Footer from './components/Footer'
import PortfolioPage from './components/PortfolioPage';
import ProjectPage from './components/ProjectPage';

import './styles/background/StarrySkyContainer.css'
import './App.css'

export default function App() {
  // useState hook to keep track of the currently active tab.
  // We'll use 'home' as the default active tab.
  const [activeTab, setActiveTab] = useState('home');

  // Data for our tabs. This approach makes it easy to add more tabs later.
  const pages = [
    {
      id: 'home', content:
        <PortfolioPage
          projectPageTrigger={() => setActiveTab('projects')}
        />
    },
    { id: 'projects', content: <ProjectPage /> },
  ];

  return (
    <div className="antialiased">
      <StarrySkyContainer />

      {/* Content Area */}
      {pages.find(page => page.id === activeTab)?.content}

      <Footer />
    </div>
  );
}

