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
import { z } from 'zod'
import data from '../../tests/mocks/vehicles.json'

const VehicleSchema = z
  .object({
    IDN_PLAC_VEIC: z.string(),
    NUM_VEIC: z.number(),
    VEIC_ATIV_EMPR: z.boolean(),
    VEIC_ATIV_EMPR_STR: z.string(),
  })
  .array()

type VehiclesData = z.infer<typeof VehicleSchema>

const columns = [
  {
    key: 'IDN_PLAC_VEIC',
    label: 'placa',
  },
  {
    key: 'NUM_VEIC',
    label: 'Veículo',
  },
  {
    key: 'VEIC_ATIV_EMPR_STR',
    label: 'Status',
  },
]

export default function VehiclesLayout() {
  const [veicFilterValue, setVeicFilterValue] = useState('')
  const [placaFilterValue, setPlacaFilterValue] = useState('')

  const hasVeicFilter = Boolean(veicFilterValue)
  const hasPlacaFilter = Boolean(placaFilterValue)

  // Pagination
  const [page, setPage] = useState(1)
  const [rowsPerPage] = useState<number>(15)

  // Data fetching
  // const { data, error } = FetchData<VehiclesData>('veiculos')

  data?.forEach((item) => {
    if (item.VEIC_ATIV_EMPR) {
      item.VEIC_ATIV_EMPR_STR = 'Ativo'
    } else {
      item.VEIC_ATIV_EMPR_STR = 'Inativo'
    }
  })

  const filteredItems = useMemo(() => {
    let filteredData = [...(data || [])]
    if (hasPlacaFilter) {
      filteredData = filteredData.filter((data) =>
        data.IDN_PLAC_VEIC?.includes(placaFilterValue),
      )
    }
    if (hasVeicFilter) {
      filteredData = filteredData.filter((data) =>
        data.NUM_VEIC?.toString().includes(veicFilterValue),
      )
    }
    return filteredData
  }, [veicFilterValue, placaFilterValue, data])

  const pages = useMemo(() => {
    return Math.ceil((filteredItems || []).length / rowsPerPage)
  }, [filteredItems, rowsPerPage])

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems?.slice(start, end)
  }, [page, filteredItems])

  function handleVeicChange(event: React.ChangeEvent<HTMLInputElement>) {
    setVeicFilterValue(event.target.value)
  }

  function handlePlacaChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlacaFilterValue(event.target.value)
  }

  function handleStatusChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('To Do')
  }

  function VehiclesMenu() {
    return (
      <div className="flex w-full flex-row items-center gap-4">
        <div className="flex flex-row gap-8">
          <label className="flex flex-row gap-2 rounded-lg font-semibold text-white">
            Veículo:
            <input
              onChange={handleVeicChange}
              defaultValue=""
              type="text"
              className="w-36 rounded-lg bg-white/60 pl-1 text-black"
            ></input>
          </label>
          <label className="flex flex-row gap-2 rounded-lg font-semibold text-white">
            Placa:
            <input
              onChange={handlePlacaChange}
              defaultValue=""
              type="text"
              className="w-36 rounded-lg bg-white/60 pl-1 text-black"
            ></input>
          </label>
          <label className="flex flex-row gap-2 rounded-lg font-semibold text-white">
            <div>Status:</div>
            <input
              onChange={handleStatusChange}
              type="checkbox"
              placeholder="ativo"
              checked={true}
              className="rounded-lg bg-white/60 pl-1 text-black"
            ></input>
          </label>
        </div>
        {/* <button className="bg-emerald-500 hover:bg-emerald-400 rounded-lg text-black p-2 
                  font-semibold"> Cadastrar </button>
                  <button className="bg-white/60 hover:bg-white/90 rounded-lg text-black p-2 
                font-semibold"> Desativar </button> */}
      </div>
    )
  }

  // if (error) return <Error></Error>

  if (!data) return <Spinner color="primary" />

  return (
    <div className="flex w-full flex-col gap-4">
      <VehiclesMenu></VehiclesMenu>
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
            <TableRow key={item.IDN_PLAC_VEIC}>
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
