import { useState } from 'react';

import Header from './Header'

import SplitImg from '../assets/split.png';
import SketchPadImg from '../assets/sketchpad.png';
import QrGeneratorImg from '../assets/qr_generator.png';
import SimplePdfEditorImg from '../assets/simple_pdf_editor.png';
import StopWatchTimerImg from '../assets/stopwatch_timer.png';
import ConstellationCreatorImg from '../assets/constellation_creator.png';
import ChessTimerImg from '../assets/chess_timer.png';
import TetrisImg from '../assets/tetris.png';
import ChessboardSimulationImg from '../assets/chessboard_simulation.png';

const portfolioData = [
    {
        section_name: "Utilities",
        cards: [
            { title: "Split", description: "A client-side expense splitting app.", link: "/apps/split.html", image: SplitImg, tags: ['App'] },
            { title: "Sketchpad", description: "A simple app to draw on images.", link: "/apps/sketchpad.html", image: SketchPadImg, tags: ['Tool'] },
            { title: "QR Generator", description: "QR code generator with customizations.", link: "/apps/qr_generator.html", image: QrGeneratorImg, tags: ['Tool'] },
            { title: "Simple PDF Editor", description: "Pure client-side app for PDF editing.", link: "/apps/simple_pdf_editor.html", image: SimplePdfEditorImg, tags: ['Tool'] },
            { title: "Stopwatch & Timer", description: "Stopwatch and timer with audio cues.", link: "/apps/stopwatch_timer.html", image: StopWatchTimerImg, tags: ['Tool'] },
            { title: "Chess Timer", description: "Simple mobile friendly chess timer.", link: "/apps/chess_timer.html", image: ChessTimerImg, tags: ['Tool'] },
        ]
    },
    {
        section_name: "Games",
        cards: [
            { title: "Tetris", description: "Classic tetris game.", link: "/apps/tetris.html", image: TetrisImg, tags: ['Game'] },
            { title: "Chessboard Simulation", description: "A configurable chessboard for analysis.", link: "/apps/chessboard_simulation.html", image: ChessboardSimulationImg, tags: ['Game'] },
            { title: "Constellation Creator", description: "Create star signs from any image.", link: "/apps/constellation_creator.html", image: ConstellationCreatorImg, tags: ['Game'] },
        ]
    }
];

// Filter Controls Component
const FilterControls = ({ tags, activeTag, onFilterChange }) => (
    <div className="flex justify-center flex-wrap gap-2 mb-12">
        <button onClick={() => onFilterChange('All')} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeTag === 'All' ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
            All
        </button>
        {tags.map(tag => (
            <button key={tag} onClick={() => onFilterChange(tag)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeTag === tag ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                {tag}
            </button>
        ))}
    </div>
);


// Project Card Component
const ProjectCard = ({ title, description, link, image, tags }) => (
    <a href={link} className="project-card flex flex-col overflow-hidden bg-slate-800 border border-slate-700 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-400/20 hover:border-sky-400">
        <img src={image} alt={title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x225/1e293b/e0e0e0?text=Image+Error'; }} />
        <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold text-sky-400 mb-2">{title}</h2>
            <p className="text-slate-400 text-sm mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-semibold text-sky-200 bg-sky-800/50 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </a>
);

export default function ProjectPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    // Get all unique tags from the portfolio data
    const allTags = [...new Set(portfolioData.flatMap(section => section.cards.flatMap(card => card.tags)))];

    const handleFilterChange = (tag) => {
        setActiveFilter(tag);
    };

    return (
        <main className="pt-28 lg:pt-32 pb-16">
            <Header sectionRefs={[]} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-10">
                <FilterControls tags={allTags} activeTag={activeFilter} onFilterChange={handleFilterChange} />
            </div>

            {portfolioData.map((section) => {
                const filteredCards = activeFilter === 'All'
                    ? section.cards
                    : section.cards.filter(card => card.tags.includes(activeFilter));

                if (filteredCards.length === 0) {
                    return null; // Don't render the section if no cards match the filter
                }

                return (
                    <div key={section.section_name} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-10">
                        <h2 className="text-3xl font-bold text-center mb-12 text-sky-400">
                            {section.section_name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredCards.map((card) => (
                                <ProjectCard
                                    key={card.title}
                                    title={card.title}
                                    description={card.description}
                                    link={card.link}
                                    image={card.image}
                                    tags={card.tags}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </main>
    );
}