import MenuBar from './menubar'

export function SideBar() {
  return (
    <div className="z-10 flex h-full flex-col border-r border-white/25 bg-zinc-800">
      <MenuBar></MenuBar>
    </div>
  )
}
