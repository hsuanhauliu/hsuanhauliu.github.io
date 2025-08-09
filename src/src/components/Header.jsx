import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css'

function Header({ sectionRefs }) {
    // State to manage the visibility of the mobile menu
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Refs for DOM elements that we need to interact with directly
    const headerRef = useRef(null);

    // --- EFFECT FOR SCROLL-SPY NAVIGATION HIGHLIGHTING ---
    useEffect(() => {
        const activateNavLink = () => {
            let currentSectionId = 'about'; // Default to 'about'
            const scrollY = window.pageYOffset;

            // Find which section is currently in view
            sectionRefs.map(section => {
                const sec = section.ref.current;
                if (sec) {
                    // Check if the top of the section is within a certain threshold of the viewport
                    if (scrollY >= sec.offsetTop - window.innerHeight * 0.3) {
                        currentSectionId = section.id;
                    }
                }
            });

            // Update the 'active' class on all navigation links
            const header = headerRef.current;
            if (header) {
                const navLinks = header.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        };

        window.addEventListener('scroll', activateNavLink, { passive: true });
        activateNavLink(); // Run on mount to set initial state

        return () => window.removeEventListener('scroll', activateNavLink);
    }, []); // Run once on mount

    return (
        <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="/" id="header-logo-link" className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300" aria-label="Howard Liu - Home">
                        <img id="header-logo-img" src={logo} alt="Howard Liu Logo" className="h-8" />
                        <span className="text-2xl font-bold">Howard Liu</span>
                    </a>
                    <nav className="hidden md:flex space-x-6">
                        {sectionRefs.map((section, i) => <a key={i} href={"#" + section.id} className="nav-link text-gray-300 hover:text-white transition duration-300">{section.name}</a>)}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} id="mobile-menu-button" className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMobileMenuOpen ? (
                                    <>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12" />
                                    </>
                                ) : (
                                    <>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800/95`}>
                {sectionRefs.map((section, i) => <a key={i} onClick={() => setMobileMenuOpen(false)} href={"#" + section.id} className="block nav-link py-3 px-4 text-sm text-gray-200 hover:bg-gray-700 hover:text-white transition duration-300">{section.name}</a>)}
            </div>
        </header>
    );
}

export default Header;
