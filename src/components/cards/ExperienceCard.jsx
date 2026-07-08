// A single row on the Experience timeline. Cards alternate left/right of a
// central rail; a colored node bubble sits on the rail with a date pill beside it.

export default function ExperienceCard({ icon, title, sub_title, body, date, side, nodeColor }) {
    return (
        <div className={`timeline-row ${side}`}>
            <div className="tl-card">
                <h3 className="text-lg font-semibold text-white tracking-tight mb-0.5">
                    {title}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--cyan)' }}>
                    {sub_title}
                </p>
                {body && (
                    <ul className="space-y-1.5">
                        {body.map((bp, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                    className="w-3 h-3 shrink-0 mt-[0.34rem]" style={{ color: 'var(--purple)' }}>
                                    <path d="M12 2l2.9 6.26 6.85.72-5.12 4.62 1.44 6.72L12 17.6l-6.06 3.44 1.44-6.72L2.26 8.98l6.85-.72z" />
                                </svg>
                                <span>{bp}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className={`tl-node ${nodeColor}`}>
                {icon}
            </div>

            <div className="tl-date">{date}</div>
        </div>
    );
}
