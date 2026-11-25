export const metadata = {
  title: "Projects - Amber Perote",
};

const projects = [
  { id: 1, name: "Project one", description: "One sentence about it." },
  { id: 2, name: "Project two", description: "One sentence about it." },
  { id: 3, name: "Project three", description: "One sentence about it." },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2">My projects will appear here.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
