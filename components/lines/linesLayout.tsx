'use client'

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import { FetchData } from "../../hooks/fetchData";
import { Error } from "../UI/error";
import { Loading } from "../UI/loading";

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
    const { data, error } = FetchData<LinesFrameData>('linha');

    if (!data) return <Loading></Loading>

    if (error) return <Error></Error>

    return (
        <div className="flex flex-col w-full h-full gap-4 p-4">
            <LinesMenu></LinesMenu>
            <div className="flex flex-col h-96 pr-10 bg-zinc-700 rounded-lg overflow-y-scroll scrollbar">
                <Table aria-label="First instance infractions table">
                    <TableHeader className="w-10">
                        {columns.map((column) =>
                            <TableColumn key={column.key}>{column.label}</TableColumn>)
                        }
                    </TableHeader>
                    <TableBody items={data?.linha}>
                        {data.linha.map((row) => (
                            <TableRow key={row.COD_LINH}>
                                {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}