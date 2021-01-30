import React from "react";

import { LayoutProvider } from "./layout";

const AppProvider: React.FC = ({ children }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default AppProvider;
