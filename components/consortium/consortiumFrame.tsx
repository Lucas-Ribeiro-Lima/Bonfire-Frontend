type ConsortiumFrameType = {
    num_veiculo: number;
    placa: string
}


export default function ConsortiumFrame({ num_veiculo, placa }: ConsortiumFrameType) {
    return (
        <div className="flex flex-row w-full justify-center gap-4 bg-zinc-500 hover:bg-zinc-400 m-4 p-4 rounded-lg cursor-pointer">
            <div className="text-red-700 hover:text-red-600 font-bold">Número do Veiculo: </div>
            <div> {num_veiculo}</div>
            <div className="text-red-700 hover:text-red-600 font-bold">Placa:</div>
            <div>{placa}</div>
        </div>
    )
}