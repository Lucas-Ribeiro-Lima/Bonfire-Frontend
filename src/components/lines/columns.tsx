'use client'

import { Button } from '@/components/UI/button'
import { Checkbox } from '@/components/UI/checkbox'
import { Dialog, DialogTrigger } from '@/components/UI/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/UI/dropdown-menu'
import { LinesFrameData } from '@/schemas/LinesFrameDataSchema'
import { DeleteLine, UpdateLine } from '@/services/lines'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, PencilIcon } from 'lucide-react'
import { useState } from 'react'
import { DialogDeleteLine, DialogEditLine } from './dialogLines'

export const columns: ColumnDef<LinesFrameData>[] = [
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
      const [dialogOption, setDialogOption] = useState<
        'edit' | 'include' | 'delete'
      >('include')

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
              <DialogEditLine
                line={line}
                onUpdateLine={UpdateLine}
              ></DialogEditLine>
            )}
            {dialogOption === 'delete' && (
              <DialogDeleteLine
                line={line}
                onDeleteLine={DeleteLine}
              ></DialogDeleteLine>
            )}
          </Dialog>
        </div>
      )
    },
  },
]
