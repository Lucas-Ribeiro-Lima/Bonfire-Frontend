'use client'

import { ColumnDef } from '@tanstack/react-table'
import z from 'zod'

const VehicleSchema = z.object({
  IDN_PLAC_VEIC: z.string(),
  NUM_VEIC: z.number(),
  VEIC_ATIV_EMPR: z.boolean(),
})

export type VehiclesData = z.infer<typeof VehicleSchema>

export const columns: ColumnDef<VehiclesData>[] = [
  {
    accessorKey: 'IDN_PLAC_VEIC',
    header: () => <div className="text-center font-bold">Placa</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('IDN_PLAC_VEIC')}</div>
    ),
  },
  {
    accessorKey: 'NUM_VEIC',
    header: () => <div className="text-center font-bold">Veiculo</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NUM_VEIC')}</div>
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
]
