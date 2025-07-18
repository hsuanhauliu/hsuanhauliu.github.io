import { useRef } from 'react';
import StarrySkyContainer from './components/background/StarrySkyContainer';
import Header from './components/Header'
import Footer from './components/Footer'
import PortfolioPage from './components/PortfolioPage';

import './styles/background/StarrySkyContainer.css'
import './App.css'

export default function App() {
  const sectionLinks = [
    { "id": "#about", "name": "About" },
    { "id": "#experience", "name": "Experience" },
    { "id": "#skills", "name": "Skills" },
    { "id": "#projects", "name": "Projects" },
    { "id": "#contact", "name": "Contact" },
  ];

  // An object to store refs for each section to calculate scroll positions
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  return (
    <div className="antialiased">
      <StarrySkyContainer />

      <Header sectionLinks={sectionLinks} sectionRefs={sectionRefs} />

      <PortfolioPage sectionRefs={sectionRefs} />

      <Footer />
    </div>
  );
}

