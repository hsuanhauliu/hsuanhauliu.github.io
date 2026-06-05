// Experience cards on the Portfolio page.

export default function ExperienceCard({ icon, title, sub_title, body }) {
    return (
        <div className="relative pl-5 border-l-2 border-sky-900 hover:border-sky-500/60
                        transition-colors duration-300 group">
            {/* Left accent dot */}
            <div className="absolute -left-[7px] top-5 w-3 h-3 rounded-full bg-sky-900
                            border-2 border-sky-700 group-hover:bg-sky-500 group-hover:border-sky-400
                            transition-all duration-300" />

            <div className="bg-slate-800/50 hover:bg-slate-800/70 rounded-xl p-5
                            border border-slate-700/60 transition-colors duration-300">
                <h3 className="flex items-center gap-x-2.5 text-lg font-semibold text-white tracking-tight mb-0.5">
                    <span className="text-sky-400 shrink-0">{icon}</span>
                    {title}
                </h3>
                <p className="text-sky-400/70 text-sm font-medium mb-3">{sub_title}</p>
                {body && (
                    <ul className="space-y-1.5 pl-1">
                        {body.map((bp, i) => (
                            <li key={i} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                                <span className="text-sky-600 mt-[0.25rem] shrink-0 leading-none">▸</span>
                                <span>{bp}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
