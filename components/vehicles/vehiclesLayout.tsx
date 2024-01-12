'use client'

import { FetchData } from "../../hooks/fetchData";
import { Error } from '../UI/error'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Pagination, Spinner } from "@nextui-org/react";
import { useMemo, useState } from "react";

type VehiclesData = {
    veiculos: {
        IDN_PLAC_VEIC: string,
        NUM_VEIC: number,
        VEIC_ATIV_EMPR: boolean
    }[]
}

const columns = [
    {
        key: "IDN_PLAC_VEIC",
        label: "placa",
    },
    {
        key: "NUM_VEIC",
        label: "Veículo",
    },
    {
        key: "VEIC_ATIV_EMPR",
        label: "Status"     
    }
]

function VehiclesMenu() {
    return (
        <div className="flex flex-row w-full items-center gap-4">
            <div className="flex flex-row gap-2">
                <label className="flex flex-row gap-2 text-white rounded-lg font-semibold">
                    Veículo:
                    <input type="text" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input>
                </label>
                <label className="flex flex-row gap-2 text-white rounded-lg font-semibold">
                    Placa:
                    <input type="text" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input>
                </label>
            </div>
            <button className="flex justify-center items-center p-2 bg-white/60 hover:bg-white/90 
                rounded-lg text-black font-semibold"> Filtrar </button>
            {/* <button className="bg-emerald-500 hover:bg-emerald-400 rounded-lg text-black p-2 
                font-semibold"> Cadastrar </button>
            <button className="bg-white/60 hover:bg-white/90 rounded-lg text-black p-2 
                font-semibold"> Desativar </button> */}
        </div>
    )
}

export default function VehiclesLayout() {

    // Pagination
    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState<number>(15);

    //Data fetching  
    const { data, error, isLoading } = FetchData<VehiclesData>('veiculos')

    const pages = Math.ceil(data?.veiculos.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
    
        return data?.veiculos.slice(start, end);
      }, [page, data]);

    if (error) return <Error></Error>

    if (!data) return <Spinner color="danger" />;


    return (
        <div className="flex flex-col w-full gap-4">
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
                                color="danger"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}/>
                        </div>
                    ) : null
                }>
                <TableHeader >
                    {columns.map((column) =>
                        <TableColumn key={column.key}>{column.label}</TableColumn>)
                    }
                </TableHeader>
                <TableBody
                    items={items}
                    emptyContent={"Nada Encontrado"} 
                >
                    {(item) => (
                        <TableRow key={item.IDN_PLAC_VEIC}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}