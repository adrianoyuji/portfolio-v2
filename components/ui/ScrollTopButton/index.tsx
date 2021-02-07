import React from "react";
import { useLayout } from "hooks/layout";
import { FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const { scrollTo } = useLayout();

  return (
    <div
      className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 h-12 w-12 absolute bottom-6 right-6 flex items-center justify-center cursor-pointer shadow-xl"
      onClick={() => scrollTo(0)}
    >
      <FaChevronUp />
    </div>
  );
};

export default Sidebar;
