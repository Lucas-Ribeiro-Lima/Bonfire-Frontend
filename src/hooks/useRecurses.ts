// Função de handling do import
import { useState } from 'react'
import { useNotifications } from '@/hooks/useNotifications'
import { ImportFormData } from '@/schemas/ImportFormSchema'
import { PostRecurse } from '@/services/recurse'
import { toast } from 'sonner'

export function useRecurses() {
  const [importingFirst, setImportingFirst] = useState(false)
  const [importingSecond, setImportingSecond] = useState(false)
  const { handleInsert: handleInsertNotification } = useNotifications()

  async function HandleImport(data: ImportFormData, instance?: number) {
    if (!data.file) return
    try {
      instance === 1 ? setImportingFirst(true) : setImportingSecond(true)
      const { event } = await PostRecurse(data.file, instance)
      toast(event.message)
      handleInsertNotification(event)
    } finally {
      instance === 1 ? setImportingFirst(false) : setImportingSecond(false)
    }
  }

  return { importingFirst, importingSecond, HandleImport }
}
