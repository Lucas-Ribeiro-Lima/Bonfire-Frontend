'use client'

import { selectColumn, ReusableActionsCell } from '@bonfire/ui'
import { LinesFrameData } from '@/schemas/LinesFrameDataSchema'
import { ColumnDef } from '@tanstack/react-table'
import { DialogDeleteLine, DialogEditLine } from './dialogLines'

export const columns: ColumnDef<LinesFrameData>[] = [
  selectColumn,
  {
    accessorKey: 'COD_LINH',
    header: () => <div className="text-center font-bold">Linha</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('COD_LINH')}</div>
    ),
  },
  {
    accessorKey: 'COMPARTILHADA',
    header: () => <div className="text-center font-bold">Compartilhada</div>,
    cell: ({ row }) => {
      const status: string = row.getValue('COMPARTILHADA') ? 'Sim' : 'Não'
      return <div className="text-center">{status}</div>
    },
  },
  {
    accessorKey: 'ID_OPERADORA',
    header: () => <div className="text-center font-bold">Operadora</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('ID_OPERADORA')}</div>
    ),
  },
  {
    accessorKey: 'LINH_ATIV_EMPR',
    header: () => <div className="text-center font-bold">Status</div>,
    cell: ({ row }) => {
      const status: string = row.getValue('LINH_ATIV_EMPR')
        ? 'Ativa'
        : 'Inativa'
      return <div className="text-center">{status}</div>
    },
  },
  {
    accessorKey: 'DAT_BAIX',
    header: () => <div className="text-center font-bold">Data de Baixa</div>,
    cell: ({ row }) => {
      const val = row.getValue('DAT_BAIX') as string | null | undefined
      if (!val) {
        return <div className="text-center">-</div>
      }
      const date = new Date(val)
      const formatted = isNaN(date.getTime())
        ? val
        : date.toLocaleDateString('pt-BR')
      return <div className="text-center">{formatted}</div>
    },
  },
  {
    id: 'actions',
    header: () => <div className="text-center font-bold">Ações</div>,
    cell: ({ row }) => (
      <ReusableActionsCell
        editDialog={<DialogEditLine line={row.original} />}
        deleteDialog={<DialogDeleteLine line={row.original} />}
      />
    ),
  },
]
