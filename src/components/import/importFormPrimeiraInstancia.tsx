'use client'

import { postAuto } from '@/hooks/postInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '../UI/button'
import { Input } from '../UI/input'
import {
  ImportFormData,
  ImportFormFirstSchema,
} from '../schemas/ImportFormSchema'

const ImportFormPrimeiraInstancia = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImportFormData>({
    resolver: zodResolver(ImportFormFirstSchema),
  })

  // Função de handling do import
  async function handleImport(auto: ImportFormData) {
    await postAuto(auto, 1).then(() => toast('Importando Arquivo'))
  }

  return (
    <div className="flex w-fit items-center justify-center rounded-lg bg-slate-950 p-8">
      <form
        onSubmit={handleSubmit(handleImport)}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <label htmlFor="firstInstanceFile" className=" flex flex-col gap-2">
          Selecione o arquivo de primeira instância:
        </label>
        <div className="flex gap-2 ">
          <Input
            {...register('auto.file')}
            id="firstInstanceFile"
            type="file"
            accept=".csv"
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

export default ImportFormPrimeiraInstancia
