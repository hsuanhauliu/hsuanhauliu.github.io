import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header({ sectionRefs }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSectionId, setActiveSectionId] = useState(sectionRefs[0]?.id ?? '');
    const headerRef = useRef(null);

    // Scroll-spy: track which section is currently in view
    useEffect(() => {
        if (!sectionRefs.length) return;
        const onScroll = () => {
            const scrollY = window.scrollY;
            let current = sectionRefs[0].id;
            sectionRefs.forEach(({ id, ref }) => {
                if (ref.current && scrollY >= ref.current.offsetTop - window.innerHeight * 0.3)
                    current = id;
            });
            setActiveSectionId(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [sectionRefs]);

    // Scroll to section without touching the URL (prevents HashRouter from breaking)
    const scrollToSection = (e, ref) => {
        e.preventDefault();
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const NavLink = ({ section }) => (
        <a
            href={`#${section.id}`}
            onClick={e => { scrollToSection(e, section.ref); setMobileMenuOpen(false); }}
            className={`nav-link text-sm font-medium transition-colors duration-200
                        ${activeSectionId === section.id ? 'active text-sky-400' : 'text-slate-300 hover:text-white'}`}>
            {section.name}
        </a>
    );

    return (
        <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    <Link to="/" aria-label="Howard Liu — Home"
                        className="flex items-center gap-2.5 text-white hover:text-sky-300 transition-colors duration-200">
                        <img src={logo} alt="Logo" className="h-11 w-11 object-contain" />
                        <span className="font-display text-xl font-bold tracking-tight">Howard Liu</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-7">
                        {sectionRefs.map(s => <NavLink key={s.id} section={s} />)}
                    </nav>

                    <button
                        onClick={() => setMobileMenuOpen(v => !v)}
                        className="md:hidden text-slate-300 hover:text-white focus:outline-none transition-colors duration-200"
                        aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col gap-3 px-6 py-4 bg-[#0b0a2a]/95 backdrop-blur-sm border-t-2 border-[rgba(160,140,255,0.18)]">
                    {sectionRefs.map(s => (
                        <NavLink key={s.id} section={s} />
                    ))}
                </div>
            )}
        </header>
    );
}

export default Header;
