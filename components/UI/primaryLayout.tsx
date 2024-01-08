import Header from "./header";
import React, { FC, ReactNode } from "react";
import { SideBar } from "./sidebar";

interface Props {
  children?: ReactNode;
}

const PrimaryLayout: FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <Header></Header>
      <div className='flex flex-row flex-1'>
        <SideBar></SideBar>
        {children}
      </div>
    </div>
  );
}

export default PrimaryLayout;