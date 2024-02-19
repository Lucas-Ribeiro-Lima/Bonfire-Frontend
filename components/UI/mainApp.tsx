import { FC, ReactNode } from 'react'

interface MainAppProps {
  children: ReactNode
  title?: string
}

const MainApp: FC<MainAppProps> = ({ children, title }) => {
  return (
    <main className=" flex h-full flex-col items-center p-4">
      <h1
        className="bg-gradient-to-r from-sky-500 via-sky-700 to-sky-400 bg-clip-text p-2 
      text-2xl font-semibold text-transparent"
      >
        {title}
      </h1>
      {children}
    </main>
  )
}

export default MainApp
