'use client'
import { ReactNode, useState } from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { SideBar } from './sidebar'

interface Props {
  children?: ReactNode
}

export function PrimaryLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSideBar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="flex h-full flex-col">
      <Header toggleSideBar={toggleSideBar}></Header>
      <SideBar
        sidebarOpen={sidebarOpen}
        toggleSideBar={toggleSideBar}
      ></SideBar>
      <main
        className="
          align-center flex flex-1 justify-center overflow-x-hidden
          dark:bg-gradient-to-r dark:from-gray-900 dark:via-sky-950 dark:to-slate-900"
      >
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}
