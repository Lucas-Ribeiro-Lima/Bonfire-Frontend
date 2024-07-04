import { ImportFormData } from '@/schemas/ImportFormSchema'
import {
  PostAutoFirstInstance,
  PostAutoSecondInstance,
} from '@/services/infractions'
import { useState } from 'react'
import { toast } from 'sonner'
import { useNotifications } from './useNotifications'

export function useInfractionsFirst() {
  // Função de handling do import
  const [importing, setImporting] = useState(false)
  const { handleInsert: handleInsertNotification } = useNotifications()

  async function HandleImportFirst(data: ImportFormData) {
    if (!data.file) return
    try {
      setImporting(true)
      const { event } = await PostAutoFirstInstance(data.file)
      toast(event.message)
      handleInsertNotification(event)
    } finally {
      setImporting(false)
    }
  }

  return { importing, HandleImportFirst }
}

// Função de handling do import
export function useInfractionsSecond() {
  const [importing, setImporting] = useState(false)
  const { handleInsert: handleInsertNotification } = useNotifications()

  async function HandleImportSecond(data: ImportFormData) {
    if (!data.file) return
    try {
      setImporting(true)
      const { event } = await PostAutoSecondInstance(data.file)
      toast(event.message)
      handleInsertNotification(event)
    } finally {
      setImporting(false)
    }
  }

  return { importing, HandleImportSecond }
}
