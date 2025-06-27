import { LucideX } from 'lucide-react'
import MenuBar from './menubar'

interface SideBarProps {
  sidebarOpen: boolean
  toggleSideBar: () => void
}

export function SideBar({ sidebarOpen, toggleSideBar }: SideBarProps) {
  return (
    <div
      className={`
        bg-white cursor-pointer
        fixed left-0 top-0 h-full z-10
        flex h-full flex-col border-r p-4 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} duration-1000 ease-in-out
        dark:border-white/25 dark:bg-slate-950
        `}
    >
      <div className='flex justify-end'>
        <LucideX height={12} width={12} onClick={toggleSideBar}></LucideX>
      </div>
      <MenuBar></MenuBar>
    </div>
  )
}
