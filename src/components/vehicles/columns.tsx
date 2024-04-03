'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/UI/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { DeleteIcon, MoreHorizontal, PencilIcon } from 'lucide-react'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from '../UI/button'
import { Checkbox } from '../UI/checkbox'

const VehicleSchema = z.object({
  NUM_VEIC: z.number(),
  IDN_PLAC_VEIC: z.string(),
  VEIC_ATIV_EMPR: z.boolean(),
})

export type VehiclesData = z.infer<typeof VehicleSchema>

export const columns: ColumnDef<VehiclesData>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'NUM_VEIC',
    header: () => <div className="text-center font-bold">Veiculo</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NUM_VEIC')}</div>
    ),
  },
  {
    accessorKey: 'IDN_PLAC_VEIC',
    header: () => <div className="text-center font-bold">Placa</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('IDN_PLAC_VEIC')}</div>
    ),
  },
  {
    accessorKey: 'VEIC_ATIV_EMPR',
    header: () => <div className="text-center font-bold">Status</div>,
    cell: ({ row }) => {
      const status: string = row.getValue('VEIC_ATIV_EMPR')
        ? 'Ativo'
        : 'Inativo'
      return <div className="text-center">{status}</div>
    },
  },
  {
    id: 'actions',
    header: () => <div className="text-center font-bold">Ações</div>,
    cell: ({ row }) => {
      const vehicle = row.original

      function handleEditVeic() {
        toast(`Editar o veiculo ${vehicle.NUM_VEIC}`)
        return console.log(`Editar o veiculo ${vehicle.NUM_VEIC}`)
      }

      function handleDeleteVeic() {
        toast(`Deletar o veiculo ${vehicle.NUM_VEIC}`)
        return console.log(`Deletar o veiculo ${vehicle.NUM_VEIC}`)
      }

      return (
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button
                  onClick={handleEditVeic}
                  variant="ghost"
                  className="flex gap-1"
                >
                  <PencilIcon />
                  Editar
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  onClick={handleDeleteVeic}
                  variant="destructive"
                  className="flex gap-1"
                >
                  <DeleteIcon />
                  Excluir
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
