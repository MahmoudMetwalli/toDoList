export default function ProjectForm({ onSubmit }) {
  const inputClass = "bg-stone-300 outline-none";
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex justify-end gap-2 bg-yellow-500">
        <button className="text-black  py-2 px-6 m-2 rounded-lg text-xl font-medium">
          Cancel
        </button>
        <button
          type="submit"
          className="text-white bg-black py-2 px-6 m-2 rounded-lg text-xl font-medium"
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="projectName" className="">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          className={inputClass}
        />
        <label htmlFor="projectDescription" className="">
          Project Description
        </label>
        <input
          type="text"
          id="projectDescription"
          name="projectDescription"
          className={inputClass}
        />
        <label htmlFor="projectDueDate" className="">
          Project Due Date
        </label>
        <input
          type="date"
          id="projectDueDate"
          name="projectDueDate"
          className={inputClass}
        />
      </div>
    </form>
  );
}
