import React from "react";
import { SiGithub } from "react-icons/si";

const GithubIcon = () => {
  return (
    <div className="flex flex-row items-center px-2">
      <a target="_blank" href="https://github.com/adrianoyuji">
        <SiGithub
          color="white"
          size="28"
          className=" cursor-pointer hover:bg-gray-700 active:bg-gray-500 rounded"
        />
      </a>
    </div>
  );
};

export default GithubIcon;
