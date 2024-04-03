'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/UI/form'
import { postAuto } from '@/hooks/postInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  ImportFormData,
  ImportFormFirstSchema,
} from '../../schemas/ImportFormSchema'
import { Button } from '../UI/button'
import { Input } from '../UI/input'

const ImportFormPrimeiraInstancia = () => {
  const form = useForm<ImportFormData>({
    resolver: zodResolver(ImportFormFirstSchema),
  })

  // Função de handling do import
  async function onSubmitImport(file: ImportFormData) {
    console.log(file)
    await postAuto(file, 1).then(() => toast('Importando Arquivo'))
  }

  return (
    <div className="rounded-md bg-slate-950 p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitImport)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Arquivo</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default ImportFormPrimeiraInstancia
