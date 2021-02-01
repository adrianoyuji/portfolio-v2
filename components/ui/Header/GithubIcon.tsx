import React from "react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

const GithubIcon = () => {
  return (
    <div className="flex flex-row items-center px-2">
      <Link href="https://github.com/adrianoyuji">
        <SiGithub
          color="white"
          size="28"
          className=" cursor-pointer hover:bg-gray-700 active:bg-gray-500 rounded"
        />
      </Link>
    </div>
  );
};

export default GithubIcon;
