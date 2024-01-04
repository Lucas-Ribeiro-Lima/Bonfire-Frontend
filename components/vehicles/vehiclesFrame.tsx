
type VehiclesFrameType = {
    num_veic: number;
    idn_placa_veic: string
}


export default function VehiclesFrame({ num_veic, idn_placa_veic }: VehiclesFrameType) {
    return (
        <div className="flex flex-row w-full justify-center gap-4 bg-zinc-500 hover:bg-zinc-400 m-4 p-4 rounded-lg cursor-pointer">
            <div className="text-red-700 hover:text-red-600 font-bold">Número do Veiculo: </div>
            <div> {num_veic}</div>
            <div className="text-red-700 hover:text-red-600 font-bold">Placa:</div>
            <div>{idn_placa_veic}</div>
        </div>
    )
}