import MenuBar from './menubar'

export function SideBar() {
  return (
    <div
      className={`flex h-full flex-col border-r border-white/25 bg-slate-950 p-4`}
    >
      <MenuBar></MenuBar>
    </div>
  )
}
