'use client'

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
import { useMemo, useState } from 'react'
import { FetchInfractionsFirstInstance } from '@/hooks/fetchData'

export type autosData = {
  autos: {
    NUM_NOTF: string
    TIP_PENL: string
    NUM_AI: string
    NOM_CONC: string
    COD_LINH: number
    NOM_LINH: string
    NUM_VEIC: number
    IDN_PLAC_VEIC: string
    DAT_OCOR_INFR: Date
    DES_LOCA: string
    COD_IRRG_FISC: number
    ARTIGO: string
    DESC_OBSE: string
    NUM_MATR_FISC: number
    QTE_PONT: number
    DAT_EMIS_NOTF: Date
    DAT_LIMIT_RECU: Date
    VAL_INFR: number
    DAT_CANC: Date
  }[]
  counter: {
    TOTAL: number
  }[]
}

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
    key: 'DATA_OCOR_INFR',
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
    key: 'DAT_EMIS_NOTF',
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
  const [date, setDate] = useState<string>('2024-01-01')
  const handleDateChange = (event: any) => {
    const newDate = event.target.value
    setDate(newDate)
  }
  // Data fetch
  const { data, error, isLoading } = FetchInfractionsFirstInstance<autosData>(
    `/autoInfracao/primeiraInstancia/${date}`,
  )

  // Pagination
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(15)

  const pages = Math.ceil(data?.autos.length / rowsPerPage)

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return data?.autos.slice(start, end)
  }, [page, data])

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
              type="date"
              className="w-36 rounded-lg bg-white/60 pl-1 text-black"
            ></input>
            {/* <input type="date" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input> */}
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
                onChange={(page) => setPage(page)}
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
