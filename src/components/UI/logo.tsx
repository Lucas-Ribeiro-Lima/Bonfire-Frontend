import Link from 'next/link'

export function Logo() {
  return (
    <div>
      <h1 className="bonfire-color text-3xl font-semibold">
        <Link href="/">Bonfire</Link>
      </h1>
    </div>
  )
}

export default function LogoCompleta() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bonfire-color text-3xl font-semibold">
        <Link href="/">Bonfire</Link>
      </h1>
      <h2 className="text-bold dark:text-zinc-300">Autos de Infração</h2>
    </div>
  )
}
