import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const distanceFromBottom =
                document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
            setVisible(distanceFromBottom < 300);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            className={`back-to-top ${visible ? 'is-visible' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </button>
    );
}
