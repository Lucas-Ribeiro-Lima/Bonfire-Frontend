'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

interface SecondaryLayoutProp {
  children?: ReactNode
  session?: Session
}

const SecondaryLayout: FC<SecondaryLayoutProp> = ({
  children,
  session,
}: SecondaryLayoutProp) => {
  return (
    <SessionProvider session={session}>
      <div className="flex h-screen flex-col bg-gradient-to-r from-gray-900 via-sky-950 to-slate-900">
        <div>
          <Header></Header>
        </div>
        <div className="relative bottom-10 flex flex-1 items-center justify-center">
          {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </SessionProvider>
  )
}

export default SecondaryLayout
