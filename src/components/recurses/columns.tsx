'use client'

import { recuseData } from '@/schemas/Infractions'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<recuseData>[] = [
  {
    accessorKey: 'NUM_ATA',
    header: () => <div className=" text-center font-bold">Ata</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NUM_ATA')}</div>
    ),
  },
  {
    accessorKey: 'NUM_AI',
    header: () => <div className=" text-center font-bold">N° Auto</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NUM_AI')}</div>
    ),
  },
  {
    accessorKey: 'DAT_PUBL',
    header: () => <div className=" text-center font-bold">Publicação</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('DAT_PUBL')}</div>
    ),
  },
  {
    accessorKey: 'DAT_VENC',
    header: () => <div className=" text-center font-bold">Vencimento</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('DAT_VENC')}</div>
    ),
  },
  {
    accessorKey: 'COD_LINH',
    header: () => <div className=" text-center font-bold">Linha</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('COD_LINH')}</div>
    ),
  },
  {
    accessorKey: 'NUM_VEIC',
    header: () => <div className=" text-center font-bold">Veiculo</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NUM_VEIC')}</div>
    ),
  },
  {
    accessorKey: 'IDN_PLAC_VEIC',
    header: () => <div className=" text-center font-bold">Placa</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('IDN_PLAC_VEIC')}</div>
    ),
  },
]
