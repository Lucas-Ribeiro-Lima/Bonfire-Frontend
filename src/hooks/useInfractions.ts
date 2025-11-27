import { ImportFormData } from '@/schemas/ImportFormSchema'
import { PostAutoInfraction } from '@/services/infractions'
import { useState } from 'react'
import { toast } from 'sonner'
import { useNotifications } from './useNotifications'

export function useInfractions() {
  // Função de handling do import
  const [importing, setImporting] = useState(false)
  const { handleInsert: handleInsertNotification } = useNotifications()

  async function HandleImportAutoInfractions(data: ImportFormData) {
    if (!data.file) return
    try {
      setImporting(true)
      const { event } = await PostAutoInfraction(data.file)
      toast(event.message)
      handleInsertNotification(event)
    } finally {
      setImporting(false)
    }
  }

  return { importing, HandleImportAutoInfractions }
}
