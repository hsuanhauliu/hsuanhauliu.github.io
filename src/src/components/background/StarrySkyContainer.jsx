import { useEffect, useRef } from 'react';

import '../../styles/background/StarrySkyContainer.css'

function StarrySkyContainer() {
    const starrySkyRef = useRef(null);

    // --- EFFECT FOR ANIMATED BACKGROUNDS (STARS & CONSTELLATION) ---
    useEffect(() => {
        const starrySkyContainer = starrySkyRef.current;
        if (!starrySkyContainer) return;

        // --- Static Starry Sky Effect ---
        const numRegularStars = 150;
        // Add a fragment to hold stars to avoid multiple reflows
        const starFragment = document.createDocumentFragment();
        for (let i = 0; i < numRegularStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            const size = Math.random() * 2 + 0.5;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.animationDuration = `${Math.random() * 5 + 5}s`;
            starFragment.appendChild(star);
        }
        starrySkyContainer.appendChild(starFragment);

        // --- Shooting Star Effect ---
        const createShootingStar = () => {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';

            // Logic to determine random start/end points and angle
            const angleDeg = Math.random() * 60 + 15;
            let startX, startY, travelDistanceX, travelDistanceY;
            if (Math.random() > 0.5) {
                startX = Math.random() * window.innerWidth;
                startY = -100;
                travelDistanceX = (window.innerHeight + 100) * Math.tan(angleDeg * Math.PI / 180);
                travelDistanceY = window.innerHeight + 200;
                if (Math.random() > 0.5) travelDistanceX *= -1;
            } else {
                startY = Math.random() * window.innerHeight * 0.7;
                if (Math.random() > 0.5) {
                    startX = -100;
                    travelDistanceX = window.innerWidth + 200;
                } else {
                    startX = window.innerWidth + 100;
                    travelDistanceX = -(window.innerWidth + 200);
                }
                travelDistanceY = Math.abs(travelDistanceX) * Math.tan(angleDeg * Math.PI / 180);
            }
            const actualAngleRad = Math.atan2(travelDistanceY, travelDistanceX);
            const actualAngleDeg = (actualAngleRad * 180) / Math.PI - 90;

            // Set CSS custom properties for the animation
            shootingStar.style.setProperty('--start-x', `${startX}px`);
            shootingStar.style.setProperty('--start-y', `${startY}px`);
            shootingStar.style.setProperty('--angle', `${actualAngleDeg}deg`);
            shootingStar.style.setProperty('--travel-distance-y', `${travelDistanceY}px`);
            shootingStar.style.setProperty('--travel-distance-x', `${travelDistanceX}px`);
            const duration = Math.random() * 2 + 1.5;
            shootingStar.style.animationDuration = `${duration}s`;

            starrySkyContainer.appendChild(shootingStar);
            // Clean up the star element after its animation completes
            setTimeout(() => shootingStar.remove(), duration * 1000);
        };
        const shootingStarInterval = setInterval(createShootingStar, 3500);

        // --- Gemini Constellation Effect ---
        const constellationOverlay = starrySkyContainer.querySelector('#gemini-constellation-overlay');

        function createConstellationLine(star1Id, star2Id) {
            const star1 = constellationOverlay.querySelector(`#${star1Id}`);
            const star2 = constellationOverlay.querySelector(`#${star2Id}`);
            if (!star1 || !star2) return;

            const line = document.createElement('div');
            line.className = 'constellation-line';
            const x1 = star1.offsetLeft + star1.offsetWidth / 2;
            const y1 = star1.offsetTop + star1.offsetHeight / 2;
            const x2 = star2.offsetLeft + star2.offsetWidth / 2;
            const y2 = star2.offsetTop + star2.offsetHeight / 2;
            const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

            line.style.width = `${length}px`;
            line.style.left = `${x1}px`;
            line.style.top = `${y1 - 0.5}px`; // Center the 1px line
            line.style.transform = `rotate(${angle}deg)`;
            return line;
        }

        let lines = [];
        function drawConstellationLines() {
            // Clear existing lines before redrawing
            lines.forEach(line => line.remove());
            lines = [];
            const connections = [
                { from: 'gem-pollux', to: 'gem-upsilon' }, { from: 'gem-upsilon', to: 'gem-kappa' },
                { from: 'gem-upsilon', to: 'gem-lota' }, { from: 'gem-upsilon', to: 'gem-wasat' },
                { from: 'gem-wasat', to: 'gem-mekbuda' }, { from: 'gem-mekbuda', to: 'gem-alhena' },
                { from: 'gem-mekbuda', to: 'gem-epsilon' }, { from: 'gem-castor', to: 'gem-tau' },
                { from: 'gem-tau', to: 'gem-theta' }, { from: 'gem-tau', to: 'gem-lota' },
                { from: 'gem-tau', to: 'gem-mebsuta' }, { from: 'gem-mebsuta', to: 'gem-tejat' },
                { from: 'gem-mebsuta', to: 'gem-nu' }, { from: 'gem-tejat', to: 'gem-propus' },
                { from: 'gem-propus', to: 'gem-one' }
            ];
            connections.forEach(conn => {
                const line = createConstellationLine(conn.from, conn.to);
                if (line) {
                    constellationOverlay.appendChild(line);
                    lines.push(line);
                }
            });
        }

        // Use a debounce function to limit how often resize handler is called
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        const debouncedDrawLines = debounce(drawConstellationLines, 100);
        window.addEventListener('resize', debouncedDrawLines);
        drawConstellationLines(); // Initial draw

        // Pulsing effect for constellation lines
        const pulseInterval = setInterval(() => {
            if (lines.length > 0) {
                lines.forEach(line => line.style.opacity = '0.3');
                setTimeout(() => lines.forEach(line => line.style.opacity = '0'), 2500);
            }
        }, 5000);

        // Cleanup function to remove intervals and event listeners on unmount
        return () => {
            clearInterval(pulseInterval);
            clearInterval(shootingStarInterval);
            window.removeEventListener('resize', debouncedDrawLines);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div id="starry-sky-container" ref={starrySkyRef}>
            <div id="gemini-constellation-overlay">
                {/* Stars for the constellation */}
                <div id="gem-pollux" className="constellation-star pollux" style={{ top: '44.4%', left: '19%' }}></div>
                <div id="gem-upsilon" className="constellation-star other" style={{ top: '50%', left: '23.8%' }}></div>
                <div id="gem-kappa" className="constellation-star other" style={{ top: '58.3%', left: '21.4%' }}></div>
                <div id="gem-lota" className="constellation-star other" style={{ top: '45%', left: '30%' }}></div>
                <div id="gem-wasat" className="constellation-star other" style={{ top: '61.1%', left: '38.1%' }}></div>
                <div id="gem-mekbuda" className="constellation-star other" style={{ top: '63.9%', left: '50%' }}></div>
                <div id="gem-alhena" className="constellation-star alhena" style={{ top: '72.2%', left: '70.5%' }}></div>
                <div id="gem-epsilon" className="constellation-star other" style={{ top: '88.9%', left: '66.7%' }}></div>
                <div id="gem-castor" className="constellation-star castor" style={{ top: '33.3%', left: '23.8%' }}></div>
                <div id="gem-tau" className="constellation-star other" style={{ top: '34%', left: '38.1%' }}></div>
                <div id="gem-theta" className="constellation-star other" style={{ top: '20%', left: '46%' }}></div>
                <div id="gem-mebsuta" className="constellation-star other" style={{ top: '44.4%', left: '59.4%' }}></div>
                <div id="gem-tejat" className="constellation-star tejat" style={{ top: '50%', left: '73.8%' }}></div>
                <div id="gem-propus" className="constellation-star other" style={{ top: '49%', left: '78.6%' }}></div>
                <div id="gem-one" className="constellation-star other" style={{ top: '43%', left: '84%' }}></div>
                <div id="gem-nu" className="constellation-star other" style={{ top: '58.3%', left: '71.4%' }}></div>
            </div>
        </div>
    );
}

export default StarrySkyContainer;