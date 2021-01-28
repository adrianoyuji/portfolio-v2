import React from "react";

const Navigator = () => {
  const desktopNavigator = () => {
    return (
      <div className="flex flex-row items-center space-x-2 pr-1">
        <h2 className="text-xl text-gray-100 cursor-pointer hover:text-red-700 transition ease-in-out duration-200">
          About
        </h2>
        <h2 className="text-xl text-gray-100 cursor-pointer hover:text-red-700 transition ease-in-out duration-200">
          Skills
        </h2>
        <h2 className="text-xl text-gray-100 cursor-pointer hover:text-red-700 transition ease-in-out duration-200">
          Projects
        </h2>
        <h2 className="text-xl text-gray-100 cursor-pointer hover:text-red-700 transition ease-in-out duration-200">
          Contact
        </h2>
      </div>
    );
  };

  /*   const mobileNavigator = () => {
    return null;
  }; */

  return desktopNavigator();
};

export default Navigator;
