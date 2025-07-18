import { useRef } from 'react';

import rugoImg from '../assets/rugo.png';
import securityWebcamImg from '../assets/security_webcam.png';
import Header from './Header'

import '../styles/background/StarrySkyContainer.css'
import '../styles/PortfolioPage.css'

// This component encapsulates the entire portfolio page.
export default function PortfolioPage({ projectPageTrigger }) {
    const sectionRefs = [
        { id: "#about", name: "About", ref: useRef(null) },
        { id: "#experience", name: "Experience", ref: useRef(null) },
        { id: "#skills", name: "Skills", ref: useRef(null) },
        { id: "#projects", name: "Projects", ref: useRef(null) },
        { id: "#contact", name: "Contact", ref: useRef(null) },
    ];

    return (
        <main className="pt-20">
            <Header sectionRefs={sectionRefs} />

            <section ref={sectionRefs.about} id="about" className="min-h-screen flex flex-col justify-center">
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

            <section ref={sectionRefs.experience} id="experience">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Experience</h2>
                <div className="space-y-10">
                    {/* Experience Items */}
                    <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-1">Software Engineer</h3>
                        <p className="text-gray-400 mb-1">Google | Jun 2022 - Present</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>Contributed to building the next generation of YouTube billing backend system and features.</li>
                            <li>Collaborated with various YouTube product teams to support billing infrastructure features.</li>
                            <li>Built event logging features for various product purchases on various device platforms.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-1">Robotics Engineer</h3>
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
                    <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-1">Software Engineering Intern</h3>
                        <p className="text-gray-400 mb-1">Playing Forward LLC | Sep 2019 – Dec 2019</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>Trained custom Deep Learning models and created data pre-processing pipelines.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-1">Machine Learning Research Intern</h3>
                        <p className="text-gray-400 mb-1">UMLx Project | May 2019 – Aug 2019</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>ML model hyper-parameter tuning, data processing and collection, ML model visualization.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-1">Software Developer Intern</h3>
                        <p className="text-gray-400 mb-1">CarmaCam | Aug 2018 – Nov 2018</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                            <li>Trained object detection models using custom dataset and designed scoring algorithm.</li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-1">M.S. in Computer Science</h3>
                        <p className="text-gray-400 mb-1">University of Southern California | Jan 2018 – Dec 2019</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-1">B.S. in Computer Science</h3>
                        <p className="text-gray-400 mb-1">Auburn University | May 2013 – Dec 2017</p>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <a href="https://drive.google.com/file/d/127lTiCtVaUWMORjv8yNofKC48cBCIJ1G/view" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition duration-300">
                        Full Resume (PDF)
                    </a>
                </div>
            </section>

            <section ref={sectionRefs.skills} id="skills">
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

            <section ref={sectionRefs.projects} id="projects">
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
                        <button onClick={projectPageTrigger} className="inline-block bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition duration-300">
                            Project Page
                        </button>
                    </div>
                </div>
            </section>

            <section ref={sectionRefs.contact} id="contact" className="pb-20">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">You can find me on...</h2>
                <div className="flex justify-center items-center space-x-8">
                    <a href="https://github.com/hsuanhauliu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 flex flex-col items-center group">
                        <svg className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/hsuanhauliu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 flex flex-col items-center group">
                        <svg className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span className="text-sm">LinkedIn</span>
                    </a>
                    <a href="mailto:hsuanhauliu@gmail.com" className="text-blue-400 hover:text-blue-300 transition duration-300 flex flex-col items-center group">
                        <svg className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="text-sm">Email</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
