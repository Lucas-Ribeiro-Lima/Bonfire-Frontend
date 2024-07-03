'use client'

import { LinesFrameData } from '@/schemas/LinesFrameDataSchema'
import { GetLines } from '@/services/lines'
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

export function LinesProvider({ children }: Readonly<LinesProviderProps>) {
  const { data, mutate } = GetLines()

  return (
    <linesContext.Provider value={{ data, mutate }}>
      {children}
    </linesContext.Provider>
  )
}
