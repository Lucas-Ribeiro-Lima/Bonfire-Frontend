'use client'

import { GetInfractions } from "@/lib/getAutoPrimeiraInstancia";
import InfractionFrame from "./infractionFrame";
import { useEffect, useState } from "react";


export default function InfractionLayout() {

    const [date, setDate] = useState();
    const [infractionsData, setInfractionsData] = useState<any>();

    useEffect(() => {

        async function FetchData() {
            const data = await GetInfractions(date)
            setInfractionsData(data)
        }

        try {
            FetchData()
        }
        catch (error) {
            console.error({ error })
        }

    }, [date])

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setDate(newDate)
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-col relative m-6 gap-8">
                <div className="flex flex-row gap-4">
                    <label className="flex flex-col text-white rounded-lg font-semibold">
                        Data
                        <input onChange={handleDateChange} type="date" defaultValue='2024-01-04' className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input>
                    </label>
                </div>
                {/* <button className="flex justify-center items-center p-1 bg-white/60 hover:bg-white/90 rounded-lg text-black font-semibold"> Filtrar </button>
            <div className="flex flex-row gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-400 rounded-lg text-black p-2 w-1/2 font-semibold"> Cadastrar </button>
                <button className="bg-white/60 hover:bg-white/90 rounded-lg text-black p-2 w-1/2 font-semibold"> Desativar </button>
            </div> */}
            </div>
            <div className="flex flex-col h-96 pr-10 bg-zinc-700 rounded-lg overflow-y-scroll scrollbar">
                {/* {infractionsData.map(
                    ({ num_veiculo, placa }) => {
                        return (
                            <div key={num_veiculo}>
                                <InfractionFrame num_veiculo={num_veiculo} placa={placa}></InfractionFrame>
                            </div>
                        )
                    }
                )} */}
            </div>
        </div>
    )
}