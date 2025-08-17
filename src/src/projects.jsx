import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import StarrySkyContainer from './components/background/StarrySkyContainer';
import Footer from './components/Footer'
import ProjectPage from './components/ProjectPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="antialiased">
      <StarrySkyContainer />
      <ProjectPage />
      <Footer />
    </div>
  </StrictMode>
)
