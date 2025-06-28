import { LucideX } from 'lucide-react'
import { MenuBar } from './menubar'

interface SideBarProps {
  sidebarOpen: boolean
  toggleSideBar: () => void
}

export function SideBar({ sidebarOpen, toggleSideBar }: SideBarProps) {
  return (
    <>
      <div
        className={`
        fixed left-0 top-0
        z-20 flex h-full cursor-pointer flex-col
        items-center border-r
        bg-white p-4 max-sm:w-full
        ${sidebarOpen ? 'max-sm:translate-y-0 sm:translate-x-0' : 'max-sm:-translate-y-full sm:-translate-x-full'} duration-1000 ease-in-out
        dark:border-white/25 dark:bg-slate-950
        `}
      >
        <div className="self-end">
          <LucideX height={12} width={12} onClick={toggleSideBar}></LucideX>
        </div>
        <MenuBar></MenuBar>
      </div>
      <div
        onClick={toggleSideBar}
        className={`${!sidebarOpen ? 'hidden' : ''} fixed left-0 top-0 z-10 h-svh w-svw bg-zinc-800/60 blur-2xl`}
      ></div>
    </>
  )
}
