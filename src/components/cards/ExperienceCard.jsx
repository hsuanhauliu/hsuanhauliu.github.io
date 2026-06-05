// Experience cards on the Portfolio page.

export default function ExperienceCard({ icon, title, sub_title, body }) {
    return (
        <div className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700">
            <h3 className="flex items-center gap-x-2 text-2xl font-semibold text-blue-400 mb-1">
                {icon} {title}
            </h3>
            <p className="text-gray-400 mb-1">{sub_title}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
                {body && body.map((bp, i) => <li key={i}>{bp}</li>)}
            </ul>
        </div>
    );
}
