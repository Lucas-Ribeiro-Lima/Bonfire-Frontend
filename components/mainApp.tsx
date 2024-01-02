import React, {FC, ReactNode } from "react";

interface MainAppProps {
    children: ReactNode;
    title?: string;
}


const MainApp:FC<MainAppProps> = ({children, title}) => {
    return (
        <main className='flex flex-col flex-1 h-3/4 items-center text-white/70 relative top-20'>
            <div className="flex flex-row">
                <h1 className="text-bold text-2xl p-4">{title}</h1>
                {/* <XCircle className='text-zinc-800 cursor-pointer hover:text-white/80 hover:duration-1000'></XCircle> */}
            </div>
            <div className="flex flex-1 w-11/12 bg-zinc-700/80 rounded-lg p-4 shadow-inner shadow-black/50 overflow-hidden">
                {children}
            </div>
        </main>
    );
}

export default MainApp;