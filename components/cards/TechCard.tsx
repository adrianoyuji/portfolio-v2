import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  spin?: boolean;
  alt: string;
  imgurl: string;
  url: string;
}

const TechCard = ({ title, spin, alt, imgurl, url }: CardProps) => {
  return (
    <div className="flex items-center justify-center flex-col bg-white w-32 sm:w-36 shadow-lg rounded transform hover:scale-95 duration-300 ease-in-out">
      <div className="h-32 w-32">
        <img
          src={imgurl}
          alt={alt}
          className={
            spin
              ? "animate-spin-slow rounded-t p-4 duration-300"
              : "rounded-t p-4"
          }
        />
      </div>

      <div className="p-4">
        <Link href={url}>
          <a target="_blank" className="font-mono text-lg sm:text-sm uppercase">
            {title}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TechCard;
