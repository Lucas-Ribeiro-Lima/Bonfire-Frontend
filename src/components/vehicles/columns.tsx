'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/UI/dropdown-menu'
import { VehiclesData } from '@/schemas/VechicleSchema'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, PencilIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../UI/button'
import { Checkbox } from '../UI/checkbox'
import { Dialog, DialogTrigger } from '../UI/dialog'
import { DialogDeleteVehicle, DialogEditVehicle } from './dialogVehicles'

export const columns: ColumnDef<VehiclesData>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          table.getIsSomePageRowsSelected() ||
          'indeterminate'
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
      const [dialogOption, setDialogOption] = useState<'edit' | 'delete'>(
        'edit',
      )

      return (
        <div className="flex justify-center">
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => setDialogOption('edit')}
                      variant="ghost"
                      className="flex gap-1"
                    >
                      <PencilIcon />
                      Editar
                    </Button>
                  </DialogTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => setDialogOption('delete')}
                      variant="destructive"
                      className="flex gap-1"
                    >
                      <PencilIcon />
                      Excluir
                    </Button>
                  </DialogTrigger>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {dialogOption === 'edit' && (
              <DialogEditVehicle vehicle={vehicle}></DialogEditVehicle>
            )}
            {dialogOption === 'delete' && (
              <DialogDeleteVehicle vehicle={vehicle}></DialogDeleteVehicle>
            )}
          </Dialog>
        </div>
      )
    },
  },
]
