import React from "react";
import TechCard from "components/cards/TechCard";
import { frontend, backend, tools, languages } from "utils/techs/index";
import { useLayout } from "hooks/layout";

const Experience = () => {
  const { experienceRef } = useLayout();

  return (
    <section ref={experienceRef} className="bg-gray-100 w-full h-auto p-4">
      <h1 className="font-serif text-black text-5xl pb-2">Experience</h1>
      <p className="text-black text-xl pb-3">
        Throughout my developer adventure, I have studied and worked with these
        technologies:
      </p>
      <h3 className="font-mono text-black text-2xl pb-2">Languages</h3>
      <div className="flex flex-row space-x-2 p-3 overflow-auto">
        {languages.map((language, index) => (
          <TechCard {...language} key={index} />
        ))}
      </div>
      <h3 className="font-mono text-black text-2xl pb-2">Front-end</h3>
      <div className="flex flex-row space-x-2 p-3 overflow-auto">
        {frontend.map((tech, index) => (
          <TechCard {...tech} key={index} />
        ))}
      </div>
      <h3 className="font-mono text-black text-2xl pb-2">Back-end</h3>
      <div className="flex flex-row space-x-2 p-3 overflow-auto">
        {backend.map((tech, index) => (
          <TechCard {...tech} key={index} />
        ))}
      </div>
      <h3 className="font-mono text-black text-2xl pb-2">Tools</h3>
      <div className="flex flex-row space-x-2 p-3 overflow-auto">
        {tools.map((tool, index) => (
          <TechCard {...tool} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
