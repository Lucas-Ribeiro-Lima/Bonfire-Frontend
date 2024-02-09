import Logo from '../UI/logo'
import LoginForm from './loginForm'

const LoginMenu = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="scale-150 pl-5">
        <Logo></Logo>
      </div>
      <LoginForm></LoginForm>
    </div>
  )
}

export default LoginMenu
