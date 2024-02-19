import { FC, ReactNode } from 'react'
import Footer from './footer'

interface SecondaryLayoutProp {
  children: ReactNode
}

const SecondaryLayout: FC<SecondaryLayoutProp> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-r from-gray-900 via-sky-950 to-slate-900">
      <div className="relative bottom-10 flex flex-1 items-center justify-center">
        {children}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default SecondaryLayout
