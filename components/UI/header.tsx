import { SidebarCloseIcon } from "lucide-react";
import { Logo } from "./logo";

const Header = () => {
    return (
        <header className='flex flex-row items-center 
            bg-gradient-to-r from-zinc-900 to-zinc-800 h-12 pl-4 
            align-center border-b border-white/25'>
          <div className="flex-1 text-zinc-500">
            <button>
              <SidebarCloseIcon></SidebarCloseIcon>
            </button>
          </div>
          <div>
            <Logo></Logo>
          </div>
        </header>
    );
}

export default Header;