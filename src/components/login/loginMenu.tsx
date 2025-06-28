import Logo from '../UI/logo'
import LoginBtn from './loginBtn'

export function LoginMenu() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="scale-150">
        <Logo></Logo>
      </div>
      <LoginBtn></LoginBtn>
    </div>
  )
}
