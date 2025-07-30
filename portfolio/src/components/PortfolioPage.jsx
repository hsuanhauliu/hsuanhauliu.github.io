import { useRef } from 'react';

import rugoImg from '../assets/rugo.png';
import securityWebcamImg from '../assets/security_webcam.png';
import Header from './Header';
import { ComputerIcon, RobotIcon, InternIcon, StudentIcon, GithubIcon, LinkedInIcon, EmailIcon } from './Icons';

import '../styles/Page.css';

// This component encapsulates the entire portfolio page.
export default function PortfolioPage() {
    const sectionRefs = [
        { id: "about", name: "About", ref: useRef(null) },
        { id: "experience", name: "Experience", ref: useRef(null) },
        { id: "skills", name: "Skills", ref: useRef(null) },
        { id: "projects", name: "Projects", ref: useRef(null) },
        { id: "contact", name: "Contact", ref: useRef(null) },
    ];

    return (
        <main className="pt-20">
            <Header sectionRefs={sectionRefs} />

            <section ref={sectionRefs[0].ref} id="about" className="min-h-screen flex flex-col justify-center">
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

            <section ref={sectionRefs[1].ref} id="experience">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Experience</h2>
                <div className="space-y-10">
                    {/* Experience Items */}
                    <div className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="flex items-center gap-x-2 text-2xl font-semibold text-blue-400 mb-1">
                            <ComputerIcon /> Software Engineer
                        </h3>
                        <p className="text-gray-400 mb-1">Google | Jun 2022 - Present</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>Contributed to building the next generation of YouTube billing backend system and features.</li>
                            <li>Collaborated with various YouTube product teams to support billing infrastructure features.</li>
                            <li>Built event logging features for user product purchases on various device platforms.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="flex items-center gap-x-2 text-2xl font-semibold text-blue-400 mb-1">
                            <RobotIcon /> Robotics Engineer
                        </h3>
                        <p className="text-gray-400 mb-1">Dexterity Inc. | Feb 2020 – Jun 2022</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>Developed and deployed several key robot system features, including system orchestration and
                                camera calibration.</li>
                            <li>Built and managed critical data & ETL pipelines and infrastructure for production and
                                development systems.</li>
                            <li>Created dozens of developer tools to support research effort and product development.</li>
                            <li>Delivered solutions to gather key business metrics, system performance metrics, and data
                                visualization.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="flex items-center gap-x-2 text-2xl font-semibold text-blue-400 mb-1">
                            <InternIcon />Software Engineering Intern
                        </h3>
                        <p className="text-gray-400 mb-1">Playing Forward LLC | Sep 2019 – Dec 2019</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>Trained custom Deep Learning models and created data pre-processing pipelines.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="flex items-center gap-x-2 text-2xl font-semibold text-blue-400 mb-1">
                            <InternIcon />Machine Learning Research Intern
                        </h3>
                        <p className="text-gray-400 mb-1">UMLx Project | May 2019 – Aug 2019</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>ML model hyper-parameter tuning, data processing and collection, ML model visualization.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="flex items-center gap-x-2 text-2xl font-semibold text-blue-400 mb-1">
                            <InternIcon />Software Developer Intern
                        </h3>
                        <p className="text-gray-400 mb-1">CarmaCam | Aug 2018 – Nov 2018</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>Trained object detection models using custom dataset and designed scoring algorithm.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="flex items-center gap-x-2 text-2xl font-semibold text-blue-400 mb-1">
                            <StudentIcon />M.S. in Computer Science
                        </h3>
                        <p className="text-gray-400 mb-1">University of Southern California | Jan 2018 – Dec 2019</p>
                    </div>
                    <div className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="flex items-center gap-x-2 text-2xl font-semibold text-blue-400 mb-1">
                            <StudentIcon />B.S. in Computer Science
                        </h3>
                        <p className="text-gray-400 mb-1">Auburn University | May 2013 – Dec 2017</p>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <a href="https://drive.google.com/file/d/127lTiCtVaUWMORjv8yNofKC48cBCIJ1G/view" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition duration-300">
                        Full Resume (PDF)
                    </a>
                </div>
            </section>

            <section ref={sectionRefs[2].ref} id="skills">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Technical Skills</h2>
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center sm:text-left">Machine Learning & Computer Vision</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                        {['Python', 'C++', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Jupyter Notebook', 'Deep Learning', 'Supervised Learning', 'ML Infrastructure', 'Model Deployment', 'MLOps'].map(skill => (
                            <span key={skill} className="skill-tag text-gray-300 py-2 px-4 rounded-lg text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center sm:text-left">Data Engineering & Backend</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                        {['Airflow', 'Prometheus', 'Apache Kafka', 'Docker', 'Kubernetes', 'ETL Pipelines'].map(skill => (
                            <span key={skill} className="skill-tag text-gray-300 py-2 px-4 rounded-lg text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center sm:text-left">Databases</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                        {['Redis', 'Elasticsearch', 'Postgres', 'MySQL'].map(skill => (
                            <span key={skill} className="skill-tag text-gray-300 py-2 px-4 rounded-lg text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={sectionRefs[3].ref} id="projects">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Project Items */}
                    <div className="project-card bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700 transition-all duration-300">
                        <img src={rugoImg} alt="RuGo" className="w-full h-48 object-cover" />
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
                    <div className="project-card bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700 transition-all duration-300">
                        <img src={securityWebcamImg} alt="Security Webcam" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Security Webcam</h3>
                            <p className="text-gray-300 mb-3 text-sm">Simple webcam monitoring program using facial recognition and motion detection to auto-record and save footage.</p>
                            <p className="text-xs text-gray-400 mb-4"><strong>Tech:</strong> Python, OpenCV</p>
                            <div className="flex space-x-3">
                                <a href="https://github.com/hsuanhauliu/security-webcam" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium">GitHub</a>
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

            <section ref={sectionRefs[4].ref} id="contact" className="pb-20">
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
