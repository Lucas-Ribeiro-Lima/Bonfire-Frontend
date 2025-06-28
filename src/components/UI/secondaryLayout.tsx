'use client'
import { ReactNode } from 'react'

interface SecondaryLayoutProp {
  children?: ReactNode
}

export function SecondaryLayout({ children }: SecondaryLayoutProp) {
  return (
    <div className="flex h-screen flex-col dark:bg-gradient-to-r dark:from-gray-900 dark:via-sky-950 dark:to-slate-900">
      <div className="relative bottom-10 flex flex-1 items-center justify-center">
        {children}
      </div>
    </div>
  )
}
