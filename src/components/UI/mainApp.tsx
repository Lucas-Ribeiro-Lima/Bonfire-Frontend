import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import { SignInBtn } from '../login/loginBtn'
import LogoCompleta from './logo'

interface MainAppProps {
  children: ReactNode
  title?: string
}

function MainApp({ children, title }: MainAppProps) {
  const { status } = useSession()
  if (status === 'authenticated')
    return (
      <main className=" flex h-full flex-col items-center p-4">
        <h1
          className="bg-gradient-to-r from-sky-500 via-sky-700 to-sky-400 bg-clip-text p-2 
      text-2xl font-semibold text-transparent"
        >
          {title}
        </h1>
        {children}
      </main>
    )
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
