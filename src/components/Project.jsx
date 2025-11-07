export default function Project({ project, handleDeleteProject }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <article className="text-lg text-stone-700">
      <header className="flex justify-between items-center">
        <h2 className="text-5xl font-bold">{project.name}</h2>
        <button
          onClick={() => handleDeleteProject(project.id)}
          className="text-stone-700 font-normal text-2xl"
        >
          Delete
        </button>
      </header>

      <p className="mt-2 mb-2 font-medium text-stone-400">{formattedDate}</p>

      <p>{project.description}</p>
      <hr className="my-8 border-t-4 border-stone-300" />
      <header>
        <h3 className="text-4xl font-semibold">Tasks</h3>
      </header>
    </article>
  );
}
