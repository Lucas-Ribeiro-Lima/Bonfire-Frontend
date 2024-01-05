'use client'

import InfractionFrame from "./infractionFrame";
import { useEffect, useState } from "react";
import { fetchInfractionsFirstInstance } from "../../hooks/fetchData";
import { Loading } from "../UI/loading";
import { Error } from "../UI/error";

type autosData = {
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
export default function InfractionLayout() {

    const [date, setDate] = useState<string>();
    const [error, setError] = useState(false);
    const [infractionsData, setInfractionsData] = useState<autosData>();

    useEffect(() => {
        const {data, error} = fetchInfractionsFirstInstance<autosData>("/autoInfracao/primeiraInstancia", date)
        if (error) {
            setError(error);
        }
        setInfractionsData(data);
    }, [date])

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setDate(newDate)
    }

    console.log(date)

    if (!infractionsData) return <Loading></Loading>;

    if (error) return <Error></Error>;

    return (
        <div className="flex flex-row">
            <div className="flex flex-col relative m-6 gap-8">
                <div className="flex flex-row gap-4">
                    <label className="flex flex-col text-white rounded-lg font-semibold">
                        Data
                        <input onChange={handleDateChange} type="date" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input>
                    </label>
                </div>
            </div>
            <div className="flex flex-col h-96 pr-10 bg-zinc-700 rounded-lg overflow-y-scroll scrollbar">
                {infractionsData?.autos.map(
                    ({ NUM_NOTF, NUM_AI }) => {
                        return (
                            <div key={NUM_NOTF}>
                                <InfractionFrame NUM_NOTF={NUM_NOTF} NUM_AI={NUM_AI}></InfractionFrame>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}