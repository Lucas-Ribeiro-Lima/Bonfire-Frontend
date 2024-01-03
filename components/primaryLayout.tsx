import Footer from "./footer";
import Header from "./header";
import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const PrimaryLayout: FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <Header></Header>
      <div className='flex-1'>
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PrimaryLayout;