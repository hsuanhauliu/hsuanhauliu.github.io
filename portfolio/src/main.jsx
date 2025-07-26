import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import StarrySkyContainer from './components/background/StarrySkyContainer';
import Footer from './components/Footer'
import PortfolioPage from './components/PortfolioPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="antialiased">
      <StarrySkyContainer />
      <PortfolioPage />
      <Footer />
    </div>
  </StrictMode>
)
