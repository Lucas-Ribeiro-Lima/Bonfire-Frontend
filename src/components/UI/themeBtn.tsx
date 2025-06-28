'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeBtn() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <></>

  return (
    <div className="relative flex h-4 w-12 rounded-xl border border-neutral-800/10">
      <div
        className={`absolute h-full w-full rounded-xl ${theme === 'light' ? 'bg-zinc-100' : 'bg-zinc-800'} `}
      ></div>
      <div
        className={`z-10 flex items-center transition-transform ${theme === 'light' && 'translate-x-8'}`}
      >
        {theme === 'light' ? (
          <Sun
            className="cursor-pointer fill-amber-400 text-amber-600"
            width={16}
            height={16}
            onClick={() => setTheme('dark')}
          />
        ) : (
          <Moon
            className="cursor-pointer fill-cyan-800 text-cyan-400"
            width={16}
            height={16}
            onClick={() => setTheme('light')}
          />
        )}
      </div>
    </div>
  )
}
