import Link from 'next/link'

export function Logo() {
  return (
    <div>
      <h1 className="text-extrabold flex flex-row items-center bg-gradient-to-r from-sky-500 via-sky-700 to-sky-400 bg-clip-text text-3xl font-semibold text-transparent">
        <Link href="/">Bonfire</Link>
      </h1>
    </div>
  )
}

export default function LogoCompleta() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-extrabold flex flex-row items-center bg-gradient-to-r from-sky-500 via-sky-700 to-sky-400 bg-clip-text text-3xl font-semibold text-transparent">
        <Link href="/">Bonfire</Link>
      </h1>
      <h2 className="text-bold text-zinc-300">Autos de Infração</h2>
    </div>
  )
}
