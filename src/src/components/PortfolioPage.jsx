import { useRef } from 'react';

import RugoImg from '../assets/rugo.jpeg';
import StreamFxImg from '../assets/stream_fx.jpeg';
import ObjectDetectionImg from '../assets/object_detection.jpeg';

import Header from './Header';
import ExperienceCard from './cards/ExperienceCard';
import { ComputerIcon, RobotIcon, InternIcon, StudentIcon, GithubIcon, LinkedInIcon, EmailIcon } from './Icons';

import '../styles/Page.css';

// This component encapsulates the entire portfolio page.
export default function PortfolioPage() {
    // Section references.
    const sectionRefs = [
        { id: "about", name: "About", ref: useRef(null) },
        { id: "experience", name: "Experience", ref: useRef(null) },
        { id: "skills", name: "Skills", ref: useRef(null) },
        { id: "projects", name: "Projects", ref: useRef(null) },
        { id: "contact", name: "Contact", ref: useRef(null) },
    ];

    // Data for populating the experience cards.
    const experiences = [
        {
            icon: <ComputerIcon />,
            title: "Software Engineer",
            subtitle: "Google | Jun 2022 - Present",
            body: [
                "Contributed to building the next generation of YouTube billing backend system and features.",
                "Collaborated with various YouTube product teams to support billing infrastructure features.",
                "Built event logging features for user product purchases on various device platforms."
            ]
        },
        {
            icon: <RobotIcon />,
            title: "Robotics Engineer",
            subtitle: "Dexterity Inc. | Feb 2020 – Jun 2022",
            body: [
                "Developed and deployed several key robot system features, including system orchestration and camera calibration.",
                "Built and managed critical data & ETL pipelines and infrastructure for production and development systems.",
                "Created dozens of developer tools to support research effort and product development.",
                "Delivered solutions to gather key business metrics, system performance metrics, and data visualization."
            ]
        },
        {
            icon: <InternIcon />,
            title: "Software Engineering Intern",
            subtitle: "Playing Forward LLC | Sep 2019 – Dec 2019",
            body: [
                "Trained custom Deep Learning models and created data pre-processing pipelines."
            ]
        },
        {
            icon: <InternIcon />,
            title: "Machine Learning Research Intern",
            subtitle: "UMLx Project | May 2019 – Aug 2019",
            body: [
                "ML model hyper-parameter tuning, data processing and collection, ML model visualization."
            ]
        },
        {
            icon: <InternIcon />,
            title: "Software Developer Intern",
            subtitle: "CarmaCam | Aug 2018 – Nov 2018",
            body: [
                "Trained object detection models on custom dataset and designed scoring algorithm for driving violation reports."
            ]
        },
        {
            icon: <StudentIcon />,
            title: "M.S. in Computer Science",
            subtitle: "University of Southern California | Jan 2018 – Dec 2019",
        },
        {
            icon: <StudentIcon />,
            title: "B.S. in Computer Science",
            subtitle: "Auburn University | May 2013 – Dec 2017",
        }
    ];

    // Data for rendering skill sections.
    const skill_sections = [
        { title: "Machine Learning & Computer Vision", skills: ['Python', 'C++', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Jupyter Notebook', 'Deep Learning', 'Supervised Learning', 'ML Infrastructure', 'Model Deployment', 'MLOps'] },
        { title: "Data Engineering & Backend", skills: ['Airflow', 'Prometheus', 'Apache Kafka', 'Docker', 'Kubernetes', 'ETL Pipelines'] },
        { title: "Databases", skills: ['Redis', 'Elasticsearch', 'Postgres', 'MySQL'] },
    ];

    return (
        <main className="pt-20">
            <Header sectionRefs={sectionRefs} />

            <section ref={sectionRefs[0].ref} id={sectionRefs[0].id} className="min-h-screen flex flex-col justify-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center text-white">Hi, I'm Howard Liu</h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                    A Google engineer experienced in machine learning, computer vision, and data engineering.
                </p>
                <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
                    I'm pretty good at problem solving, system design, coding, and shipping features. I love technology and
                    solving interesting challenges & exploring new ideas with it. I'm also into fitness - I climb artificial
                    rocks and lift heavy objects in unnecessarily challenging ways for fun.
                </p>
                <div className="mt-10 text-center">
                    <a href="#experience" className="inline-block bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition duration-300" aria-label="Scroll to next section">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </a>
                </div>
            </section>

            <section ref={sectionRefs[1].ref} id={sectionRefs[1].id}>
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Experience</h2>
                <div className="space-y-10">
                    {
                        experiences.map((exp) => (
                            <ExperienceCard
                                key={exp.title}
                                icon={exp.icon}
                                title={exp.title}
                                sub_title={exp.subtitle}
                                body={exp.body}
                            />))
                    }
                </div>
                <div className="text-center mt-10">
                    <a href="https://drive.google.com/file/d/127lTiCtVaUWMORjv8yNofKC48cBCIJ1G/view" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition duration-300">
                        Full Resume (PDF)
                    </a>
                </div>
            </section>

            <section ref={sectionRefs[2].ref} id={sectionRefs[2].id}>
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Technical Skills</h2>
                {
                    skill_sections.map(skill_section => (
                        <div key={skill_section.title} className="mb-8">
                            <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center sm:text-left">{skill_section.title}</h3>
                            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                                {skill_section.skills.map(skill => (
                                    <span key={skill} className="skill-tag text-gray-300 py-2 px-4 rounded-lg text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>))
                }
            </section>

            <section ref={sectionRefs[3].ref} id={sectionRefs[3].id} className="wide-section">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Project Items */}
                    <div className="project-card bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700 transition-all duration-300">
                        <img src={StreamFxImg} loading="lazy" alt="Security Webcam" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-2">StreamFX</h3>
                            <p className="text-gray-300 mb-3 text-sm">Real-time special video effects for your webcam.</p>
                            <p className="text-xs text-gray-400 mb-4"><strong>Tech:</strong> Python, OpenCV, YOLO11, OBS, HTML</p>
                            <div className="flex space-x-3">
                                <a href="https://github.com/hsuanhauliu/stream-fx" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700 transition-all duration-300">
                        <img src={ObjectDetectionImg} alt="RuGo" loading="lazy" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Vision Toolkit</h3>
                            <p className="text-gray-300 mb-3 text-sm">Collection of vision related web apps and tools.</p>
                            <p className="text-xs text-gray-400 mb-4"><strong>Tech:</strong> Python, Docker, Ultralytics, HTML</p>
                            <div className="flex space-x-3">
                                <a href="https://www.youtube.com/watch?v=0fqfMIYmBng" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium">Video</a>
                                <a href="https://hsuanhauliu.github.io/RuGo/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium">Website</a>
                                <a href="https://github.com/hsuanhauliu/RuGo" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700 transition-all duration-300">
                        <img src={RugoImg} alt="RuGo" loading="lazy" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-2">RuGo</h3>
                            <p className="text-gray-300 mb-3 text-sm">VR Rube Goldberg experiment game.</p>
                            <p className="text-xs text-gray-400 mb-4"><strong>Tech:</strong> Unity, C#, HTC Vive</p>
                            <div className="flex space-x-3">
                                <a href="https://www.youtube.com/watch?v=0fqfMIYmBng" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium">Video</a>
                                <a href="https://hsuanhauliu.github.io/RuGo/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium">Website</a>
                                <a href="https://github.com/hsuanhauliu/RuGo" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-8 mt-10">
                    <div className="flex flex-col items-center group">
                        <a href="https://github.com/hsuanhauliu" className="inline-block bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition duration-300">
                            Github Page
                        </a>
                    </div>
                    <div className="flex flex-col items-center group">
                        <a href="/projects" className="inline-block bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition duration-300">
                            Project Page
                        </a>
                    </div>
                </div>
            </section>

            <section ref={sectionRefs[4].ref} id={sectionRefs[4].id} className="pb-20">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Find me on...</h2>
                <div className="flex justify-center items-center space-x-8">
                    <a href="https://github.com/hsuanhauliu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 flex flex-col items-center group">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/hsuanhauliu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 flex flex-col items-center group">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:hsuanhauliu@gmail.com" className="text-blue-400 hover:text-blue-300 transition duration-300 flex flex-col items-center group">
                        <EmailIcon />
                    </a>
                </div>
            </section>
        </main>
    );
}
