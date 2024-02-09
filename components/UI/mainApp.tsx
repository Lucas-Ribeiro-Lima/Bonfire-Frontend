import { FC, ReactNode } from 'react'

interface MainAppProps {
  children: ReactNode
  title?: string
}

const MainApp: FC<MainAppProps> = ({ children, title }) => {
  return (
    <main className=" flex h-full flex-col items-center p-4">
      <h1 className="p-2 text-2xl font-semibold text-red-700">{title}</h1>
      {children}
    </main>
  )
}

export default MainApp
