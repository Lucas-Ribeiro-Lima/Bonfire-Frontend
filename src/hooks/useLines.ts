'use client'
import { linesContext } from '@/contexts/lineContext'
import { LinesFrameData } from '@/schemas/LinesFrameDataSchema'
import { DeleteLine, IncludeLine, UpdateLine } from '@/services/lines'
import { useContext } from 'react'
import { toast } from 'sonner'
import { useNotifications } from './useNotifications'

export function useLines() {
  const { data, mutate } = useContext(linesContext)
  const { handleInsert: handleInsertNotification } = useNotifications()

  async function handleUpdate(line: LinesFrameData) {
    const { linha: updatedLine, event } = await UpdateLine(line)
    handleInsertNotification(event)
    toast(event.message)

    if (data) {
      const updatedData = [...data, updatedLine]
      mutate(updatedData, true)
    }
  }

  async function handleInsert(line: LinesFrameData) {
    const { linha, event } = await IncludeLine(line)
    handleInsertNotification(event)
    toast(event.message)

    if (data) {
      const updatedData = [...data, linha]
      mutate(updatedData, true)
    }
  }

  async function handleDelete(COD_LINH: string) {
    const { COD_LINH: deletedLine, event } = await DeleteLine(COD_LINH)
    toast(event.message)

    if (data) {
      const updatedData = data.filter((line) => line.COD_LINH !== deletedLine)
      mutate(updatedData, false)
    }
  }

  return { handleUpdate, handleInsert, handleDelete }
}
