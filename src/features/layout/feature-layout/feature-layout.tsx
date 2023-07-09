import React, { ReactNode } from "react";
import { Header } from "./components/header";

interface FeatureLayoutProps {
  children: ReactNode;
}

export const FeatureLayout: React.FC<FeatureLayoutProps> = ({ children }) => {
  return (
    <div>
      <br />
      {/* <Header /> */}
      <div>{children}</div>
    </div>
  );
};
