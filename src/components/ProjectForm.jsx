export default function ProjectForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="">
      <div>
        <button
          type="submit"
          className="text-white bg-black py-2 px-6 m-2 rounded-lg text-xl font-medium"
        >
          Save
        </button>
        <button className="text-black  py-2 px-6 m-2 rounded-lg text-xl font-medium">
          Cancel
        </button>
      </div>
      <div>
        <label htmlFor="projectName" className="">
          Project Name
        </label>
        <input type="text" id="projectName" name="projectName" />
        <label htmlFor="projectDescription" className="">
          Project Description
        </label>
        <input type="text" id="projectDescription" name="projectDescription" />
        <label htmlFor="projectDueDate" className="">
          Project Due Date
        </label>
        <input type="date" id="projectDueDate" name="projectDueDate" />
      </div>
    </form>
  );
}
