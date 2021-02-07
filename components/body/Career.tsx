import React from "react";
import CareerCard from "components/cards/CareerCard";
import jobs from "utils/jobs/index";
import { useLayout } from "hooks/layout";

const Career = () => {
  const { careerRef } = useLayout();

  return (
    <section
      ref={careerRef}
      className="w-full min-h-auto py-14  p-4 bg-gradient-to-r from-indigo-200 to-indigo-400"
    >
      <h1 className="font-serif text-black text-5xl pb-2">Career</h1>
      <div className="h-auto p w-full sm:flex-row ">
        {jobs.map((job, index) => (
          <CareerCard {...job} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Career;
