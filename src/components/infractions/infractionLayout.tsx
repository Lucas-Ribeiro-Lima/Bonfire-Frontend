'use client'

import { FetchInfractionsFirstInstance } from '@/hooks/fetchData'
import { DEFAULTDATA } from '@/services/utils'
import {
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react'
import React, { useMemo, useState } from 'react'
import { z } from 'zod'

const autosSchema = z.object({
  autos: z
    .object({
      NUM_NOTF: z.string(),
      TIP_PENL: z.string(),
      NUM_AI: z.string(),
      NOM_CONC: z.string(),
      COD_LINH: z.number(),
      NOM_LINH: z.string(),
      NUM_VEIC: z.number(),
      IDN_PLAC_VEIC: z.string(),
      DAT_OCOR_INFR: z.number(),
      DAT_OCOR_INFR_STR: z.string(),
      DES_LOCA: z.string(),
      COD_IRRG_FISC: z.string(),
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
    .array(),
})

export type autosData = z.infer<typeof autosSchema>
// export type autosData = {
//   autos: {
//     NUM_NOTF: string
//     TIP_PENL: string
//     NUM_AI: string
//     NOM_CONC: string
//     COD_LINH: number
//     NOM_LINH: string
//     NUM_VEIC: number
//     IDN_PLAC_VEIC: string
//     DAT_OCOR_INFR: Date
//     DES_LOCA: string
//     COD_IRRG_FISC: number
//     ARTIGO: string
//     DESC_OBSE: string
//     NUM_MATR_FISC: number
//     QTE_PONT: number
//     DAT_EMIS_NOTF: Date
//     DAT_LIMIT_RECU: Date
//     VAL_INFR: number
//     DAT_CANC: Date
//   }[]
//   counter: {
//     TOTAL: number
//   }[]
// }

const columns = [
  {
    key: 'NUM_NOTF',
    label: 'N° Notificação',
  },
  // {
  //     key: "TIP_PENL",
  //     label: "Tipo Penal",
  // },
  {
    key: 'NUM_AI',
    label: 'N° AI',
  },
  {
    key: 'NOM_CONC',
    label: 'Concessionária',
  },
  {
    key: 'COD_LINH',
    label: 'Linha',
  },
  // {
  //     key: "NOM_LINH",
  //     label: "Nome Linha",
  // },
  {
    key: 'NUM_VEIC',
    label: 'Veiculo',
  },
  // {
  //     key: "IDN_PLAC_VEIC",
  //     label: "Placa",
  // },
  {
    key: 'DAT_OCOR_INFR_STR',
    label: 'Data Ocorrência',
  },
  {
    key: 'DES_LOCA',
    label: 'Local',
  },
  // {
  //     key: "COD_IRRG_FISC",
  //     label: "Irregularidade",
  // },
  // {
  //     key: "ARTIGO",
  //     label: "Artigo",
  // },
  // {
  //     key: "DESC_OBSE",
  //     label: "Observação",
  // },
  // {
  //     key: "NUM_MATR_FISC",
  //     label: "Fisc",
  // },
  // {
  //     key: "QTE_PONT",
  //     label: "Pontuação",
  // },
  {
    key: 'DAT_EMIS_NOTF_STR',
    label: 'Data Emissão Notificação',
  },
  // {
  //     key: "DAT_LIMIT_RECU",
  //     label: "Data limite recurso",
  // },
  // {
  //     key: "VAL_INFR",
  //     label: "Valor",
  // },
  // {
  //     key: "DAT_CANC",
  //     label: "Data Canc",
  // },
]

export default function InfractionLayout() {
  // Data handling
  const [date, setDate] = useState<string>(DEFAULTDATA)
  const [page, setPage] = useState(1)
  const [veicValueFilter, setVeicValueFilter] = useState('')
  const [linhaValueFilter, setLinhaValueFilter] = useState('')
  const [autoValueFilter, setAutoValueFilter] = useState('')
  const [rowsPerPage] = useState<number>(15)

  const hasVeicFilter = Boolean(veicValueFilter)
  const hasLinhaFilter = Boolean(linhaValueFilter)
  const hasAutoFilter = Boolean(autoValueFilter)

  // Data fetch
  const { data, error } = FetchInfractionsFirstInstance<autosData>(
    `/autoInfracao/primeiraInstancia/${date}`,
  )

  data.autos.forEach((auto) => {
    auto.DAT_EMIS_NOTF_STR = new Date(auto.DAT_EMIS_NOTF).toLocaleDateString()
    auto.DAT_OCOR_INFR_STR = new Date(auto.DAT_OCOR_INFR).toLocaleDateString()
  })

  const filteredItems = useMemo(() => {
    let filteredData = [...(data.autos ?? [])]

    if (hasVeicFilter) {
      filteredData = filteredData.filter((auto) =>
        auto.NUM_VEIC?.toString().includes(veicValueFilter),
      )
    }

    if (hasAutoFilter) {
      filteredData = filteredData.filter((auto) =>
        auto.NUM_AI?.includes(autoValueFilter),
      )
    }

    if (hasLinhaFilter) {
      filteredData = filteredData.filter((auto) =>
        auto.COD_LINH.toString().includes(linhaValueFilter),
      )
    }

    return filteredData
  }, [data, veicValueFilter, linhaValueFilter, autoValueFilter])

  // Pagination
  const pages = useMemo(() => {
    return Math.ceil((filteredItems || []).length / rowsPerPage)
  }, [rowsPerPage, filteredItems])

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, data, filteredItems])

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value)
  }

  function handleVeicChange(event: React.ChangeEvent<HTMLInputElement>) {
    setVeicValueFilter(event.target.value)
  }

  function handleAiChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAutoValueFilter(event.target.value)
  }

  function handleLinhaChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLinhaValueFilter(event.target.value)
  }

  // Early returns
  if (error) return <div>{error.message}</div>

  // Early return if data is not yet available
  if (!data) return <Spinner color="primary" />

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative flex flex-col gap-8">
        <div className="flex flex-row gap-4">
          <label className="flex gap-2 rounded-lg font-semibold text-white">
            <>Data</>
            <input
              onChange={handleDateChange}
              defaultValue={DEFAULTDATA}
              type="date"
              className="w-36 rounded-lg bg-white/60 pl-1 text-black"
            ></input>
            {/* <input type="date" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input> */}
          </label>
          <label className="flex gap-2 rounded-lg font-semibold text-white">
            <>N° AI</>
            <input
              onChange={handleAiChange}
              defaultValue=""
              type="text"
              className="w-36 rounded-lg bg-white/60 pl-1 text-black"
            ></input>
          </label>
          <label className="flex gap-2 rounded-lg font-semibold text-white">
            <>Veiculo</>
            <input
              onChange={handleVeicChange}
              defaultValue=""
              type="text"
              className="w-36 rounded-lg bg-white/60 pl-1 text-black"
            ></input>
          </label>
          <label className="flex gap-2 rounded-lg font-semibold text-white">
            <>Linha</>
            <input
              onChange={handleLinhaChange}
              defaultValue=""
              type="text"
              className="w-36 rounded-lg bg-white/60 pl-1 text-black"
            ></input>
          </label>
        </div>
      </div>
      <Table
        aria-label="First instance infractions table"
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page: number) => setPage(page)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody items={items} emptyContent={'Nada Encontrado'}>
          {(item) => (
            <TableRow key={item.NUM_NOTF}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
