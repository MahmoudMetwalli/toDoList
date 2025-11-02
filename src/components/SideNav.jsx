import { useState } from "react";

export default function SideNav({ projects, handleOnClick }) {
  return (
    <nav className="bg-black text-white h-screen w-1/4 mt-12 rounded-tr-xl">
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
          .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
          .map((project, index) => (
            <li
              key={index}
              className="bg-stone-900 text-lg text-left text-stone-400 font-medium pl-2 pt-4 pb-4 mx-6"
            >
              {project.name}
            </li>
          ))}
      </ol>
    </nav>
  );
}
