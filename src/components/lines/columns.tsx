'use client'

import { ColumnDef } from '@tanstack/react-table'
import z from 'zod'

const LinesFrameDataSchema = z.object({
  COD_LINH: z.string().min(1),
  COMPARTILHADA: z.boolean(),
  ID_OPERADORA: z.number(),
  LINH_ATIV_EMPR: z.boolean(),
})

export type LinesFrameData = z.infer<typeof LinesFrameDataSchema>

export const columns: ColumnDef<LinesFrameData>[] = [
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
]
