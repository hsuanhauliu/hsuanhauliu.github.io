import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import SplitImg from '../assets/split.jpeg';
import QrGeneratorImg from '../assets/qr_generator.jpeg';
import SimplePdfEditorImg from '../assets/simple_pdf_editor.jpeg';
import ConstellationCreatorImg from '../assets/constellation_creator.jpeg';
import TetrisImg from '../assets/tetris.jpeg';
import ChessboardSimulationImg from '../assets/chessboard_simulation.jpeg';
import SecurityWebcamImg from '../assets/security_webcam.jpeg';
import RugoImg from '../assets/rugo.jpeg';
import SudokuSolverImg from '../assets/sudoku_solver.jpeg';
import BlackjackImg from '../assets/blackjack.jpeg';
import SfmImg from '../assets/sfm.jpeg';
import OjectDetectionImg from '../assets/object_detection.jpeg';
import StitchImg from '../assets/stitch.jpeg';
import StreamFxImg from '../assets/stream_fx.jpeg';
import ImageMetadataRemover from '../assets/image_metadata_remover.jpeg';
import NotebookEditorImg from '../assets/notebook_editor.jpeg';
import VividImg from '../assets/vivid.jpg';

const portfolioData = [
    {
        section_name: "Featured Projects",
        cards: [
            { title: "Vivid",                 description: "Local media management desktop app for your Mac.",           link: "https://github.com/hsuanhauliu/vivid",                              image: VividImg,              tags: ['Desktop', 'AI'] },
            { title: "Vision Toolkit",        description: "Collection of vision related web apps and tools.",           link: "https://github.com/hsuanhauliu/vision-toolkit",                     image: OjectDetectionImg,     tags: ['Web', 'CV', 'ML', 'Docker'] },
            { title: "StreamFX",              description: "Real-time special video effects for your webcam.",           link: "https://github.com/hsuanhauliu/stream-fx",                          image: StreamFxImg,           tags: ['CV', 'ML', 'API', 'Image Processing'] },
            { title: "Notebook Editor",       description: "Simple editor for Jupyter Notebook.",                        link: "/apps/edit/notebook_editor",                                        image: NotebookEditorImg,     tags: ['ML', 'Web'] },
            { title: "RuGo",                  description: "VR Rube Goldberg experiment game.",                          link: "https://github.com/hsuanhauliu/RuGo",                               image: RugoImg,               tags: ['AR', 'VR', 'Unity'] },
            { title: "Stitch",                description: "Web app for stitching images together.",                     link: "/stitch",                                                            image: StitchImg,             tags: ['Web', 'Image Processing'] },
            { title: "Split",                 description: "A pure client-side expense splitting desktop app.",          link: "/split",                                                             image: SplitImg,              tags: ['Web'] },
            { title: "Structure From Motion", description: "Structure from motion pipeline exercise with OpenCV.",       link: "https://github.com/hsuanhauliu/structure-from-motion-with-OpenCV",  image: SfmImg,                tags: ['CV', 'OpenCV'] },
        ]
    },
    {
        section_name: "Apps",
        cards: [
            { title: "Security Webcam",         description: "Simple security camera system right on your computer.",   link: "https://github.com/hsuanhauliu/security-webcam",           image: SecurityWebcamImg,   tags: ['CV', 'AI', 'Image Processing'] },
            { title: "Image Metadata Remover",  description: "View and erase metadata from your images.",              link: "/apps/media/image_metadata_remover.html",                  image: ImageMetadataRemover, tags: ['Web', 'Image Processing'] },
            { title: "QR Generator",            description: "QR code generator with customizations.",                 link: "/apps/media/qr_generator.html",                            image: QrGeneratorImg,      tags: ['Web'] },
            { title: "Simple PDF Editor",       description: "Pure client-side app for PDF editing.",                  link: "/apps/edit/simple_pdf_editor.html",                        image: SimplePdfEditorImg,  tags: ['Web'] },
            { title: "Machine Improvised Music",description: "Music generation program.",                              link: "https://github.com/hsuanhauliu/machine-improvised-music",  image: 'https://placehold.co/400x225/0f172a/38bdf8?text=♪', tags: ['AI', 'CLI'] },
            { title: "Simple File Server",      description: "File server with read-only access to files.",            link: "https://github.com/hsuanhauliu/simple-file-server",        image: 'https://placehold.co/400x225/0f172a/38bdf8?text=⬡', tags: ['Docker', 'CLI'] },
        ]
    },
    {
        section_name: "Games",
        cards: [
            { title: "Blackjack",              description: "Single player Blackjack.",                              link: "/apps/games/blackjack.html",            image: BlackjackImg,            tags: ['Web'] },
            { title: "Tetris",                 description: "Classic Tetris game.",                                  link: "/apps/games/tetris.html",               image: TetrisImg,               tags: ['Web'] },
            { title: "Chessboard Simulation",  description: "A configurable chessboard for analysis.",              link: "/apps/games/chessboard_simulation.html", image: ChessboardSimulationImg, tags: ['Web'] },
            { title: "Constellation Creator",  description: "Create star signs from any image.",                    link: "/apps/art/constellation_creator.html",  image: ConstellationCreatorImg, tags: ['Web'] },
            { title: "Sudoku Solver",          description: "Solver for traditional 9×9 Sudoku.",                   link: "https://github.com/hsuanhauliu/sudoku-solver", image: SudokuSolverImg,  tags: ['AI', 'CLI'] },
        ]
    },
    {
        section_name: "Libraries",
        cards: [
            { title: "Fast Serve", description: "One-line HTTP inference server for ML models.", link: "https://github.com/hsuanhauliu/fast-serve", image: 'https://placehold.co/400x225/0f172a/38bdf8?text=⚡', tags: ['Package'] },
        ]
    }
];

const FilterControls = ({ tags, tagCounts, totalCount, activeTag, onFilterChange }) => (
    <div className="flex justify-center flex-wrap gap-2 mb-12">
        <button
            onClick={() => onFilterChange('All')}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2
                ${activeTag === 'All'
                    ? 'bg-sky-500 text-white shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-sky-600 hover:text-sky-300'}`}>
            All
            <span className="text-xs font-bold bg-white/10 rounded-full h-5 w-5 flex items-center justify-center">
                {totalCount}
            </span>
        </button>
        {tags.map(tag => (
            <button
                key={tag}
                onClick={() => onFilterChange(tag)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2
                    ${activeTag === tag
                        ? 'bg-sky-500 text-white shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                        : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-sky-600 hover:text-sky-300'}`}>
                {tag}
                <span className="text-xs font-bold bg-white/10 rounded-full h-5 w-5 flex items-center justify-center">
                    {tagCounts[tag]}
                </span>
            </button>
        ))}
    </div>
);

const ProjectCard = ({ title, description, link, image, tags }) => (
    <a href={link} target="_blank" rel="noopener noreferrer"
        className="project-card flex flex-col overflow-hidden bg-slate-800/60 border border-slate-700/80
                   rounded-xl shadow-md">
        <img
            src={image} alt={title} loading="lazy"
            className="w-full h-44 object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x225/0f172a/38bdf8?text=—'; }}
        />
        <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-base font-semibold text-white tracking-tight mb-1">{title}</h2>
            <p className="text-slate-400 text-sm mb-3 flex-grow leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-1.5">
                {tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-medium text-sky-200 bg-sky-900/40 border border-sky-800/50 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </a>
);

export default function ProjectPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const { allTags, tagCounts, totalCards } = useMemo(() => {
        const allCards = portfolioData.flatMap(section => section.cards);
        const counts = {};
        allCards.forEach(card => {
            card.tags.forEach(tag => { counts[tag] = (counts[tag] || 0) + 1; });
        });
        const tags = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
        return { allTags: tags, tagCounts: counts, totalCards: allCards.length };
    }, []);

    return (
        <main className="pt-28 lg:pt-32 pb-20">
            <Header sectionRefs={[]} />

            {/* Page heading */}
            <div className="text-center mb-10 px-4">
                <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-2">Portfolio</p>
                <h1 className="text-4xl font-bold text-white tracking-tight">All Projects</h1>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <FilterControls
                    tags={allTags}
                    tagCounts={tagCounts}
                    totalCount={totalCards}
                    activeTag={activeFilter}
                    onFilterChange={setActiveFilter}
                />
            </div>

            {portfolioData.map((section) => {
                const filteredCards = activeFilter === 'All'
                    ? section.cards
                    : section.cards.filter(card => card.tags.includes(activeFilter));

                if (filteredCards.length === 0) return null;

                return (
                    <div key={section.section_name}
                        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
                        <h2 className="text-xl font-semibold text-slate-400 uppercase tracking-widest
                                       text-center mb-8">
                            {section.section_name}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {filteredCards.map((card) => (
                                <ProjectCard key={card.title} {...card} />
                            ))}
                        </div>
                    </div>
                );
            })}

            <div className="flex justify-center gap-4 mt-8">
                <Link to="/" className="btn-ghost">← Back to Home</Link>
                <a href="https://github.com/hsuanhauliu" target="_blank" rel="noopener noreferrer"
                    className="btn-ghost">
                    More on GitHub
                </a>
            </div>
        </main>
    );
}
