import { forwardRef, useImperativeHandle, useRef } from "react";

const Project = forwardRef(function Project(
  { project, handleDeleteProject, handleAddTask, handleClearTask },
  ref
) {
  console.log(project);
  const taskInputRef = useRef();
  useImperativeHandle(ref, () => ({
    taskInput: taskInputRef.current,
  }));
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
      <div className="flex gap-4">
        <input
          type="text"
          ref={taskInputRef}
          className="bg-stone-300 outline-none my-4 pr-16"
        />
        <button
          className="font-medium"
          onClick={() => handleAddTask(project.id)}
        >
          Add Task
        </button>
      </div>
      {project.tasks.map((task) => (
        <div
          className="flex justify-between items-center bg-stone-100 my-2 py-4 px-4 rounded-2xl"
          key={task.id}
        >
          <p>{task.content}</p>
          <button onClick={() => handleClearTask(project.id, task.id)}>
            Clear
          </button>
        </div>
      ))}
    </article>
  );
});

export default Project;
