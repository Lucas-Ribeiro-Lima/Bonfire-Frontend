'use client'

import { useGetLines } from '@/hooks/lines'
import { LinesFrameData } from '@/schemas/LinesFrameDataSchema'
import { createContext } from 'react'
import { KeyedMutator } from 'swr'

type LinesContextProps = {
  data: LinesFrameData[] | undefined
  mutate: KeyedMutator<LinesFrameData[]>
}

type LinesProviderProps = {
  children: React.ReactNode
}

export const linesContext = createContext({} as LinesContextProps)

export function LinesProvider({ children }: LinesProviderProps) {
  const { data, mutate } = useGetLines()

  return (
    <linesContext.Provider value={{ data, mutate }}>
      {children}
    </linesContext.Provider>
  )
}
