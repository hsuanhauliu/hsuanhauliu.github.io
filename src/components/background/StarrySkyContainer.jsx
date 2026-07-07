import { useEffect, useRef } from 'react';
import '../../styles/background/StarrySkyContainer.css';

const debounce = (fn, wait) => {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

export default function StarrySkyContainer() {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Stars
        const frag = document.createDocumentFragment();
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            const size = Math.random() * 2 + 0.5;
            Object.assign(star, { className: 'star' });
            Object.assign(star.style, {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
            });
            frag.appendChild(star);
        }
        el.appendChild(frag);

        // Shooting stars
        const createShootingStar = () => {
            const s = document.createElement('div');
            s.className = 'shooting-star';
            const angleDeg = Math.random() * 60 + 15;
            let startX, startY, dx, dy;
            if (Math.random() > 0.5) {
                startX = Math.random() * window.innerWidth;
                startY = -100;
                dx = (window.innerHeight + 100) * Math.tan(angleDeg * Math.PI / 180) * (Math.random() > 0.5 ? 1 : -1);
                dy = window.innerHeight + 200;
            } else {
                startY = Math.random() * window.innerHeight * 0.7;
                const fromLeft = Math.random() > 0.5;
                startX = fromLeft ? -100 : window.innerWidth + 100;
                dx = fromLeft ? window.innerWidth + 200 : -(window.innerWidth + 200);
                dy = Math.abs(dx) * Math.tan(angleDeg * Math.PI / 180);
            }
            const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
            const duration = Math.random() * 2 + 1.5;
            s.style.setProperty('--start-x', `${startX}px`);
            s.style.setProperty('--start-y', `${startY}px`);
            s.style.setProperty('--angle', `${angle}deg`);
            s.style.setProperty('--travel-distance-x', `${dx}px`);
            s.style.setProperty('--travel-distance-y', `${dy}px`);
            s.style.animationDuration = `${duration}s`;
            el.appendChild(s);
            setTimeout(() => s.remove(), duration * 1000);
        };
        const shootingStarInterval = setInterval(createShootingStar, 3500);

        // Gemini constellation
        const overlay = el.querySelector('#gemini-constellation-overlay');
        const connections = [
            ['gem-pollux', 'gem-upsilon'], ['gem-upsilon', 'gem-kappa'],
            ['gem-upsilon', 'gem-lota'],   ['gem-upsilon', 'gem-wasat'],
            ['gem-wasat',  'gem-mekbuda'], ['gem-mekbuda', 'gem-alhena'],
            ['gem-mekbuda','gem-epsilon'], ['gem-castor',  'gem-tau'],
            ['gem-tau',    'gem-theta'],   ['gem-tau',     'gem-lota'],
            ['gem-tau',    'gem-mebsuta'], ['gem-mebsuta', 'gem-tejat'],
            ['gem-mebsuta','gem-nu'],      ['gem-tejat',   'gem-propus'],
            ['gem-propus', 'gem-one'],
        ];

        const makeLine = (id1, id2) => {
            const s1 = overlay.querySelector(`#${id1}`);
            const s2 = overlay.querySelector(`#${id2}`);
            if (!s1 || !s2) return null;
            const x1 = s1.offsetLeft + s1.offsetWidth / 2;
            const y1 = s1.offsetTop + s1.offsetHeight / 2;
            const x2 = s2.offsetLeft + s2.offsetWidth / 2;
            const y2 = s2.offsetTop + s2.offsetHeight / 2;
            const line = document.createElement('div');
            line.className = 'constellation-line';
            Object.assign(line.style, {
                width: `${Math.hypot(x2 - x1, y2 - y1)}px`,
                left: `${x1}px`,
                top: `${y1 - 0.5}px`,
                transform: `rotate(${Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI)}deg)`,
            });
            return line;
        };

        let lines = [];
        const drawLines = () => {
            lines.forEach(l => l.remove());
            lines = connections.map(([a, b]) => makeLine(a, b)).filter(Boolean);
            lines.forEach(l => overlay.appendChild(l));
        };

        const debouncedDraw = debounce(drawLines, 100);
        window.addEventListener('resize', debouncedDraw);
        drawLines();

        const pulseInterval = setInterval(() => {
            lines.forEach(l => (l.style.opacity = '0.3'));
            setTimeout(() => lines.forEach(l => (l.style.opacity = '0')), 2500);
        }, 5000);

        return () => {
            clearInterval(shootingStarInterval);
            clearInterval(pulseInterval);
            window.removeEventListener('resize', debouncedDraw);
        };
    }, []);

    const stars = [
        { id: 'gem-pollux',  cls: 'pollux', top: '44.4%', left: '19%'   },
        { id: 'gem-upsilon', cls: 'other',  top: '50%',   left: '23.8%' },
        { id: 'gem-kappa',   cls: 'other',  top: '58.3%', left: '21.4%' },
        { id: 'gem-lota',    cls: 'other',  top: '45%',   left: '30%'   },
        { id: 'gem-wasat',   cls: 'other',  top: '61.1%', left: '38.1%' },
        { id: 'gem-mekbuda', cls: 'other',  top: '63.9%', left: '50%'   },
        { id: 'gem-alhena',  cls: 'alhena', top: '72.2%', left: '70.5%' },
        { id: 'gem-epsilon', cls: 'other',  top: '88.9%', left: '66.7%' },
        { id: 'gem-castor',  cls: 'castor', top: '33.3%', left: '23.8%' },
        { id: 'gem-tau',     cls: 'other',  top: '34%',   left: '38.1%' },
        { id: 'gem-theta',   cls: 'other',  top: '20%',   left: '46%'   },
        { id: 'gem-mebsuta', cls: 'other',  top: '44.4%', left: '59.4%' },
        { id: 'gem-tejat',   cls: 'tejat',  top: '50%',   left: '73.8%' },
        { id: 'gem-propus',  cls: 'other',  top: '49%',   left: '78.6%' },
        { id: 'gem-one',     cls: 'other',  top: '43%',   left: '84%'   },
        { id: 'gem-nu',      cls: 'other',  top: '58.3%', left: '71.4%' },
    ];

    return (
        <div id="starry-sky-container" ref={containerRef}>
            <div className="nebula nebula-1" />
            <div className="nebula nebula-2" />
            <div className="nebula nebula-3" />
            <div className="cartoon-moon">
                <span className="crater c1" />
                <span className="crater c2" />
                <span className="crater c3" />
            </div>
            <div id="gemini-constellation-overlay">
                {stars.map(({ id, cls, top, left }) => (
                    <div key={id} id={id} className={`constellation-star ${cls}`} style={{ top, left }} />
                ))}
            </div>
        </div>
    );
}
