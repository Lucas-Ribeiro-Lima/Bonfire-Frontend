'use client'

import { AlignJustify } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { NotificationBar } from './notificationBar'

type headerProp = {
  toggleSideBar: () => void
}

const Header = ({ toggleSideBar }: headerProp) => {
  const { data: session, status } = useSession()

  return (
    <div className='h-12'>
      <header className="fixed top-0 left-0 z-10 h-12 w-full flex flex-row border-b border-zinc-300/60 dark:bg-slate-950 pl-4 bg-white">
        <div className="flex flex-1 gap-4 text-zinc-500">
          <button className="dark:text-white" onClick={toggleSideBar}>
            <AlignJustify></AlignJustify>
          </button>
          <div className="bonfire-color text-2xl font-semibold">
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 pr-4">
          {status === 'authenticated' ? session.user?.name : null}
          <NotificationBar></NotificationBar>
        </div>
      </header>
    </div>
  )
}

export default Header
