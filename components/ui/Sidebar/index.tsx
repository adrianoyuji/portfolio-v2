import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useLayout } from "hooks/layout";
const Sidebar = () => {
  const { handleSidebar } = useLayout();

  return (
    <div className="flex flex-col sm:w-1/4 w-3/4 h-screen bg-gray-800 z-20 absolute right-0">
      <div className="flex bg-purple-600 p-2">
        <h2 className="text-xl text-gray-900 flex-grow ">Navigation</h2>
        <VscChromeClose
          color="#111827"
          onClick={handleSidebar}
          className="cursor-pointer hover:bg-blue-200 active:bg-gray-500 rounded"
          size="24"
        />
      </div>
      <hr className="bg-black" />
      <div className="flex flex-col p-2">
        <ul>
          <li>
            <h2 className="text-xl text-gray-100 cursor-pointer hover:text-purple-500 transition ease-in-out duration-200">
              About
            </h2>
          </li>
          <li>
            <h2 className="text-xl text-gray-100 cursor-pointer hover:text-purple-500 transition ease-in-out duration-200">
              Experience
            </h2>
          </li>
          <li>
            <h2 className="text-xl text-gray-100 cursor-pointer hover:text-purple-500 transition ease-in-out duration-200">
              Projects
            </h2>
          </li>
          <li>
            <h2 className="text-xl text-gray-100 cursor-pointer hover:text-purple-500 transition ease-in-out duration-200">
              Contact
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
