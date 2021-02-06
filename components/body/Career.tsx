import React from "react";
import CareerCard from "components/cards/CareerCard";
import jobs from "utils/jobs/index";

const Career = () => {
  return (
    <section className="w-full min-h-auto p-4 bg-indigo-300">
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
