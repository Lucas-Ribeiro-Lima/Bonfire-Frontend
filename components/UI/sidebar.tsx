import MenuBar from "./menubar";

export function SideBar() {
  return(
    <div  className="flex flex-col bg-zinc-800 border-r border-white/25 z-10">
      <MenuBar></MenuBar>
    </div>
  )
}