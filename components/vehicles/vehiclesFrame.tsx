
type VehiclesFrameType = {
    num_veiculo: number;
    placa: string
}


export default function VehiclesFrame({ num_veiculo, placa }: VehiclesFrameType) {
    return (
        <div className="flex flex-row w-fit gap-4 bg-zinc-600 hover:bg-zinc-500 m-4 p-4 rounded-lg cursor-pointer">
            <div className="text-red-800 hover:text-red-700 font-bold">Número do Veiculo: </div>
            <div> {num_veiculo}</div>
            <div className="text-red-800 hover:text-red-700 font-bold">Placa:</div>
            <div>{placa}</div>
        </div>
    )
}