import MenuBar from './menubar'

export function SideBar() {
  return (
    <div className="flex h-full flex-col border-r border-white/25 bg-zinc-900 p-2">
      <MenuBar></MenuBar>
    </div>
  )
}
