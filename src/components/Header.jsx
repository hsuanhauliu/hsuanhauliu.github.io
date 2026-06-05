import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header({ sectionRefs }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const headerRef = useRef(null);

    // Scroll-spy: highlight the nav link for the section currently in view
    useEffect(() => {
        const activateNavLink = () => {
            let currentSectionId = sectionRefs[0]?.id ?? '';
            const scrollY = window.pageYOffset;

            sectionRefs.forEach(section => {
                const el = section.ref.current;
                if (el && scrollY >= el.offsetTop - window.innerHeight * 0.3) {
                    currentSectionId = section.id;
                }
            });

            headerRef.current?.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
            });
        };

        window.addEventListener('scroll', activateNavLink, { passive: true });
        activateNavLink();
        return () => window.removeEventListener('scroll', activateNavLink);
    }, [sectionRefs]);

    return (
        <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo / home link */}
                    <Link to="/" aria-label="Howard Liu — Home"
                        className="flex items-center gap-2.5 text-white hover:text-sky-300 transition-colors duration-200">
                        <img src={logo} alt="Logo" className="h-7 w-7 object-contain" />
                        <span className="text-xl font-bold tracking-tight">Howard Liu</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-7">
                        {sectionRefs.map((section, i) => (
                            <a key={i} href={`#${section.id}`}
                                className="nav-link text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
                                {section.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileMenuOpen(v => !v)}
                        className="md:hidden text-slate-300 hover:text-white focus:outline-none transition-colors duration-200"
                        aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
                    {sectionRefs.map((section, i) => (
                        <a key={i} href={`#${section.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block nav-link py-3 px-6 text-sm text-slate-300
                                       hover:text-white hover:bg-slate-800/60 transition-colors duration-200">
                            {section.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Header;
