export default function SideNav({
  projects,
  handleOnClick,
  handleSelectProject,
  selectedProjectId,
}) {
  return (
    <nav className="bg-black text-white h-screen w-1/4 rounded-tr-xl mr-6">
      <h1 className="text-3xl font-semibold text-left pt-24 pb-12 pl-12">
        YOUR PROJECTS
      </h1>
      <button
        onClick={handleOnClick}
        className="bg-stone-700 text-2xl ml-12 px-4 pt-4 pb-4 rounded-lg text-stone-300 font-light"
      >
        + Add Project
      </button>
      <ol className="pt-12 px-6 pb-12">
        {projects
          .sort((a, b) => a.dueDate - b.dueDate)
          .map((project) => (
            <li
              key={project.id}
              onClick={() => handleSelectProject(project)}
              className={`${
                project.id === selectedProjectId ? "bg-stone-800" : ""
              } text-lg text-left text-stone-400 font-medium pl-2 pt-4 pb-4 mx-6 hover:bg-stone-800`}
            >
              {project.name}
            </li>
          ))}
      </ol>
    </nav>
  );
}
