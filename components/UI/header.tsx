import { Logo } from './logo'

const Header = () => {
  return (
    <header
      className="align-center flex h-12 
            flex-row items-center border-b border-white/25 bg-gradient-to-r 
            from-zinc-900 to-zinc-800 pl-4"
    >
      <div className="flex-1 text-zinc-500"></div>
      <div>
        <Logo></Logo>
      </div>
    </header>
  )
}

export default Header
