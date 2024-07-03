'use client'
import { linesContext } from '@/contexts/lineContext'
import { LinesFrameData } from '@/schemas/LinesFrameDataSchema'
import { DeleteLine, IncludeLine, UpdateLine } from '@/services/lines'
import { useContext } from 'react'

export function useLines() {
  const { data, mutate } = useContext(linesContext)

  async function handleUpdate(line: LinesFrameData) {
    const updatedLine = await UpdateLine(line)

    if (data) {
      const updatedData = [...data, updatedLine]
      mutate(updatedData, true)
    }
  }

  async function handleInsert(line: LinesFrameData) {
    const insertedLine = await IncludeLine(line)

    if (data) {
      const updatedData = [...data, insertedLine]
      mutate(updatedData, true)
    }
  }

  async function handleDelete(COD_LINH: string) {
    const deletedLine = await DeleteLine(COD_LINH)

    if (data) {
      const updatedData = data.filter((line) => line.COD_LINH !== deletedLine)
      mutate(updatedData, false)
    }
  }

  return { handleUpdate, handleInsert, handleDelete }
}
