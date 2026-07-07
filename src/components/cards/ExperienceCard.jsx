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
                            <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                                <span className="mt-[0.15rem] shrink-0" style={{ color: 'var(--purple)' }}>★</span>
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
