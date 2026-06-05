import { HashRouter, Routes, Route } from 'react-router-dom'

import StarrySkyContainer from './components/background/StarrySkyContainer'
import Footer from './components/Footer'
import PortfolioPage from './components/PortfolioPage'
import ProjectPage from './components/ProjectPage'

export default function App() {
    return (
        <HashRouter>
            <div className="antialiased">
                <StarrySkyContainer />
                <Routes>
                    <Route path="/" element={<PortfolioPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    )
}
