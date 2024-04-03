'use client'

import { postAuto } from '@/hooks/postInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../UI/button'
import { Input } from '../UI/input'
import {
  ImportFormData,
  ImportFormSecondSchema,
} from '../schemas/ImportFormSchema'
import { toast } from 'sonner'

// Função de handling do import
async function handleImport(auto: ImportFormData) {
  await postAuto(auto, 2).then(() => toast('Importando Arquivo'))
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
    <div className="flex w-fit items-center justify-center rounded-lg bg-slate-950 p-8">
      <form
        onSubmit={handleSubmit(handleImport)}
        className="mt-4 flex flex-col gap-4"
        encType="multipart/form-data"
      >
        <label htmlFor="secondInstanceFile" className="flex flex-col gap-2">
          Selecione o arquivo de segunda instância:
        </label>
        <div className="flex gap-2 ">
          <Input
            {...register('auto.file')}
            id="secondInstanceFile"
            type="file"
            accept=".docx"
            className="bg-slate-800"
          ></Input>
          <Button type="submit" variant="secondary">
            Importar
          </Button>
        </div>
        {errors.auto?.file && (
          <span className="text-sm text-red-500">
            {errors.auto.file.message}
          </span>
        )}
      </form>
    </div>
  )
}

export default ImportFormSegundaInstancia
