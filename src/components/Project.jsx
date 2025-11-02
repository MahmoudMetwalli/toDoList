export default function Project({ project }) {
  return (
    <article className="bg-blue-500 text-white">
      <section>
        <h2>{project.name}</h2>
      </section>
      <section>
        <p>{project.dueDate}</p>
      </section>
      <section>
        <h3>Description</h3>
        <p>{project.description}</p>
      </section>
    </article>
  );
}
