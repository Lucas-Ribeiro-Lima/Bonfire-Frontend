
export type LinesFrameType = {
    cod_linh: string;
    compartilhada: boolean;
    id_operadora: number;
    linh_ativ_empr: boolean;
}


export default function LinesFrame({ cod_linh, compartilhada, id_operadora, linh_ativ_empr }: LinesFrameType) {

    const str_compartilhada = String(compartilhada)
    const str_linh_ativ_empr = String(linh_ativ_empr)

    return (
        <div className="flex flex-col w-full bg-zinc-500 hover:bg-zinc-400 m-4 p-4 rounded-lg cursor-pointer ">
            <div className="flex flex-row justify-center gap-4">
                <div className="text-red-700 hover:text-red-600 font-bold">Linha: </div>
                <div>{cod_linh}</div>
                <div className="text-red-700 hover:text-red-600 font-bold">Compartilhada:</div>
                <div>{str_compartilhada}</div>
            </div>
            <div className="flex flex-row justify-center gap-4">
                <div className="text-red-700 hover:text-red-600 font-bold">Operadora: </div>
                <div>{id_operadora}</div>
                <div className="text-red-700 hover:text-red-600 font-bold">Linha Ativa:</div>
                <div>{str_linh_ativ_empr}</div>
            </div>
        </div>
    )
}