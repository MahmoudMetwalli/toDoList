import { useState } from "react";
import SideNav from "./components/SideNav";
import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [projects, setProjects] = useState([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  function handleSelectProject(project) {
    setSelectedProject(project);
    setIsAddingProject(false);
  }
  return (
    <main className="flex mt-12">
      <SideNav
        projects={projects}
        handleOnClick={startAddingProject}
        handleSelectProject={handleSelectProject}
        selectedProjectId={selectedProject.id}
      />
      <div className="flex-1 mt-24 ml-6">
        {isAddingProject ? (
          <ProjectForm onSubmit={handleAddProject} />
        ) : selectedProject ? (
          <Project project={selectedProject} />
        ) : (
          "Please Add Project"
        )}
      </div>
    </main>
  );
}

export default App;
