import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLayout } from "hooks/layout";

const ScrollIndicator = () => {
  const { scrollTo } = useLayout();

  return (
    <FaChevronDown
      size="1.5em"
      color="white"
      className="animate-bounce mt-4 cursor-pointer"
      onClick={() => scrollTo(1)}
    />
  );
};

export default ScrollIndicator;
