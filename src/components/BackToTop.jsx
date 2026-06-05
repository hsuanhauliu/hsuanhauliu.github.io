import { useState, useEffect, useRef } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [launchStyle, setLaunchStyle] = useState(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            const distanceFromBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
            setVisible(distanceFromBottom < 300);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const handleClick = () => {
        if (rafRef.current) return;
        const startY = window.scrollY;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const animate = () => {
            const progress = 1 - window.scrollY / startY;
            setLaunchStyle({ transform: `translateY(${progress * -160}px) rotate(-45deg)`, opacity: 1 - progress });
            rafRef.current = window.scrollY > 0 ? requestAnimationFrame(animate) : null;
            if (!rafRef.current) setLaunchStyle(null);
        };
        rafRef.current = requestAnimationFrame(animate);
    };

    const isLaunching = launchStyle !== null;
    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            style={{ background: 'none', border: 'none', ...(launchStyle ?? {}) }}
            className={`fixed bottom-8 right-8 z-50 text-3xl cursor-pointer select-none
                        hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]
                        ${isLaunching ? 'rocket-idle' : `transition-[opacity,translate] duration-500
                        ${visible ? 'opacity-100 rocket-idle' : 'opacity-0 translate-y-4 pointer-events-none'}`}`}>
            🚀
        </button>
    );
}
