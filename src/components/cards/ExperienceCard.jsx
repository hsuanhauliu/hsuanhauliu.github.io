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
                    <ul className="space-y-2">
                        {body.map((bp, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--ink-body)' }}>
                                <span aria-hidden="true" className="shrink-0 mt-[0.5rem] w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: 'var(--accent)' }} />
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
