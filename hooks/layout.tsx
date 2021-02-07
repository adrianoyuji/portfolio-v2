import React, { createContext, useState, useContext, useRef } from "react";

interface LayoutContextData {
  sidebar: boolean;
  handleSidebar(): void;
  billboardRef: any;
  aboutRef: any;
  projectsRef: any;
  careerRef: any;
  experienceRef: any;
  contactRef: any;

  scrollTo(index: number): void;
}

const LayoutContext = createContext<LayoutContextData>({} as LayoutContextData);

export const LayoutProvider: React.FC = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const billboardRef = useRef<null | HTMLElement>(null);
  const aboutRef = useRef<null | HTMLElement>(null);
  const projectsRef = useRef<null | HTMLElement>(null);
  const careerRef = useRef<null | HTMLElement>(null);
  const experienceRef = useRef<null | HTMLElement>(null);
  const contactRef = useRef<null | HTMLElement>(null);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const scrollTo = (index: number) => {
    switch (index) {
      case 0:
        const billboardNode = billboardRef.current;
        billboardNode?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case 1:
        const aboutNode = aboutRef.current;
        aboutNode?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case 2:
        const projectsNode = projectsRef.current;
        projectsNode?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case 3:
        const careerNode = careerRef.current;
        careerNode?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case 4:
        const experienceNode = experienceRef.current;
        experienceNode?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case 5:
        const contactNode = contactRef.current;
        contactNode?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      default:
        break;
    }
  };

  return (
    <LayoutContext.Provider
      value={{
        sidebar,
        handleSidebar,
        contactRef,
        aboutRef,
        billboardRef,
        careerRef,
        experienceRef,
        projectsRef,
        scrollTo,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);

  return context;
};

export default { useLayout, LayoutProvider };
