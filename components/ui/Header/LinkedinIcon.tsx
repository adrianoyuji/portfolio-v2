import React from "react";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";

const LinkedInIcon = () => {
  return (
    <div className="flex flex-row items-center px-2">
      <Link href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/">
        <SiLinkedin
          color="white"
          size="28"
          className=" cursor-pointer hover:bg-gray-700 active:bg-gray-500 rounded"
        />
      </Link>
    </div>
  );
};

export default LinkedInIcon;
