import React, {FC, ReactNode } from "react";

interface MainAppProps {
    children: ReactNode;
    title?: string;
}


const MainApp:FC<MainAppProps> = ({children, title}) => {
    return (
            <main className="flex flex-col h-full items-center p-4">
                <h1 className="text-red-700 text-2xl font-semibold p-2">{title}</h1>
                {children}
            </main>
    );
}

export default MainApp;