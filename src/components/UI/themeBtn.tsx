'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeBtn() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-4 w-9 items-center rounded-full bg-zinc-200 transition dark:bg-zinc-700"
    >
      <span
        className={`absolute h-2 w-2 rounded-full bg-white shadow transition-transform dark:bg-zinc-900 ${
          isDark ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

