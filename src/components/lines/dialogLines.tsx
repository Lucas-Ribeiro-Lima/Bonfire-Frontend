import { Button } from '@/components/UI/button'
import { Checkbox } from '@/components/UI/checkbox'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/UI/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/UI/form'
import { Input } from '@/components/UI/input'
import { linesContext } from '@/contexts/lineContext'
import { patchLine } from '@/hooks/lines'
import {
  LinesFrameData,
  LinesFrameDataSchema,
} from '@/schemas/LinesFrameDataSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface DialogContentLineProp {
  line: LinesFrameData
  option: string
}

export function DialogContentLine({
  line: { COD_LINH, COMPARTILHADA, ID_OPERADORA, LINH_ATIV_EMPR },
  option,
}: DialogContentLineProp) {
  const form = useForm<LinesFrameData>({
    resolver: zodResolver(LinesFrameDataSchema),
    defaultValues: {
      COD_LINH,
      ID_OPERADORA,
      COMPARTILHADA,
      LINH_ATIV_EMPR,
    },
  })

  const { data, mutate } = useContext(linesContext)

  function onSubmit({
    COMPARTILHADA,
    COD_LINH,
    LINH_ATIV_EMPR,
    ID_OPERADORA,
  }: LinesFrameData) {
    patchLine({ COD_LINH, ID_OPERADORA, COMPARTILHADA, LINH_ATIV_EMPR })

    const updatedData = data?.map((line) => {
      if (line.COD_LINH === COD_LINH) {
        return { ...line, COMPARTILHADA, LINH_ATIV_EMPR }
      }
      return line
    })

    mutate(updatedData, false)
  }

  function handleDelete() {
    toast(`Deletando a linha ${COD_LINH}`)
  }

  if (option === 'edit') {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar linha</DialogTitle>
              <DialogDescription>
                Faça alterações no cadastro da linha
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="COD_LINH"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-4">
                      <FormLabel className="w-24">Código Linha:</FormLabel>
                      <FormControl>
                        <Input
                          className="w-44"
                          placeholder="Código Linha"
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ID_OPERADORA"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-4">
                      <FormLabel className="w-24">Operadora:</FormLabel>
                      <FormControl>
                        <Input
                          className="w-44"
                          placeholder="Operadora"
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <div className="justify-left flex space-x-16">
                <FormField
                  control={form.control}
                  name="COMPARTILHADA"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormLabel>Compartilhada</FormLabel>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          ></Checkbox>
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="LINH_ATIV_EMPR"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormLabel>Ativa</FormLabel>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          ></Checkbox>
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    )
  }

  if (option === 'delete') {
    return (
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deletar linha</DialogTitle>
          <DialogDescription>
            Confirme a deleção deste registro
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="destructive" type="submit" onClick={handleDelete}>
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    )
  }
}
