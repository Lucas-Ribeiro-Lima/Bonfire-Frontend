type ConsortiumFrameType = {
  nome: string
  compartilhado: string
}

export default function ConsortiumFrame({
  nome,
  compartilhado,
}: ConsortiumFrameType) {
  return (
    <div className="m-4 flex w-full cursor-pointer flex-row justify-center gap-4 rounded-lg bg-zinc-500 p-4 hover:bg-zinc-400">
      <div className="font-bold text-sky-700 hover:text-sky-600">Nome: </div>
      <div>{nome}</div>
      <div className="font-bold text-sky-700 hover:text-sky-600">
        Compartilhado:
      </div>
      <div>{compartilhado}</div>
    </div>
  )
}
