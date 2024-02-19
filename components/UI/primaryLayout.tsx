'use client'
import { SidebarCloseIcon } from 'lucide-react'
import { FC, ReactNode, useState } from 'react'
import Header from './header'
import { SideBar } from './sidebar'

interface Props {
  children?: ReactNode
}

const PrimaryLayout: FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  function closeSideBar() {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen w-screen flex-col">
      <div>
        <Header></Header>
        <button
          className="absolute left-2 top-2 z-10 text-zinc-500"
          onClick={closeSideBar}
        >
          <SidebarCloseIcon></SidebarCloseIcon>
        </button>
      </div>
      <div className="flex flex-1 flex-row bg-gradient-to-r from-gray-900 via-sky-950 to-slate-900">
        <div
          className={` ${sidebarOpen ? 'translate-x-0' : 'hidden -translate-x-full'} duration-1000  ease-in-out`}
        >
          <SideBar></SideBar>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

export default PrimaryLayout
