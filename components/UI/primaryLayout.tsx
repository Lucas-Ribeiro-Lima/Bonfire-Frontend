'use client'
import Header from "./header";
import React, { FC, ReactNode, useState } from "react";
import { SideBar } from "./sidebar";
import { SidebarCloseIcon } from "lucide-react";

interface Props {
  children?: ReactNode;
}

const PrimaryLayout: FC<Props> = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(true)

  function closeSideBar() {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className='flex flex-col h-full w-full'>
      <Header></Header>
      <button className="text-zinc-500 absolute z-10 top-2 left-2" onClick={closeSideBar}>
        <SidebarCloseIcon></SidebarCloseIcon>
      </button>
      <div className='flex flex-row flex-1'>
        {sidebarOpen &&
          <SideBar></SideBar>
        }
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PrimaryLayout;