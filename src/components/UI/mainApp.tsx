import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import { SignInBtn } from '../login/loginBtn'
import LogoCompleta from './logo'

interface MainAppProps {
  children: ReactNode
  title?: string
}

function MainApp({ children }: MainAppProps) {
  const { status } = useSession()
  if (status === 'authenticated')
    return (
      <main className=" flex h-full flex-col items-center p-4">{children}</main>
    )
  else
    return (
      <main className=" flex h-full flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-20">
          <LogoCompleta></LogoCompleta>
          <SignInBtn></SignInBtn>
        </div>
      </main>
    )
}

export default MainApp
