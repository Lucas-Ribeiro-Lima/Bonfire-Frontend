'use client'

import {
  DropDownField,
  DropdownFatherField,
} from '@/components/dropdown/dropdown'
import { Button } from '@nextui-org/react'
import {
  AlignJustify,
  FileSpreadsheetIcon,
  LogIn,
  LucideHome,
  LucideImport,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

function handleSignIn() {
  signIn('keycloak')
}

function handleSignOut() {
  signOut({ redirect: false })
}

const MenuBar = () => {
  const { data: session } = useSession()
  return (
    <div className="mt-4 flex flex-col gap-4 text-zinc-500">
      <Link href="/" className="m-0">
        <DropdownFatherField
          description="Inicio"
          icon={<LucideHome />}
        ></DropdownFatherField>
      </Link>
      <DropdownFatherField description="Cadastros" icon={<AlignJustify />}>
        <DropDownField
          path="/registers/vehicles"
          description="Veiculos"
        ></DropDownField>
        <DropDownField
          path="/registers/lines"
          description="Linhas"
        ></DropDownField>
        <DropDownField
          path="/registers/consortium"
          description="Consórcio"
        ></DropDownField>
      </DropdownFatherField>
      <DropdownFatherField
        description="Infrações"
        icon={<FileSpreadsheetIcon />}
      >
        <DropDownField
          path="/infractions/firstInstance"
          description="Primeira Instancia"
        ></DropDownField>
        <DropDownField
          path="/infractions/secondInstance"
          description="Segunda Instancia"
        ></DropDownField>
      </DropdownFatherField>

      <DropdownFatherField description="Importação" icon={<LucideImport />}>
        <DropDownField
          path="/import/primeiraInstancia"
          description="Primeira Instância"
        ></DropDownField>
        <DropDownField
          path="/import/segundaInstancia"
          description="Segunda Instância"
        ></DropDownField>
      </DropdownFatherField>
      {(session && (
        // <Link href="/login">
        //   <DropdownFatherField
        //     description="Sair"
        //     icon={<LogIn />}
        //   ></DropdownFatherField>
        // </Link>
        <Button
          startContent={<LogIn />}
          onPress={handleSignOut}
          className="flex scale-75 cursor-pointer justify-start rounded-xl bg-transparent  p-2  
          align-middle text-zinc-500 hover:bg-sky-950 hover:text-sky-600 hover:drop-shadow-2xl hover:duration-1000"
        >
          Sair
        </Button>
      )) || (
        // <Link href="/login">
        //   <DropdownFatherField
        //     description="Entrar"
        //     icon={<LogIn />}
        //   ></DropdownFatherField>
        // </Link>
        <Button
          startContent={<LogIn />}
          onPress={handleSignIn}
          className="flex scale-75 cursor-pointer justify-start rounded-xl bg-transparent  p-2  
          align-middle text-zinc-500 hover:bg-sky-950 hover:text-sky-600 hover:drop-shadow-2xl hover:duration-1000"
        >
          Entrar
        </Button>
      )}
    </div>
  )
}

export default MenuBar
