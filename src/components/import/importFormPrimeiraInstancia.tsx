'use client'

import { postAuto } from '@/hooks/postInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  ImportFormData,
  ImportFormFirstSchema,
} from '../../schemas/ImportFormSchema'
import { Button } from '../UI/button'
import { Dialog, DialogContent, DialogTrigger } from '../UI/dialog'
import { useState } from 'react'

const importedFiles = [
  'Teste de arquivo importado',
  'Teste de arquivo importado 2',
  'Teste de arquivo importado 3',
  'Teste de arquivo importado 4',
]

const ImportFormPrimeiraInstancia = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImportFormData>({
    resolver: zodResolver(ImportFormFirstSchema),
  })

  const [importing, setImporting] = useState(false)

  // Função de handling do import
  async function onSubmitImport(data: ImportFormData) {
    if (!data.file) throw new Error('Formulário vazio')
    setImporting(true)
    await postAuto(data.file, 1).finally(() => setImporting(false))
  }

  return (
    <Dialog>
      <div className="h-full w-5/6 rounded-md bg-slate-950">
        <div className="flex w-full items-center justify-between border-b-2 border-b-zinc-500 p-4">
          <div className="font-semibold">Primeira Instancia</div>
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
            Primeira Instância
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
            <Button
              type="submit"
              onClick={handleSubmit(onSubmitImport)}
              variant="secondary"
            >
              {(!importing && 'Importar') || 'Importing...'}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImportFormPrimeiraInstancia
