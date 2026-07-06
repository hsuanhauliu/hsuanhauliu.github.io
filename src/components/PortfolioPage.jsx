import { useRef } from 'react';
import { Link } from 'react-router-dom';

import RugoImg from '../assets/rugo.jpeg';
import StreamFxImg from '../assets/stream_fx.jpeg';
import VividImg from '../assets/vivid.jpg';

import Header from './Header';
import ExperienceCard from './cards/ExperienceCard';
import { ComputerIcon, RobotIcon, InternIcon, StudentIcon, GithubIcon, LinkedInIcon, EmailIcon } from './Icons';

// Reusable section heading with underline accent
function SectionTitle({ children }) {
    return (
        <h2 className="text-4xl font-bold mb-12 text-center text-white tracking-tight">
            <span className="section-title">{children}</span>
        </h2>
    );
}

// Featured project card — consistent with ProjectPage style
function FeaturedCard({ image, title, description, tech, links }) {
    return (
        <div className="project-card flex flex-col bg-slate-800/60 rounded-xl overflow-hidden border border-slate-700/80 shadow-lg">
            <img src={image} loading="lazy" alt={title} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-sky-300 mb-1 tracking-tight">{title}</h3>
                <p className="text-slate-400 text-sm mb-3 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {tech.map(t => (
                        <span key={t} className="px-2 py-0.5 text-xs font-medium text-sky-200 bg-sky-900/40 border border-sky-800/50 rounded-full">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    {links.map(({ label, href }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                            className="text-sm font-medium text-sky-400 hover:text-sky-200 transition-colors duration-200">
                            {label} →
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function PortfolioPage() {
    const sectionRefs = [
        { id: "about",      name: "About",      ref: useRef(null) },
        { id: "experience", name: "Experience", ref: useRef(null) },
        { id: "skills",     name: "Skills",     ref: useRef(null) },
        { id: "projects",   name: "Projects",   ref: useRef(null) },
        { id: "contact",    name: "Contact",    ref: useRef(null) },
    ];

    const experiences = [
        {
            icon: <ComputerIcon />,
            title: "Software Engineer",
            subtitle: "Google · Jun 2022 – Present",
            body: [
                "Building Computer Vision models and ML infrastructure on the Geo Machine Intelligence team.",
                "Spent 3 years on the YouTube Billing team working on backend infrastructure, shopping journey logging, and more.",
            ]
        },
        {
            icon: <RobotIcon />,
            title: "Robotics Engineer",
            subtitle: "Dexterity Inc. · Feb 2020 – Jun 2022",
            body: [
                "Developed and deployed key robot system features: camera rig calibration, data logging infrastructure, service orchestration, and more.",
                "Trained and deployed instance segmentation models; built annotation tools and a model-serving framework.",
                "Designed data & ETL pipelines and infrastructure for production and development systems.",
                "Created dashboards for business metrics, system performance, and data visualization.",
            ]
        },
        {
            icon: <InternIcon />,
            title: "Software Engineering Intern",
            subtitle: "Playing Forward LLC · Sep 2019 – Dec 2019",
            body: ["Trained custom deep learning models and built data pre-processing pipelines."]
        },
        {
            icon: <InternIcon />,
            title: "Machine Learning Research Intern",
            subtitle: "UMLx Project · May 2019 – Aug 2019",
            body: ["Worked on hyperparameter tuning, data collection and processing, and ML model visualization."]
        },
        {
            icon: <InternIcon />,
            title: "Software Developer Intern",
            subtitle: "CarmaCam · Aug 2018 – Nov 2018",
            body: ["Trained object detection models on a custom dataset; designed a scoring algorithm for driving violations."]
        },
        {
            icon: <StudentIcon />,
            title: "M.S. in Computer Science",
            subtitle: "University of Southern California · Jan 2018 – Dec 2019",
        },
        {
            icon: <StudentIcon />,
            title: "B.S. in Computer Science",
            subtitle: "Auburn University · May 2013 – Dec 2017",
        },
    ];

    const skillSections = [
        {
            title: "Machine Learning & Computer Vision",
            skills: ['Python', 'C++', 'TensorFlow', 'PyTorch', 'JAX', 'Keras', 'OpenCV', 'Jupyter Notebook',
                     'Deep Learning', 'Supervised Learning', 'ML Infrastructure', 'Model Deployment', 'MLOps'],
        },
        {
            title: "Data Engineering & Backend",
            skills: ['Airflow', 'Prometheus', 'Apache Kafka', 'Docker', 'Kubernetes', 'ETL Pipelines'],
        },
        {
            title: "Databases",
            skills: ['Redis', 'Elasticsearch', 'Postgres', 'MySQL'],
        },
    ];

    const featuredProjects = [
        {
            image: StreamFxImg,
            title: "StreamFX",
            description: "Real-time special video effects for your webcam.",
            tech: ['Python', 'OpenCV', 'YOLO11', 'OBS'],
            links: [{ label: "GitHub", href: "https://github.com/hsuanhauliu/stream-fx" }],
        },
        {
            image: VividImg,
            title: "Vivid",
            description: "Local media management desktop app for your Mac.",
            tech: ['React', 'Rust', 'Tauri'],
            links: [
                { label: "Website", href: "https://hsuanhauliu.github.io/vivid/" },
                { label: "GitHub", href: "https://github.com/hsuanhauliu/vivid" },
            ],
        },
        {
            image: RugoImg,
            title: "RuGo",
            description: "VR Rube Goldberg experiment game.",
            tech: ['Unity', 'C#', 'HTC Vive'],
            links: [
                { label: "Video",   href: "https://www.youtube.com/watch?v=0fqfMIYmBng" },
                { label: "Website", href: "https://hsuanhauliu.github.io/RuGo/" },
                { label: "GitHub",  href: "https://github.com/hsuanhauliu/RuGo" },
            ],
        },
    ];

    const contactLinks = [
        { href: "https://github.com/hsuanhauliu",         icon: <GithubIcon />,   label: "GitHub"   },
        { href: "https://www.linkedin.com/in/hsuanhauliu", icon: <LinkedInIcon />, label: "LinkedIn" },
        { href: "mailto:hsuanhauliu@gmail.com",            icon: <EmailIcon />,    label: "Email"    },
    ];

    return (
        <main className="pt-20">
            <Header sectionRefs={sectionRefs} />

            {/* ── About ───────────────────────────────────────────── */}
            <section ref={sectionRefs[0].ref} id={sectionRefs[0].id}
                className="min-h-screen flex flex-col justify-center">
                <p className="text-sky-400 text-center text-sm font-semibold tracking-widest uppercase mb-4">
                    Software Engineer
                </p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight">
                    <span className="text-white">Hi, I'm </span>
                    <span className="bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
                        Howard Liu
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-6 text-center max-w-2xl mx-auto leading-relaxed">
                    A software engineer at Google with experience in Computer Vision, Machine Learning, and Data Engineering.
                </p>
                <p className="text-base text-slate-400 text-center max-w-xl mx-auto leading-relaxed">
                    I enjoy solving interesting technical challenges and exploring new ideas. Outside of work, I climb
                    artificial rocks and lift heavy objects in unnecessarily complicated ways.
                </p>
                <div className="mt-12 text-center">
                    <a href="#experience" aria-label="Scroll to Experience"
                        onClick={e => { e.preventDefault(); sectionRefs[1].ref.current?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sky-400/40 text-sky-400 hover:border-sky-400 hover:bg-sky-400/10 transition-all duration-200 bounce-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* ── Experience ──────────────────────────────────────── */}
            <section ref={sectionRefs[1].ref} id={sectionRefs[1].id}>
                <SectionTitle>Experience</SectionTitle>
                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <ExperienceCard
                            key={exp.title}
                            icon={exp.icon}
                            title={exp.title}
                            sub_title={exp.subtitle}
                            body={exp.body}
                        />
                    ))}
                </div>
                <div className="text-center mt-10">
                    <a href="https://drive.google.com/file/d/127lTiCtVaUWMORjv8yNofKC48cBCIJ1G/view"
                        target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        Full Resume (PDF)
                    </a>
                </div>
            </section>

            {/* ── Skills ──────────────────────────────────────────── */}
            <section ref={sectionRefs[2].ref} id={sectionRefs[2].id}>
                <SectionTitle>Technical Skills</SectionTitle>
                {skillSections.map(({ title, skills }) => (
                    <div key={title} className="mb-8">
                        <h3 className="text-base font-semibold text-sky-400 uppercase tracking-wider mb-4
                                       text-center sm:text-left">
                            {title}
                        </h3>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                            {skills.map(skill => (
                                <span key={skill} className="skill-tag py-1.5 px-4">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* ── Projects ────────────────────────────────────────── */}
            <section ref={sectionRefs[3].ref} id={sectionRefs[3].id} className="wide-section">
                <SectionTitle>Featured Projects</SectionTitle>
                <div className="grid md:grid-cols-3 gap-6">
                    {featuredProjects.map(p => <FeaturedCard key={p.title} {...p} />)}
                </div>
                <div className="flex justify-center gap-4 mt-10">
                    <a href="https://github.com/hsuanhauliu" target="_blank" rel="noopener noreferrer"
                        className="btn-ghost">
                        GitHub Profile
                    </a>
                    <Link to="/projects" className="btn-ghost">
                        All Projects
                    </Link>
                </div>
            </section>

            {/* ── Contact ─────────────────────────────────────────── */}
            <section ref={sectionRefs[4].ref} id={sectionRefs[4].id} className="pb-24">
                <SectionTitle>Get in Touch</SectionTitle>
                <div className="flex justify-center items-center gap-10">
                    {contactLinks.map(({ href, icon, label }) => (
                        <a key={label} href={href}
                            target={href.startsWith('mailto') ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-sky-400 hover:text-sky-200
                                       transition-all duration-200 hover:scale-110 group">
                            <span className="group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-200">
                                {icon}
                            </span>
                            <span className="text-xs font-medium tracking-wide text-slate-400 group-hover:text-sky-300
                                             transition-colors duration-200">
                                {label}
                            </span>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
