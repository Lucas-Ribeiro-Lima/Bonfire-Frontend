'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './dropdown-menu'

import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import {
  AlignJustify,
  FileSpreadsheetIcon,
  LogIn,
  LucideHome,
  LucideImport,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from './button'

function handleSignIn() {
  signIn('keycloak')
}

function handleSignOut() {
  signOut({ redirect: false })
}

const MenuBar = () => {
  const { data: session } = useSession()
  return (
    <div className="mt-8 flex flex-col gap-8">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Link href="/">
            <div className="flex items-center gap-2">
              <LucideHome />
              Inicio
            </div>
          </Link>
        </DropdownMenuTrigger>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <AlignJustify />
            Cadastros
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-8 mt-2 flex flex-col gap-4 p-2">
          <DropdownMenuItem>
            <Link
              href="/registers/vehicles"
              className="flex justify-center p-2"
            >
              <div className="flex flex-row gap-2 self-center justify-self-center">
                Veiculos
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/registers/lines" className="flex justify-center p-2">
              <div className="flex flex-row gap-2 self-center justify-self-center">
                Linhas
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/registers/consortium"
              className="flex justify-center p-2"
            >
              <div className="flex flex-row gap-2 self-center justify-self-center">
                Consorcio
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <FileSpreadsheetIcon />
            Infrações
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-8 mt-2 flex flex-col gap-4 p-2">
          <DropdownMenuItem>
            <Link
              href="/infractions/firstInstance"
              className="flex justify-center p-2"
            >
              <div className="flex flex-row gap-2 self-center justify-self-center">
                Primeira Instância
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/infractions/secondInstance"
              className="flex justify-center p-2"
            >
              <div className="flex flex-row gap-2 self-center justify-self-center">
                Segunda Instância
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <LucideImport />
            Importacao
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-8 mt-2 flex flex-col gap-4 p-2">
          <DropdownMenuItem>
            <Link
              href="/import/firstInstance"
              className="flex justify-center p-2"
            >
              <div className="flex flex-row gap-2 self-center justify-self-center">
                Primeira Instância
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/import/secondInstance"
              className="flex justify-center p-2"
            >
              <div className="flex flex-row gap-2 self-center justify-self-center">
                Segunda Instância
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {(session && (
            <Button variant="secondary" onClick={handleSignOut}>
              <div className="flex items-center gap-2">
                <LogIn /> Sair
              </div>
            </Button>
          )) || (
            <Button variant="secondary" onClick={handleSignIn}>
              <div className="flex items-center gap-2">
                <LogIn /> Entrar
              </div>
            </Button>
          )}
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  )
}

export default MenuBar
