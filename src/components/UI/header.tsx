'use client'

import { SidebarCloseIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { Logo } from './logo'
import { NotificationBar } from './notificationBar'

type headerProp = {
  sidebarOpen?: boolean
  setSidebarOpen: (sideBarOpen: boolean) => void
}

const Header = ({ sidebarOpen, setSidebarOpen }: headerProp) => {
  const { data: session, status } = useSession()

  function handleSideBar() {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <header className="align-center flex h-12 flex-row items-center border-b border-white/25 bg-slate-950 pl-4">
      <div className="flex flex-1 gap-4 text-zinc-500">
        <button className="text-white" onClick={handleSideBar}>
          <SidebarCloseIcon></SidebarCloseIcon>
        </button>
        <div className="bg-gradient-to-r from-sky-500 via-sky-700 to-sky-400 bg-clip-text text-2xl font-bold text-transparent">
          {status === 'authenticated' ? session.user?.name : null}
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 pr-4">
        <Logo></Logo>
        <NotificationBar></NotificationBar>
      </div>
    </header>
  )
}

export default Header
