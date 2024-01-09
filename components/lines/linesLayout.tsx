'use client'

import { Pagination, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import { Error } from '@/components/UI/error'
import { FetchData } from "../../hooks/fetchData";
import { useMemo, useState } from "react";

type LinesFrameData = {
    linha: {
        COD_LINH: string;
        COMPARTILHADA: boolean;
        ID_OPERADORA: number;
        LINH_ATIV_EMPR: boolean;
    }[]
}

const columns = [
    {
        key: "COD_LINH",
        label: "Linha"
    },
    {
        key: "COMPARTILHADA",
        label: "Compartilhada",
    },
    {
        key: "ID_OPERADORA",
        label: "Operadora",
    },
    {
        key: "LINH_ATIV_EMPR",
        label: "Status",
    }
]


function LinesMenu() {
    return (
        <div className="flex flex-row items-center h-10 gap-8">
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

export default function LinesLayout() {

    // Pagination
    const [page, setPage] = useState(1)

    //Data fetching  
    const { data, error, isLoading } = FetchData<LinesFrameData>('linha')
    const loadingState = isLoading || data?.linha.length === 0 ? "loading" : "idle"

    const rowsPerPage = 10

    const pages = useMemo(() => {
        return data?.linha.length ? Math.ceil(data.linha.length / rowsPerPage) : 0
    }, [data?.linha.length, rowsPerPage])

    if (error) return <Error></Error>

    return (
        <div className="flex flex-col w-full h-full gap-4 p-4">
            <LinesMenu></LinesMenu>
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
                                onChange={(page) => setPage(page)} />
                        </div>
                    ) : null
                }>
                <TableHeader >
                    {columns.map((column) =>
                        <TableColumn key={column.key}>{column.label}</TableColumn>)
                    }
                </TableHeader>
                <TableBody
                    items={data?.linha ?? []}
                    loadingContent={<Spinner color="danger" />}
                    loadingState={loadingState}
                    emptyContent={"Nada Encontrado"}
                >
                    {(item) => (
                        <TableRow key={item.COD_LINH}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}