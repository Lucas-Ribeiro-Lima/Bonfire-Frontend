import { ImportFormData } from '@/schemas/ImportFormSchema'
import {
  PostAutoFirstInstance,
  PostAutoSecondInstance,
} from '@/services/infractions'
import { useState } from 'react'

export function useInfractionsFirst() {
  // Função de handling do import
  const [importing, setImporting] = useState(false)
  function HandleImportFirst(data: ImportFormData) {
    if (!data.file) return
    try {
      setImporting(true)
      PostAutoFirstInstance(data.file).finally(() => setImporting(false))
    } finally {
      setImporting(false)
    }
  }
  return { importing, HandleImportFirst }
}

// Função de handling do import
export function useInfractionsSecond() {
  const [importing, setImporting] = useState(false)

  function HandleImportSecond(data: ImportFormData) {
    if (!data.file) return
    try {
      setImporting(true)
      PostAutoSecondInstance(data.file).finally(() => setImporting(false))
    } finally {
      setImporting(false)
    }
  }

  return { importing, HandleImportSecond }
}
