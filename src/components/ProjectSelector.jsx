export default function ProjectSelector({
    title,
    projects,
    selected,
    setSelected,
    onNavigate
}) {
    return (
        <div className="flex flex-col items-center w-full md:w-auto">

            <button
                onClick={onNavigate}
                className="px-6 py-3 mb-3 border-black border-2 rounded-4xl text-black hover:bg-black hover:border-pink-300 hover:text-pink-300 transition w-full md:w-auto"
            >
                {title}
            </button>

            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="border border-black px-3 py-2 rounded-2xl w-full md:w-32 text-center"
            >
                {projects.map((p) => (
                    <option key={p.id} value={p.id}>
                        {p.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
