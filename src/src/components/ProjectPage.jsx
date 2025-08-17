import { useState, useMemo } from 'react';

import Header from './Header'
import '../styles/Page.css'

import SplitImg from '../assets/split.jpeg';
import SketchPadImg from '../assets/sketchpad.jpeg';
import QrGeneratorImg from '../assets/qr_generator.jpeg';
import SimplePdfEditorImg from '../assets/simple_pdf_editor.jpeg';
import StopWatchTimerImg from '../assets/stopwatch_timer.jpeg';
import ConstellationCreatorImg from '../assets/constellation_creator.jpeg';
import ChessTimerImg from '../assets/chess_timer.jpeg';
import TetrisImg from '../assets/tetris.jpeg';
import ChessboardSimulationImg from '../assets/chessboard_simulation.jpeg';
import SecurityWebcamImg from '../assets/security_webcam.jpeg';
import RandomTextGeneratorImg from '../assets/random_text_generator.jpeg';
import RugoImg from '../assets/rugo.jpeg';
import SudokuSolverImg from '../assets/sudoku_solver.jpeg';
import BlackjackImg from '../assets/blackjack.jpeg';
import SfmImg from '../assets/sfm.jpeg';
import OjectDetectionImg from '../assets/object_detection.jpeg';
import StitchImg from '../assets/stitch.jpeg';
import StreamFxImg from '../assets/stream_fx.jpeg';
import ImageMetadataRemover from '../assets/image_metadata_remover.jpeg'

const portfolioData = [
    {
        section_name: "Featured Projects",
        cards: [
            { title: "Vision Toolkit", description: "Collection of vision related web apps and tools.", link: "https://github.com/hsuanhauliu/vision-toolkit", image: OjectDetectionImg, tags: ['Web', 'CV', 'ML', 'Docker'] },
            { title: "StreamFX", description: "Real-time special video effects for your webcam.", link: "https://github.com/hsuanhauliu/stream-fx", image: StreamFxImg, tags: ['CV', 'ML', 'API', 'Image Processing'] },
            { title: "RuGo", description: "VR Rube Goldberg experiment game.", link: "https://github.com/hsuanhauliu/RuGo", image: RugoImg, tags: ['AR', 'VR', 'Unity'] },
            { title: "Stitch", description: "Web app for stitching images together.", link: "/stitch", image: StitchImg, tags: ['Web', 'Image Processing'] },
            { title: "Split", description: "A pure client-side expense splitting desktop app.", link: "/split", image: SplitImg, tags: ['Web'] },
            { title: "Structure From Motion", description: "Exercise structure from motion pipeline with OpenCV.", link: "https://github.com/hsuanhauliu/structure-from-motion-with-OpenCV", image: SfmImg, tags: ['CV', 'OpenCV'] },
        ]
    },
    {
        section_name: "Apps",
        cards: [
            { title: "Security Webcam", description: "Simple security camera system right on your computer.", link: "https://github.com/hsuanhauliu/security-webcam", image: SecurityWebcamImg, tags: ['CV', 'AI', 'Image Processing'] },
            { title: "Sketchpad", description: "A simple app to draw on images.", link: "/apps/sketchpad.html", image: SketchPadImg, tags: ['Web'] },
            { title: "Image Metadata Remover", description: "View and erase metadata from your images.", link: "/apps/media/image_metadata_remover.html", image: ImageMetadataRemover, tags: ['Web', 'Image Processing'] },
            { title: "QR Generator", description: "QR code generator with customizations.", link: "/apps/media/qr_generator.html", image: QrGeneratorImg, tags: ['Web'] },
            { title: "Simple PDF Editor", description: "Pure client-side app for PDF editing.", link: "/apps/simple_pdf_editor.html", image: SimplePdfEditorImg, tags: ['Web'] },
            { title: "Stopwatch & Timer", description: "Stopwatch and timer with audio cues.", link: "/apps/stopwatch_timer.html", image: StopWatchTimerImg, tags: ['Web'] },
            { title: "Chess Timer", description: "Simple mobile friendly chess timer.", link: "/apps/chess_timer.html", image: ChessTimerImg, tags: ['Web'] },
            { title: "Random Text Generator", description: "Text generator using Hidden Markov Model.", link: "https://github.com/hsuanhauliu/random-text-generator", image: RandomTextGeneratorImg, tags: ['ML', 'CLI'] },
            { title: "Hidden Message Image", description: "Encrypt secret messages in images.", link: "https://github.com/hsuanhauliu/hidden-message-image", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=H', tags: ['Image Processing', 'CLI'] },
            { title: "Machine Improvised Music", description: "Music generation program.", link: "https://github.com/hsuanhauliu/machine-improvised-music", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=M', tags: ['AI', 'CLI'] },
            { title: "Simple File Server", description: "File server to provide read-only access to files.", link: "https://github.com/hsuanhauliu/simple-file-server", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=S', tags: ['Docker', 'CLI'] },
        ]
    },
    {
        section_name: "Games",
        cards: [
            { title: "Blackjack", description: "Single player Blackjack.", link: "/apps/blackjack.html", image: BlackjackImg, tags: ['Web'] },
            { title: "Tetris", description: "Classic tetris game.", link: "/apps/tetris.html", image: TetrisImg, tags: ['Web'] },
            { title: "Chessboard Simulation", description: "A configurable chessboard for analysis.", link: "/apps/chessboard_simulation.html", image: ChessboardSimulationImg, tags: ['Web'] },
            { title: "Constellation Creator", description: "Create star signs from any image.", link: "/apps/constellation_creator.html", image: ConstellationCreatorImg, tags: ['Web'] },
            { title: "Sudoku Solver", description: "Solver for traditional 9x9 Sudoku.", link: "https://github.com/hsuanhauliu/sudoku-solver", image: SudokuSolverImg, tags: ['AI', 'CLI'] },
        ]
    },
    {
        section_name: "Libraries",
        cards: [
            { title: "Fast Serve", description: "One-line code to spin up a HTTP inference server for your ML models.", link: "https://github.com/hsuanhauliu/fast-serve", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=F', tags: ['Package'] },
        ]
    }
];

const FilterControls = ({ tags, tagCounts, totalCount, activeTag, onFilterChange }) => (
    <div className="flex justify-center flex-wrap gap-3 mb-12">
        <button onClick={() => onFilterChange('All')} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 flex items-center ${activeTag === 'All' ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
            All
            <span className="ml-2 bg-slate-500/50 text-slate-200 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{totalCount}</span>
        </button>
        {tags.map(tag => (
            <button key={tag} onClick={() => onFilterChange(tag)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 flex items-center ${activeTag === tag ? 'bg-sky-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                {tag}
                <span className="ml-2 bg-slate-500/50 text-slate-200 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{tagCounts[tag]}</span>
            </button>
        ))}
    </div>
);


// Project Card Component
const ProjectCard = ({ title, description, link, image, tags }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card flex flex-col overflow-hidden bg-slate-800 border border-slate-700 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-400/20 hover:border-sky-400">
        <img src={image} alt={title} loading="lazy" className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x225/1e293b/e0e0e0?text=Image+Error'; }} />
        <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
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

    // useMemo will only re-calculate these values when portfolioData changes.
    const { allTags, tagCounts, totalCards } = useMemo(() => {
        const allCards = portfolioData.flatMap(section => section.cards);
        const counts = {};
        allCards.forEach(card => {
            card.tags.forEach(tag => {
                counts[tag] = (counts[tag] || 0) + 1;
            });
        });

        // Sort tags by count (descending)
        const tags = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

        return {
            allTags: tags,
            tagCounts: counts,
            totalCards: allCards.length
        };
    }, []);

    const handleFilterChange = (tag) => {
        setActiveFilter(tag);
    };

    return (
        <main className="pt-28 lg:pt-32 pb-16">
            <Header sectionRefs={[]} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-10">
                <FilterControls
                    tags={allTags}
                    tagCounts={tagCounts}
                    totalCount={totalCards}
                    activeTag={activeFilter}
                    onFilterChange={handleFilterChange}
                />
            </div>

            {portfolioData.map((section) => {
                const filteredCards = activeFilter === 'All'
                    ? section.cards
                    : section.cards.filter(card => card.tags.includes(activeFilter));

                if (filteredCards.length === 0) {
                    return null; // Don't render the section if no cards match the filter
                }

                return (
                    <div key={section.section_name} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-10">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            {section.section_name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
            <div className="flex justify-center items-center space-x-8 mt-10">
                <div className="flex flex-col items-center group">
                    <a href="https://github.com/hsuanhauliu" className="inline-block bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition duration-300">
                        See More on Github
                    </a>
                </div>
            </div>
        </main>
    );
}