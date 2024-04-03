'use client'

import { postAuto } from '@/hooks/postInfractions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  ImportFormData,
  ImportFormSecondSchema,
} from '../../schemas/ImportFormSchema'
import { Button } from '../UI/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../UI/form'
import { Input } from '../UI/input'

// Função de handling do import

const ImportFormSegundaInstancia = () => {
  const form = useForm<ImportFormData>({
    resolver: zodResolver(ImportFormSecondSchema),
  })

  async function onSubmitImportSegunda(file: ImportFormData) {
    await postAuto(file, 2).then(() => toast('Importando Arquivo'))
  }

  return (
    <div className="rounded-md bg-slate-950 p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitImportSegunda)}
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

export default ImportFormSegundaInstancia
