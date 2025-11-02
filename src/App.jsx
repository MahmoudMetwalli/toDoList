import { useState, useRef } from "react";
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
      name: formData.get("projectName"),
      description: formData.get("projectDescription"),
      dueDate: formData.get("projectDueDate"),
    };
    addProject(project);
  }

  return (
    <main className="flex">
      <SideNav projects={projects} />
      <div className="flex-1">
        {isAddingProject ? (
          selectedProject ? (
            <Project project={selectedProject} />
          ) : (
            "Please Add Project"
          )
        ) : (
          <ProjectForm onSubmit={handleAddProject} />
        )}
      </div>
    </main>
  );
}

export default App;
