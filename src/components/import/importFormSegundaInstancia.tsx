'use client'

import { postAuto } from '@/hooks/postInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  ImportFormData,
  ImportFormSecondSchema,
} from '../schemas/ImportFormSchema'

// Função de handling do import
async function handleImport(auto: ImportFormData) {
  await postAuto(auto, 2)
}

const ImportFormSegundaInstancia = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImportFormData>({
    resolver: zodResolver(ImportFormSecondSchema),
  })

  return (
    <form
      onSubmit={handleSubmit(handleImport)}
      className="mt-4 flex flex-col gap-4"
      encType="multipart/form-data"
    >
      <label htmlFor="file" className="flex flex-col gap-2">
        Selecione o arquivo:
        <input
          {...register('auto.file')}
          type="file"
          accept=".docx, .pdf"
          className="file:cursor-pointer file:rounded-lg file:bg-zinc-400 file:font-semibold"
        ></input>
        {errors.auto?.file && (
          <span className="text-sm text-red-500">
            {' '}
            {errors.auto.file.message}{' '}
          </span>
        )}
      </label>
      <button
        type="submit"
        className="w-96 rounded-lg bg-green-700 p-1 font-semibold text-black hover:bg-green-500 hover:duration-1000"
      >
        Importar
      </button>
    </form>
  )
}

export default ImportFormSegundaInstancia
