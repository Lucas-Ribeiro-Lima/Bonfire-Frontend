'use client'

import { AlignJustify } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { NotificationBar } from './notificationBar'
import { ThemeBtn } from './themeBtn'

type headerProp = {
  toggleSideBar: () => void
}

export const Header = ({ toggleSideBar }: headerProp) => {
  const { data: session } = useSession()

  return (
    <>
      <div className="h-12"></div>
      <header className="fixed left-0 top-0 z-10 flex h-12 w-full flex-row justify-between border-b border-zinc-300/60 bg-white pl-4 dark:bg-slate-950">
        <button className="dark:text-white" onClick={toggleSideBar}>
          <AlignJustify></AlignJustify>
        </button>
        <div className="flex items-center justify-center gap-8 pr-4">
          {session?.user?.name ?? null}
          <ThemeBtn />
          <NotificationBar></NotificationBar>
        </div>
      </header>
    </>
  )
}
