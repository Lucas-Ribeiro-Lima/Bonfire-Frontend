'use client'

import { useInfractions } from '@/hooks/useInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import {
  ImportFormData,
  ImportFormInfractionSchema,
} from '../../schemas/ImportFormSchema'
import { Button } from '../UI/button'

export function ImportFormAutoInfraction() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImportFormData>({
    resolver: zodResolver(ImportFormInfractionSchema),
  })
  const { importing, HandleImportAutoInfractions } = useInfractions()

  return (
    <div className="h-fit space-y-4 rounded-md p-8 dark:bg-slate-950">
      <div className="flex items-center justify-center font-semibold">
        Auto de Infração
      </div>
      <form className="mt-4 flex flex-col gap-4" encType="multipart/form-data">
        <div className="flex flex-col space-y-2">
          <label htmlFor="file">
            <input {...register('file')} type="file" accept=".csv"></input>
          </label>
          {errors.file && (
            <span className="text-sm text-red-500">{errors.file.message}</span>
          )}
        </div>
        <Button
          type="submit"
          onClick={handleSubmit(HandleImportAutoInfractions)}
          variant="secondary"
          disabled={importing}
        >
          {(importing && (
            <div className="flex gap-2">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Importando...
            </div>
          )) ||
            'Importar'}
        </Button>
      </form>
    </div>
  )
}
