import MenuBar from './menubar'

interface sidebarProp {
  sidebarOpen: boolean
}

export function SideBar({ sidebarOpen }: sidebarProp) {
  return (
    <div
      className={`${sidebarOpen ? 'flex' : 'hidden'} h-full flex-col border-r border-white/25 bg-slate-950 p-4`}
    >
      <MenuBar></MenuBar>
    </div>
  )
}
