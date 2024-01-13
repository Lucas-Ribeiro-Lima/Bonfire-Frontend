'use client'

import {
  DropDownField,
  DropdownFatherField,
} from '@/components/dropdown/dropdown'
import {
  AlignJustify,
  FileSpreadsheetIcon,
  LogIn,
  LucideHome,
  LucideImport,
} from 'lucide-react'
import Link from 'next/link'

const MenuBar = () => {
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
      <Link href="/login">
        <DropdownFatherField
          description="Sair"
          icon={<LogIn />}
        ></DropdownFatherField>
      </Link>
    </div>
  )
}

export default MenuBar
