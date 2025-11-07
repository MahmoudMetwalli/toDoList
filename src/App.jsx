import { useState, useRef } from "react";
import SideNav from "./components/SideNav";
import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";
import image from "./assets/no-projects.png";
function App() {
  const [projects, setProjects] = useState([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const projectRef = useRef();
  function addProject(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  function handleAddProject(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const project = {
      id: Date.now(),
      name: formData.get("projectName"),
      description: formData.get("projectDescription"),
      dueDate: new Date(formData.get("projectDueDate")),
      tasks: [],
    };
    addProject(project);
    event.target.reset();
    setIsAddingProject(false);
  }

  function startAddingProject() {
    setIsAddingProject(true);
  }

  function handleSelectProject(projectId) {
    setSelectedProjectId(projectId);
    setIsAddingProject(false);
  }

  function handleDeleteProject(projectId) {
    if (selectedProject?.id === projectId) {
      setSelectedProjectId(null);
    }
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
  }
  function handleAddTask(projectId) {
    const content = projectRef.current.taskInput.value.trim();
    console.log(content);
    if (!content) return;

    const task = {
      id: Date.now(),
      content,
    };
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, task] }
          : project
      )
    );
    projectRef.current.taskInput.value = "";
  }

  function handleClearTask(projectId, taskId) {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project
      )
    );
  }
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  return (
    <main className="flex mt-12">
      <SideNav
        projects={projects}
        handleOnClick={startAddingProject}
        handleSelectProject={handleSelectProject}
        selectedProjectId={selectedProjectId ?? ""}
      />
      <div className="flex-1 mt-24 ml-6 mr-64">
        {isAddingProject ? (
          <ProjectForm onSubmit={handleAddProject} />
        ) : selectedProject ? (
          <Project
            project={selectedProject}
            handleDeleteProject={handleDeleteProject}
            handleAddTask={handleAddTask}
            handleClearTask={handleClearTask}
            ref={projectRef}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-24">
            <img
              src={image}
              alt="no project selected"
              className="w-16 h-16 object-contain mb-4"
            />
            <h2 className="text-xl font-bold text-stone-500 mb-4">
              No Project Selected
            </h2>
            <p className="text-stone-400 mb-4">
              Select a project or get started with a new one
            </p>
            <button
              onClick={startAddingProject}
              className="px-6 py-2 rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            >
              Create new project
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
