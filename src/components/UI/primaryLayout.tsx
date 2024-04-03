'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode, useState } from 'react'
import Footer from './footer'
import { SideBar } from './sidebar'
import Header from './header'

interface Props {
  children?: ReactNode
  session?: Session
}

function PrimaryLayout({ children, session }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <SessionProvider session={session}>
      <div className="flex h-screen w-screen flex-col">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        ></Header>
        <div className="flex flex-1 flex-row bg-gradient-to-r from-gray-900 via-sky-950 to-slate-900">
          <div
            className={` ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} duration-1000 ease-in-out`}
          >
            <SideBar sidebarOpen={sidebarOpen}></SideBar>
          </div>
          <div className="flex-1">{children}</div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </SessionProvider>
  )
}

export default PrimaryLayout
