import Footer from "./footer";
import Header from "./header";
import React, {FC, ReactNode} from "react";

interface Props {
    children?: ReactNode;
}

const PrimaryLayout:FC<Props> = ({children}) => {
    return(
        <div className='h-screen flex flex-col'>
        <div className="fixed top-0 w-full z-20">
          <Header></Header>
        </div>
        <div className='flex flex-1 justify-center items-center m-4'>
          {children}
        </div>
        <div className="fixed bottom-0 w-full">
          <Footer></Footer>
        </div>
      </div>
    );
}

export default PrimaryLayout;