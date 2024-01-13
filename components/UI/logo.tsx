import { Flame } from 'lucide-react'

export function Logo() {
  return (
    <div className="w-40">
      <h1 className="text-extrabold flex flex-row items-center text-3xl text-red-700">
        <Flame></Flame>Bonfire
      </h1>
    </div>
  )
}

export default function LogoCompleta() {
  return (
    <div className="w-40">
      <h1 className="text-extrabold flex flex-row items-center text-3xl text-red-700">
        <Flame></Flame>Bonfire
      </h1>
      <h2 className="text-bold text-zinc-300">Autos de Infração</h2>
    </div>
  )
}
