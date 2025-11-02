export default function ProjectForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="bg-yellow-500">
      <label htmlFor="projectName" className="text-white">
        Project Name
      </label>
      <input type="text" id="projectName" name="projectName" />
      <label htmlFor="projectDescription" className="text-white">
        Project Description
      </label>
      <input type="text" id="projectDescription" name="projectDescription" />
      <label htmlFor="projectDueDate" className="text-white">
        Project Due Date
      </label>
      <input type="date" id="projectDueDate" name="projectDueDate" />
      <button type="submit" className="text-white">
        Save
      </button>
    </form>
  );
}
