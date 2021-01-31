import React from "react";
import Link from "next/link";

interface CareerProps {
  title: string;
  company: string;
  date: string;
  main_description: string;
  topics?: string[];
  url: string;
}

const CareerCard = ({
  title,
  company,
  date,
  main_description,
  topics,
  url,
}: CareerProps) => {
  return (
    <div className="py-2">
      <h1 className="text-xl">
        <b>{title}</b>
      </h1>
      <h2 className="text-lg">
        at{" "}
        <Link href={url}>
          <a target="_blank" className="text-red-500">
            {company}
          </a>
        </Link>
        .
      </h2>
      <p className="text-base">{date}</p>
      <p className="tet-lg">{main_description}</p>
      {topics && topics.map((topic, index) => <p key={index}>✅ {topic}</p>)}
    </div>
  );
};

export default CareerCard;
