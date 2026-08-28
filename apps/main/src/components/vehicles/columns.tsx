'use client'

import { selectColumn, ReusableActionsCell } from '@bonfire/ui'
import { VehiclesData } from '@/schemas/VechicleSchema'
import { ColumnDef } from '@tanstack/react-table'
import { DialogDeleteVehicle, DialogEditVehicle } from './dialogVehicles'

export const columns: ColumnDef<VehiclesData>[] = [
  selectColumn,
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
        editDialog={<DialogEditVehicle vehicle={row.original} />}
        deleteDialog={<DialogDeleteVehicle vehicle={row.original} />}
      />
    ),
  },
]
