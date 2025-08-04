import { useState, useMemo } from 'react';

import Header from './Header'
import '../styles/Page.css'

import SplitImg from '../assets/split.png';
import SketchPadImg from '../assets/sketchpad.png';
import QrGeneratorImg from '../assets/qr_generator.png';
import SimplePdfEditorImg from '../assets/simple_pdf_editor.png';
import StopWatchTimerImg from '../assets/stopwatch_timer.png';
import ConstellationCreatorImg from '../assets/constellation_creator.png';
import ChessTimerImg from '../assets/chess_timer.png';
import TetrisImg from '../assets/tetris.png';
import ChessboardSimulationImg from '../assets/chessboard_simulation.png';
import SecurityWebcamImg from '../assets/security_webcam.png';
import RandomTextGeneratorImg from '../assets/random_text_generator.jpg';
import RugoImg from '../assets/rugo.png';
import SudokuSolverImg from '../assets/sudoku_solver.jpg';
import BlackjackImg from '../assets/blackjack.png';
import SfmImg from '../assets/sfm.png';
import OjectDetectionImg from '../assets/object_detection.png';

const portfolioData = [
    {
        section_name: "Featured Projects",
        cards: [
            { title: "Structure From Motion", description: "Exercise structure from motion pipeline with OpenCV.", link: "https://github.com/hsuanhauliu/structure-from-motion-with-OpenCV", image: SfmImg, tags: ['CV', 'OpenCV'] },
            { title: "Vision Toolkit", description: "Collection of vision related web apps and tools.", link: "https://github.com/hsuanhauliu/vision-toolkit", image: OjectDetectionImg, tags: ['Frontend', 'CV', 'ML'] },
            { title: "RuGo", description: "VR Rube Goldberg experiment game.", link: "https://github.com/hsuanhauliu/RuGo", image: RugoImg, tags: ['AR', 'VR', 'Unity'] },
            { title: "Split", description: "A pure client-side expense splitting desktop app.", link: "/split", image: SplitImg, tags: ['Frontend'] },
        ]
    },
    {
        section_name: "Apps",
        cards: [
            { title: "Security Webcam", description: "Simple security camera system right on your computer.", link: "https://github.com/hsuanhauliu/security-webcam", image: SecurityWebcamImg, tags: ['CV', 'Python'] },
            { title: "Sketchpad", description: "A simple app to draw on images.", link: "/apps/sketchpad.html", image: SketchPadImg, tags: ['Frontend'] },
            { title: "QR Generator", description: "QR code generator with customizations.", link: "/apps/qr_generator.html", image: QrGeneratorImg, tags: ['Frontend'] },
            { title: "Simple PDF Editor", description: "Pure client-side app for PDF editing.", link: "/apps/simple_pdf_editor.html", image: SimplePdfEditorImg, tags: ['Frontend'] },
            { title: "Stopwatch & Timer", description: "Stopwatch and timer with audio cues.", link: "/apps/stopwatch_timer.html", image: StopWatchTimerImg, tags: ['Frontend'] },
            { title: "Chess Timer", description: "Simple mobile friendly chess timer.", link: "/apps/chess_timer.html", image: ChessTimerImg, tags: ['Frontend'] },
            { title: "Random Text Generator", description: "Text generator using Hidden Markov Model.", link: "https://github.com/hsuanhauliu/random-text-generator", image: RandomTextGeneratorImg, tags: ['ML', 'CLI'] },
            { title: "Hidden Message Image", description: "Encrypt secret messages in images.", link: "https://github.com/hsuanhauliu/hidden-message-image", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=H', tags: ['Image Processing', 'CLI'] },
            { title: "Machine Improvised Music", description: "Music generation program.", link: "https://github.com/hsuanhauliu/machine-improvised-music", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=M', tags: ['AI', 'Python', 'CLI'] },
            { title: "Simple File Server", description: "File server to provide read-only access to files.", link: "https://github.com/hsuanhauliu/simple-file-server", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=S', tags: ['Python', 'Docker', 'CLI'] },
        ]
    },
    {
        section_name: "Games",
        cards: [
            { title: "Blackjack", description: "Single player Blackjack.", link: "/apps/blackjack.html", image: BlackjackImg, tags: ['Frontend'] },
            { title: "Tetris", description: "Classic tetris game.", link: "/apps/tetris.html", image: TetrisImg, tags: ['Frontend'] },
            { title: "Chessboard Simulation", description: "A configurable chessboard for analysis.", link: "/apps/chessboard_simulation.html", image: ChessboardSimulationImg, tags: ['Frontend'] },
            { title: "Constellation Creator", description: "Create star signs from any image.", link: "/apps/constellation_creator.html", image: ConstellationCreatorImg, tags: ['Frontend'] },
            { title: "Sudoku Solver", description: "Solver for traditional 9x9 Sudoku.", link: "https://github.com/hsuanhauliu/sudoku-solver", image: SudokuSolverImg, tags: ['AI', 'Python', 'CLI'] },
        ]
    },
    {
        section_name: "Tutorials",
        cards: [
            { title: "FCN Semantic Segmentation", description: "Custom trained FCN for semantic segmentation.", link: "https://github.com/hsuanhauliu/FCN-semantic-segmentation", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=F', tags: ['CV', 'ML', 'Tensorflow', 'Jupyter Notebook'] },
            { title: "LeNet-5", description: "Image classification with LeNet-5.", link: "https://github.com/hsuanhauliu/LeNet5-TensorFlow", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=L', tags: ['CV', 'ML', 'Tensorflow'] },
            { title: "Facial Alignment", description: "Facial alignment exercise in Jupyter notebook.", link: "https://github.com/hsuanhauliu/facial-alignment-exercise", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=F', tags: ['CV', 'OpenCV', 'Jupyter Notebook'] },
            { title: "Weather Prediction", description: "Weather prediction with Viterbi algorithm.", link: "/weather-prediction", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=W', tags: ['ML', 'Frontend'] },
            { title: "Live Filter", description: "A tool that allows you to experiment with your custom image filters.", link: "https://github.com/hsuanhauliu/live-filter", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=L', tags: ['Image Processing'] },
            { title: "Yelp Recommendation System #1", description: "Yelp recommendation system using collaborative filtering method.", link: "https://github.com/hsuanhauliu/yelp-recommendation-system", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=Y', tags: ['ML', 'Spark'] },
            { title: "Yelp Recommendation System #2", description: "Yelp recommendation system using Girvan-Newman algorithm.", link: "https://github.com/hsuanhauliu/girvan-newman-community-detection", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=Y', tags: ['ML', 'Spark'] },
        ]
    },
    {
        section_name: "Libraries",
        cards: [
            { title: "Fast Serve", description: "One-line code to spin up a HTTP inference server for your ML models.", link: "https://github.com/hsuanhauliu/fast-serve", image: 'https://placehold.co/400x225/1e293b/64b5f6?text=F', tags: ['Python'] },
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
                        <h2 className="text-3xl font-bold text-center mb-12 text-sky-400">
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
        </main>
    );
}