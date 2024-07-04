'use client'

import { ConsortiumFrameData } from '@/schemas/ConsortiumSchema'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<ConsortiumFrameData>[] = [
  {
    accessorKey: 'id',
    header: 'Código',
  },
  {
    accessorKey: 'nome',
    header: 'Nome',
  },
  {
    accessorKey: 'concessionaria',
    header: 'Concessionaria',
  },
]
