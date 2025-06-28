'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '../UI/button'

export function SignInBtn() {
  return (
    <Button
      variant="secondary"
      onClick={() => signIn('keycloak', { redirect: true })}
    >
      Entrar
    </Button>
  )
}

export function SignOutBtn() {
  return (
    <Button variant="secondary" onClick={() => signOut({ redirect: false })}>
      Sair
    </Button>
  )
}

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center gap-8">
        Signed in as {session.user?.email} <br />
        <SignOutBtn></SignOutBtn>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      Not signed in <br />
      <SignInBtn></SignInBtn>
    </div>
  )
}
