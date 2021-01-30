import React, { createContext, useState, useContext } from "react";

interface LayoutContextData {
  sidebar: boolean;
  handleSidebar(): void;
}

const LayoutContext = createContext<LayoutContextData>({} as LayoutContextData);

export const LayoutProvider: React.FC = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <LayoutContext.Provider value={{ sidebar, handleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);

  return context;
};

export default { useLayout, LayoutProvider };
