'use client'

import { postAuto } from '@/hooks/postInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  ImportFormData,
  ImportFormSecondSchema,
} from '../../schemas/ImportFormSchema'
import { Button } from '../UI/button'
import { Dialog, DialogContent, DialogTrigger } from '../UI/dialog'

const importedFiles = [
  'Teste de arquivo importado',
  'Teste de arquivo importado 2',
  'Teste de arquivo importado 3',
  'Teste de arquivo importado 4',
]

const ImportFormSegundaInstancia = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImportFormData>({
    resolver: zodResolver(ImportFormSecondSchema),
  })

  const [importing, setImporting] = useState(false)

  async function onSubmitImportSegunda(data: ImportFormData) {
    if (!data.file) throw new Error('Formulário vazio')
    setImporting(true)
    await postAuto(data.file, 2).finally(() => setImporting(false))
  }

  return (
    <Dialog>
      <div className="h-full w-5/6 rounded-md bg-slate-950">
        <div className="flex w-full items-center justify-between border-b-2 border-b-zinc-500 p-4">
          <div className="font-semibold">Segunda Instancia</div>
          <DialogTrigger>
            <Button className="h-8">Importar</Button>
          </DialogTrigger>
        </div>
        <div className="flex-1 gap-8 p-8">
          <div className="font-semibold">Arquivos importados recentemente:</div>
          {importedFiles.map((file) => {
            return <div className="m-4 rounded-md bg-slate-800 p-4">{file}</div>
          })}
        </div>
      </div>
      <DialogContent>
        <div className="space-y-4 rounded-md bg-slate-950 p-8">
          <div className="flex items-center justify-center font-semibold">
            Segunda Instância
          </div>
          <form
            className="mt-4 flex flex-col gap-4"
            encType="multipart/form-data"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="file"></label>
              <input {...register('file')} type="file" accept=".docx"></input>
              {errors.file && (
                <span className="text-sm text-red-500">
                  {errors.file.message}
                </span>
              )}
            </div>
            {(!importing && (
              <Button
                type="submit"
                onClick={handleSubmit(onSubmitImportSegunda)}
                variant="secondary"
              >
                Importar
              </Button>
            )) || (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Importando...
              </Button>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImportFormSegundaInstancia
