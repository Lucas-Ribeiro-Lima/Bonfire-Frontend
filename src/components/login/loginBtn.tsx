import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInBtn() {
  return (
    <button
      className="flex h-8 w-5/6 flex-row items-center justify-center gap-2 rounded-lg bg-zinc-600
      text-white hover:bg-zinc-400 hover:shadow-2xl hover:shadow-black hover:duration-1000"
      onClick={() => signIn('keycloak')}
    >
      Entrar
    </button>
  )
}

export function SignOutBtn() {
  return (
    <button
      className="flex h-8 w-5/6 flex-row items-center justify-center gap-2 rounded-lg bg-zinc-600
     text-white hover:bg-zinc-400 hover:shadow-2xl hover:shadow-black hover:duration-1000"
      onClick={() => signOut({ redirect: false })}
    >
      Sair
    </button>
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
