import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="flex flex-row p-1 cursor-pointer">
        <h1 className="text-xl text-blue-400">A</h1>
        <h2 className="text-xl text-gray-100">driano</h2>
        <h1 className="text-xl text-blue-400">V</h1>
        <h2 className="text-xl text-gray-100">asconcelos</h2>
      </span>
    </Link>
  );
};

export default Logo;
