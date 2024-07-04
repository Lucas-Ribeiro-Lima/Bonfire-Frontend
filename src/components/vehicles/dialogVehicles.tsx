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
import { useVehicles } from '@/hooks/useVehicles'
import { VehicleSchema, VehiclesData } from '@/schemas/VechicleSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

type DialogContentVehicleProp = {
  vehicle: VehiclesData
}

export function DialogEditVehicle({
  vehicle: { IDN_PLAC_VEIC, NUM_VEIC, VEIC_ATIV_EMPR },
}: DialogContentVehicleProp) {
  const form = useForm<VehiclesData>({
    resolver: zodResolver(VehicleSchema),
    defaultValues: {
      IDN_PLAC_VEIC,
      NUM_VEIC,
      VEIC_ATIV_EMPR,
    },
  })

  const { handleUpdate } = useVehicles()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleUpdate)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar veículo</DialogTitle>
            <DialogDescription>
              Faça alterações no cadastro do veículo
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="NUM_VEIC"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel className="w-24">N° Veículo:</FormLabel>
                    <FormControl>
                      <Input
                        className="w-44"
                        placeholder="N° Veículo"
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="IDN_PLAC_VEIC"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel className="w-24">Placa:</FormLabel>
                    <FormControl>
                      <Input className="w-44" placeholder="Placa" {...field} />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="VEIC_ATIV_EMPR"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Ativo</FormLabel>
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
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" onClick={form.handleSubmit(handleUpdate)}>
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Form>
  )
}

export function DialogDeleteVehicle({
  vehicle: { IDN_PLAC_VEIC, NUM_VEIC, VEIC_ATIV_EMPR },
}: DialogContentVehicleProp) {
  const { handleDelete } = useVehicles()

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Deletar veículo</DialogTitle>
        <DialogDescription>Confirme a deleção deste registro</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Cancelar
          </Button>
        </DialogClose>
        <Button
          variant="destructive"
          type="submit"
          onClick={() => {
            handleDelete({ IDN_PLAC_VEIC, NUM_VEIC, VEIC_ATIV_EMPR })
          }}
        >
          Excluir
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export function DialogIncludeVehicle({
  vehicle: { IDN_PLAC_VEIC, NUM_VEIC, VEIC_ATIV_EMPR },
}: DialogContentVehicleProp) {
  const { handleInsert } = useVehicles()
  const form = useForm<VehiclesData>({
    resolver: zodResolver(VehicleSchema),
    defaultValues: {
      IDN_PLAC_VEIC,
      NUM_VEIC,
      VEIC_ATIV_EMPR,
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleInsert)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar veículo</DialogTitle>
            <DialogDescription>
              Faça alterações no cadastro do veículo
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="NUM_VEIC"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel className="w-24">N° Veículo:</FormLabel>
                    <FormControl>
                      <Input
                        className="w-44"
                        placeholder="N° Veículo"
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="IDN_PLAC_VEIC"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel className="w-24">Placa:</FormLabel>
                    <FormControl>
                      <Input className="w-44" placeholder="Placa" {...field} />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="VEIC_ATIV_EMPR"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Ativo</FormLabel>
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
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" onClick={form.handleSubmit(handleInsert)}>
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Form>
  )
}
