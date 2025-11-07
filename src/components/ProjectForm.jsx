export default function ProjectForm({ onSubmit }) {
  const inputClass = "bg-stone-300 outline-none";
  const labelClass = "text-stone-800 font-bold test-xl";
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex justify-end gap-2">
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
        <label htmlFor="projectName" className={labelClass}>
          TITLE
        </label>
        <input type="text" name="projectName" className={inputClass} />
        <label htmlFor="projectDescription" className={labelClass}>
          DESCRIPTION
        </label>
        <textarea
          type="text"
          name="projectDescription"
          className={inputClass}
        />
        <label htmlFor="projectDueDate" className={labelClass}>
          DUE DATE
        </label>
        <input
          type="date"
          name="projectDueDate"
          min={new Date().toISOString().split("T")[0]}
          className={`${inputClass} placeholder:text-black`}
        />
      </div>
    </form>
  );
}
