import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useLayout } from "hooks/layout";
const Sidebar = () => {
  const { sidebar, handleSidebar } = useLayout();

  return (
    <div className={sidebar ? "sidenav-on" : "sidenav"}>
      <div className="flex bg-blue-400 p-2">
        <h2 className="text-xl text-gray-900 flex-grow ">Navigation</h2>
        <VscChromeClose
          color="#111827"
          onClick={handleSidebar}
          className="cursor-pointer hover:bg-blue-200 active:bg-gray-500 rounded"
          size="24"
        />
      </div>
      <hr className="bg-black" />
      <nav className="flex flex-col p-2">
        <ul>
          <li className="p-1">
            <h2 className="text-2xl text-gray-100 cursor-pointer hover:text-blue-500 transition ease-in-out duration-200">
              About
            </h2>
          </li>
          <li className="p-1">
            <h2 className="text-2xl text-gray-100 cursor-pointer hover:text-blue-500 transition ease-in-out duration-200">
              Projects
            </h2>
          </li>
          <li className="p-1">
            <h2 className="text-2xl text-gray-100 cursor-pointer hover:text-blue-500 transition ease-in-out duration-200">
              Career
            </h2>
          </li>
          <li className="p-1">
            <h2 className="text-2xl text-gray-100 cursor-pointer hover:text-blue-500 transition ease-in-out duration-200">
              Experience
            </h2>
          </li>
          <li className="p-1">
            <h2 className="text-2xl text-gray-100 cursor-pointer hover:text-blue-500 transition ease-in-out duration-200">
              Contact
            </h2>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
