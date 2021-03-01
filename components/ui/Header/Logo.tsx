import React from "react";
import { useLayout } from "hooks/layout";
const Logo = () => {
  const { scrollTo } = useLayout();

  return (
    <span
      className="flex flex-row p-1 cursor-pointer"
      onClick={() => scrollTo(0)}
    >
      <h1 className="text-xl text-blue-400">A</h1>
      <h2 className="text-xl text-gray-100">driano</h2>
      <h1 className="text-xl text-blue-400">V</h1>
      <h2 className="text-xl text-gray-100">asconcelos</h2>
    </span>
  );
};

export default Logo;
