import { useState, useEffect } from 'react';

// Cartoon rocket, pointing up, matching the site's night-sky palette.
const RocketShip = () => (
    <svg className="rocket-svg" width="30" height="30" viewBox="0 0 48 48" fill="none"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* flame */}
        <path className="rocket-flame" d="M24 39c-3.4 0-5.4 2.9-5.4 5.6 1.9 0 3.2 1.6 5.4 1.6s3.5-1.6 5.4-1.6c0-2.7-2-5.6-5.4-5.6z" fill="#ff9f38" />
        <path className="rocket-flame" d="M24 40.5c-1.9 0-3 1.7-3 3.3 1.1 0 1.9 1 3 1s1.9-1 3-1c0-1.6-1.1-3.3-3-3.3z" fill="#ffe07a" />
        {/* fins */}
        <path d="M16 25l-5.5 8.5 5.5-2.2z" fill="#b98bff" />
        <path d="M32 25l5.5 8.5-5.5-2.2z" fill="#b98bff" />
        {/* body */}
        <path d="M24 2.5c5.2 4.2 8.4 10.6 8.4 18.9V32H15.6V21.4C15.6 13.1 18.8 6.7 24 2.5z"
            fill="#eaf6ff" stroke="#b9d8ff" strokeWidth="1.6" strokeLinejoin="round" />
        {/* nose */}
        <path d="M24 2.5c3.1 2.5 5.4 5.9 6.9 9.9H17.1c1.5-4 3.8-7.4 6.9-9.9z" fill="#ff6f9c" />
        {/* window */}
        <circle cx="24" cy="18" r="4" fill="#46e0ff" stroke="#1f7fa6" strokeWidth="1.6" />
    </svg>
);

export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [launching, setLaunching] = useState(false);

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

    const handleClick = () => {
        if (launching) return;
        setLaunching(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Reset once the launch animation finishes so it can fire again next time.
        setTimeout(() => setLaunching(false), 650);
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            className={`back-to-top ${visible ? 'is-visible' : ''} ${launching ? 'is-launching' : ''}`}>
            <RocketShip />
        </button>
    );
}
