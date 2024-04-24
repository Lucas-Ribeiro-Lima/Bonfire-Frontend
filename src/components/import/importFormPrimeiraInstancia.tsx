'use client'

import { postAuto } from '@/hooks/postInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  ImportFormData,
  ImportFormFirstSchema,
} from '../../schemas/ImportFormSchema'
import { Button } from '../UI/button'

const ImportFormPrimeiraInstancia = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImportFormData>({
    resolver: zodResolver(ImportFormFirstSchema),
  })

  // Função de handling do import
  async function onSubmitImport(data: ImportFormData) {
    if (!data.file) throw new Error('Formulário vazio')
    await postAuto(data.file, 1)
  }

  return (
    <div className="space-y-4 rounded-md bg-slate-950 p-8">
      <div className="flex items-center justify-center font-semibold">
        Primeira Instância
      </div>
      <form className="mt-4 flex flex-col gap-4" encType="multipart/form-data">
        <div className="flex flex-col space-y-2">
          <label htmlFor="file"></label>
          <input {...register('file')} type="file" accept=".csv"></input>
          {errors?.file && (
            <span className="text-sm text-red-500">{errors.file.message}</span>
          )}
        </div>
        <Button
          type="submit"
          onClick={handleSubmit(onSubmitImport)}
          variant="secondary"
        >
          Importar
        </Button>
      </form>
    </div>
  )
}

export default ImportFormPrimeiraInstancia
