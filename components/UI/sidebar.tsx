import MenuBar from "./menubar";

export function SideBar() {
  return(
    <div  className="flex flex-col h-full bg-zinc-800 border-r border-white/25 z-10">
      <MenuBar></MenuBar>
    </div>
  )
}