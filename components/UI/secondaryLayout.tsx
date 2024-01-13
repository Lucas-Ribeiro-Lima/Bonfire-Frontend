import Footer from "./footer";
import React, { FC, ReactNode } from "react";

interface SecondaryLayoutProp {
  children: ReactNode;
}

const SecondaryLayout: FC<SecondaryLayoutProp> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-r from-zinc-900 to-zinc-800">
      <div className="relative bottom-10 flex flex-1 items-center justify-center">
        {children}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SecondaryLayout;
