'use client'

import { FetchInfractionsFirstInstance } from "../../hooks/fetchData";
import { Loading } from "../UI/loading";
import { Error } from "../UI/error";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { useEffect, useState } from "react";

export type autosData = {
export type autosData = {
    autos: {
        NUM_NOTF: string,
        TIP_PENL: string,
        NUM_AI: string,
        NOM_CONC: string,
        COD_LINH: number,
        NOM_LINH: string,
        NUM_VEIC: number,
        IDN_PLAC_VEIC: string,
        DAT_OCOR_INFR: Date,
        DES_LOCA: string,
        COD_IRRG_FISC: number,
        ARTIGO: string,
        DESC_OBSE: string,
        NUM_MATR_FISC: number,
        QTE_PONT: number,
        DAT_EMIS_NOTF: Date,
        DAT_LIMIT_RECU: Date,
        VAL_INFR: number,
        DAT_CANC: Date
    }[]
}

const columns = [
    {
        key: "NUM_NOTF",
        label: "N° Notificação",
    },
    // {
    //     key: "TIP_PENL",
    //     label: "Tipo Penal",
    // },
    {
        key: "NUM_AI",
        label: "N° AI",
    },
    {
        key: "NOM_CONC",
        label: "Concessionária",
    },
    {
        key: "COD_LINH",
        label: "Linha",
    },
    // {
    //     key: "NOM_LINH",
    //     label: "Nome Linha",
    // },
    {
        key: "NUM_VEIC",
        label: "Veiculo",
    },
    // {
    //     key: "IDN_PLAC_VEIC",
    //     label: "Placa",
    // },
    {
        key: "DATA_OCOR_INFR",
        label: "Data Ocorrência",
    },
    {
        key: "DES_LOCA",
        label: "Local",
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
        key: "DAT_EMIS_NOTF",
        label: "Data Emissão Notificação",
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
];

export default function InfractionLayout() {

    const [date, setDate] = useState<string>('2024-01-01');

    const { data, error } = FetchInfractionsFirstInstance<autosData>("/autoInfracao/primeiraInstancia", date)

    const handleDateChange = (event: any) => {
        const newDate = event.target.value;
        setDate(newDate)
    }

    useEffect(() => { }, [data])

    if (!data) return (
        <div className="flex flex-col w-full h-full gap-4">
            <div className="flex flex-col relative m-6 gap-8">
                <div className="flex flex-row gap-4">
                    <label className="flex gap-2 text-white rounded-lg font-semibold">
                        <>
                            Data
                        </>
                        <input onChange={handleDateChange} type="date" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input>
                        {/* <input type="date" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input> */}
                    </label>
                </div>
            </div>
            <div className="flex flex-col h-96 justify-center align-center">
                <Loading></Loading>
            </div>
        </div>
    )

    if (error) return <Error></Error>;

    return (
        <div className="flex flex-col w-full h-full gap-4">
            <div className="flex flex-col relative gap-8">
                <div className="flex flex-row gap-4">
                    <label className="flex gap-2 text-white rounded-lg font-semibold">
                        <>
                            Data
                        </>
                        <input onChange={handleDateChange} type="date" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input>
                        {/* <input type="date" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input> */}
                    </label>
                </div>
            </div>
            <div className="flex flex-col w-full h-96 bg-zinc-700 rounded-lg overflow-y-scroll scrollbar">
                <Table aria-label="First instance infractions table">
                    <TableHeader >
                        {columns.map((column) =>
                            <TableColumn key={column.key}>{column.label}</TableColumn>)
                        }
                    </TableHeader>
                    <TableBody items={data?.autos}>
                        {data.autos.map((row) => (
                            <TableRow key={row.NUM_NOTF}>
                                {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}