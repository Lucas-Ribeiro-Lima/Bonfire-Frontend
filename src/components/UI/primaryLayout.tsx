'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode, useState } from 'react'
import Footer from './footer'
import Header from './header'
import { SideBar } from './sidebar'

interface Props {
  children?: ReactNode
  session?: Session
}

function PrimaryLayout({ children, session }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function toggleSideBar() {
    setSidebarOpen((prev) => !prev)
  }

  return (
    <SessionProvider session={session}>
      <div className="flex h-screen w-screen flex-col">
        <Header toggleSideBar={toggleSideBar}></Header>
        <SideBar sidebarOpen={sidebarOpen} toggleSideBar={toggleSideBar}></SideBar>
        <div className="
          flex justify-center align-center flex-1 overflow-x-hidden
          dark:bg-gradient-to-r dark:from-gray-900 dark:via-sky-950 dark:to-slate-900">
          {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </SessionProvider>
  )
}

export default PrimaryLayout
