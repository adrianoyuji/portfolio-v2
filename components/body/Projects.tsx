import React, { useState } from "react";
import ProjectCard from "components/cards/ProjectCard";
import projects from "utils/projects/index";

const Projects = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(true);

  return (
    <section className="bg-gray-100 w-full h-auto p-4">
      <h1 className="font-serif text-black text-5xl pb-2">Projects</h1>
      <p className="text-md">
        With my 1+ years of experience I have build a few projects, I divided in
        Public and Private projects, the latter being made for the companies I
        have worked for, thus the source code is not available.
      </p>
      <div className="flex flex-row justify-center items-center w-full space-x-4 p-4">
        <button
          onClick={() => setIsPrivate(true)}
          className={`py-3 px-1  ${
            isPrivate
              ? " bg-indigo-800 hover:bg-indigo-900 active:bg-indigo-900"
              : "bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-900"
          } rounded-lg text-white font-bold w-full sm:w-1/6`}
        >
          🔒 Private
        </button>
        <button
          onClick={() => setIsPrivate(false)}
          className={`py-3 px-1  ${
            !isPrivate
              ? " bg-indigo-800 hover:bg-indigo-900 active:bg-indigo-900"
              : "bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-900"
          } rounded-lg text-white font-bold w-full sm:w-1/6`}
        >
          📂 Public
        </button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        {projects.map(
          (project, index) =>
            isPrivate === project.private_project && (
              <ProjectCard {...project} key={index} />
            )
        )}
      </div>
    </section>
  );
};

export default Projects;
