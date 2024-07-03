'use client'

import { ColumnDef } from '@tanstack/react-table'
import z from 'zod'

const autoSchema = z.object({
  NUM_NOTF: z.string(),
  TIP_PENL: z.string(),
  NUM_AI: z.string(),
  NOM_CONC: z.string(),
  COD_LINH: z.string(),
  NOM_LINH: z.string(),
  NUM_VEIC: z.number(),
  IDN_PLAC_VEIC: z.string(),
  DAT_OCOR_INFR: z.number(),
  DAT_OCOR_INFR_STR: z.string(),
  DES_LOCA: z.string(),
  COD_IRRG_FISC: z.number(),
  ARTIGO: z.string(),
  DESC_OBSE: z.string(),
  NUM_MATR_FISC: z.number(),
  QTE_PONT: z.number(),
  DAT_EMIS_NOTF: z.number(),
  DAT_EMIS_NOTF_STR: z.string(),
  DAT_LIMIT_RECU: z.date(),
  VAL_INFR: z.number(),
  DAT_CANC: z.date(),
})

export type autoData = z.infer<typeof autoSchema>

export const columns: ColumnDef<autoData>[] = [
  {
    accessorKey: 'NUM_NOTF',
    header: () => <div className=" text-center font-bold">N° Notificação</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NUM_NOTF')}</div>
    ),
  },
  // {
  //     accessorKey: "TIP_PENL",
  //     header: () => <div className=' text-center font-bold'>Tipo Penal</div>,
  // },
  {
    accessorKey: 'NUM_AI',
    header: () => <div className=" text-center font-bold">N° AI</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NUM_AI')}</div>
    ),
  },
  {
    accessorKey: 'NOM_CONC',
    header: () => <div className=" text-center font-bold">Concessionária</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NOM_CONC')}</div>
    ),
  },
  {
    accessorKey: 'COD_LINH',
    header: () => <div className=" text-center font-bold">Linha</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('COD_LINH')}</div>
    ),
  },
  // {
  //     accessorKey: "NOM_LINH",
  //     header: () => <div className=' text-center font-bold'>Nome Linha</div>,
  // },
  {
    accessorKey: 'NUM_VEIC',
    header: () => <div className=" text-center font-bold">Veiculo</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('NUM_VEIC')}</div>
    ),
  },
  // {
  //     accessorKey: "IDN_PLAC_VEIC",
  //     header: () => <div className=' text-center font-bold'>Placa</div>,
  // },
  {
    accessorKey: 'DAT_OCOR_INFR',
    header: () => <div className=" text-center font-bold">Data Ocorrência</div>,
    cell: ({ row }) => {
      const data = new Date(row.getValue('DAT_OCOR_INFR')).toLocaleDateString()
      return <div className="text-center">{data}</div>
    },
  },
  {
    accessorKey: 'DES_LOCA',
    header: () => <div className=" text-center font-bold">Local</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('DES_LOCA')}</div>
    ),
  },
  // {
  //     accessorKey: "COD_IRRG_FISC",
  //     header: () => <div className=' text-center font-bold'>Irregularidade</div>,
  // },
  // {
  //     accessorKey: "ARTIGO",
  //     header: () => <div className=' text-center font-bold'>Artigo</div>,
  // },
  // {
  //     accessorKey: "DESC_OBSE",
  //     header: () => <div className=' text-center font-bold'>Observação</div>,
  // },
  // {
  //     accessorKey: "NUM_MATR_FISC",
  //     header: () => <div className=' text-center font-bold'>Fisc</div>Fisc,
  // },
  // {
  //     accessorKey: "QTE_PONT",
  //     header: () => <div className=' text-center font-bold'>Pontuação</div>,
  // },
  {
    accessorKey: 'DAT_EMIS_NOTF',
    header: () => (
      <div className=" text-center font-bold">Data Emissão Notificação</div>
    ),
    cell: ({ row }) => {
      const data = new Date(row.getValue('DAT_EMIS_NOTF')).toLocaleDateString()
      return <div className="text-center">{data}</div>
    },
  },
  // {
  //     accessorKey: "DAT_LIMIT_RECU",
  //     header: () => <div className=' text-center font-bold'>Data limite recurso</div>,
  // },
  // {
  //     accessorKey: "VAL_INFR",
  //     header: () => <div className=' text-center font-bold'>Valor</div>,
  // },
  // {
  //     accessorKey: "DAT_CANC",
  //     header: () => <div className=' text-center font-bold'>Data Canc</div>,
  // },
]
