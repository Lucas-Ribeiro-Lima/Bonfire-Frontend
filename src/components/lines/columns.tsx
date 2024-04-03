'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DeleteIcon, MoreHorizontal, PencilIcon } from 'lucide-react'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from '../UI/button'
import { Checkbox } from '../UI/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../UI/dropdown-menu'

const LinesFrameDataSchema = z.object({
  COD_LINH: z.string().min(1),
  COMPARTILHADA: z.boolean(),
  ID_OPERADORA: z.number(),
  LINH_ATIV_EMPR: z.boolean(),
})

export type LinesFrameData = z.infer<typeof LinesFrameDataSchema>

export const columns: ColumnDef<LinesFrameData>[] = [
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
    accessorKey: 'COD_LINH',
    header: () => <div className=" text-center font-bold">Linha</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('COD_LINH')}</div>
    ),
  },
  {
    accessorKey: 'COMPARTILHADA',
    header: () => <div className=" text-center font-bold">Compartilhada</div>,
    cell: ({ row }) => {
      const status: string = row.getValue('COMPARTILHADA') ? 'Sim' : 'Não'
      return <div className="text-center">{status}</div>
    },
  },
  {
    accessorKey: 'ID_OPERADORA',
    header: () => <div className=" text-center font-bold">Operadora</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('ID_OPERADORA')}</div>
    ),
  },
  {
    accessorKey: 'LINH_ATIV_EMPR',
    header: () => <div className=" text-center font-bold">Status</div>,
    cell: ({ row }) => {
      const status: string = row.getValue('LINH_ATIV_EMPR')
        ? 'Ativa'
        : 'Inativa'
      return <div className="text-center">{status}</div>
    },
  },
  {
    id: 'actions',
    header: () => <div className="text-center font-bold">Ações</div>,
    cell: ({ row }) => {
      const line = row.original

      function handleEditLine() {
        toast(`Editar a linha ${line.COD_LINH}`)
        return console.log(`Editar a linha ${line.COD_LINH}`)
      }

      function handleDeleteLine() {
        toast(`Deletar a linha ${line.COD_LINH}`)
        return console.log(`Deletar a linha ${line.COD_LINH}`)
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
                  onClick={handleEditLine}
                  variant="ghost"
                  className="flex gap-1"
                >
                  <PencilIcon />
                  Editar
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  onClick={handleDeleteLine}
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
