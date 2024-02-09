type ConsortiumFrameType = {
  numVeiculo: number
  placa: string
}

export default function ConsortiumFrame({
  numVeiculo,
  placa,
}: ConsortiumFrameType) {
  return (
    <div className="m-4 flex w-full cursor-pointer flex-row justify-center gap-4 rounded-lg bg-zinc-500 p-4 hover:bg-zinc-400">
      <div className="font-bold text-red-700 hover:text-red-600">
        Número do Veiculo:{' '}
      </div>
      <div> {numVeiculo}</div>
      <div className="font-bold text-red-700 hover:text-red-600">Placa:</div>
      <div>{placa}</div>
    </div>
  )
}
