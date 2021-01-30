import React from "react";
import { useLayout } from "hooks/layout";
import { BiMenu } from "react-icons/bi";

const Navigator = () => {
  const { handleSidebar } = useLayout();

  return (
    <div className="flex flex-row items-center space-x-2 pr-1">
      <BiMenu
        onClick={handleSidebar}
        color="white"
        size="28"
        className=" cursor-pointer hover:bg-gray-600 active:bg-gray-500 rounded"
      />
    </div>
  );
};

export default Navigator;
