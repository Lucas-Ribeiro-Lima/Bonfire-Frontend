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

function handleSignIn() {
  signIn('keycloak', { redirect: true, callbackUrl: "/" })
}

function handleSignOut() {
  signOut({ redirect: true, callbackUrl: "/" })
}

export function MenuBar() {
  const session = useSession()

  return (
    <div className="mt-8 flex flex-col items-start gap-8 max-sm:w-full max-sm:items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Link href="/">
            <div className="flex items-center gap-2">
              <LucideHome height={16} width={16} />
              Inicio
            </div>
          </Link>
        </DropdownMenuTrigger>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <AlignJustify height={16} width={16} />
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
            <FileSpreadsheetIcon height={16} width={16} />
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
      <Link href="/import" className="flex items-center justify-center gap-2">
        <LucideImport height={16} width={16} />
        Importação
      </Link>
      <Link
        role="button"
        href="#"
        onClick={session ? handleSignOut : handleSignIn}
      >
        <div className="flex items-center gap-2">
          <LogIn height={16} width={16} /> {session ? 'Log-out' : 'Log-in'}
        </div>
      </Link>
    </div>
  )
}
