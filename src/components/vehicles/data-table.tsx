'use client'

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/UI/table'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Button } from '../UI/button'
import { Input } from '../UI/input'
import { DialogIncludeVehicle } from './dialogVehicles'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      rowSelection,
    },
  })

  return (
    <div className="rounded-md border dark:bg-slate-950 p-2">
      <div className="flex items-center gap-4 py-4 pl-4">
        <Input
          placeholder="Veiculo"
          value={
            (table.getColumn('NUM_VEIC')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('NUM_VEIC')?.setFilterValue(event.target.value)
          }
          className="w-36"
        />
        <Input
          placeholder="Placa"
          value={
            (table.getColumn('IDN_PLAC_VEIC')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('IDN_PLAC_VEIC')?.setFilterValue(event.target.value)
          }
          className="w-36"
        />
        <Dialog>
          <DialogTrigger>
            <Button className="mr-8 self-end">Incluir</Button>
          </DialogTrigger>
          <div className="hidden">
            <DialogIncludeVehicle
              vehicle={{
                IDN_PLAC_VEIC: '',
                NUM_VEIC: '',
                VEIC_ATIV_EMPR: false,
              }}
            ></DialogIncludeVehicle>
          </div>
        </Dialog>
      </div>
      <div className="borde rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                {`Total de veiculos:  ${table.getRowCount()}`}
              </TableCell>
              <TableCell>
                <div className="flex-1 text-sm text-muted-foreground">
                  {table.getFilteredSelectedRowModel().rows.length} de{' '}
                  {table.getFilteredRowModel().rows.length} veiculo(s)
                  selecionados.
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    Next
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
