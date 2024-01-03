import React, {FC, ReactNode } from "react";

interface MainAppProps {
    children: ReactNode;
    title?: string;
}


const MainApp:FC<MainAppProps> = ({children, title}) => {
    return (
            <main className="flex flex-col flex-1 p-8 items-center">
                <h1 className="text-red-700 text-4xl font-bold p-4">{title}</h1>
                {children}
            </main>
    );
}

export default MainApp;