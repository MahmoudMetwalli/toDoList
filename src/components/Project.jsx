export default function Project({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <article className="text-lg text-stone-700">
      <section className="mt-2 mb-2 text-5xl font-bold">
        <h2>{project.name}</h2>
      </section>
      <section className="mt-2 mb-2 font-medium text-stone-400">
        <p>{formattedDate}</p>
      </section>
      <section>
        <p>{project.description}</p>
      </section>
    </article>
  );
}
