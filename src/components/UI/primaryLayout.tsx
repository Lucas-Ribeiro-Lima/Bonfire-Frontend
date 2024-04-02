'use client'
import { SidebarCloseIcon } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { ReactNode, useState } from 'react'
import Footer from './footer'
import Header from './header'
import { SideBar } from './sidebar'

interface Props {
  children?: ReactNode
}

function PrimaryLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return signIn('keycloak')
    },
  })

  function closeSideBar() {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen w-screen flex-col">
      <div>
        <Header></Header>
        <button
          className="absolute left-2 top-2 z-10 flex items-center gap-4 text-white"
          onClick={closeSideBar}
        >
          <div className="text-sky-800">
            <SidebarCloseIcon></SidebarCloseIcon>
          </div>
          {status === 'authenticated' && session.user?.name}
        </button>
      </div>
      <div className="flex flex-1 flex-row bg-gradient-to-r from-gray-900 via-sky-950 to-slate-900">
        <div
          className={` ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} duration-1000 ease-in-out`}
        >
          <SideBar></SideBar>
        </div>
        <div className="flex-1">{children}</div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default PrimaryLayout
