'use client'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import ImportFormSegundaInstancia from '@/components/import/importFormSegundaInstancia'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: Session) {
  return (
    <SessionProvider session={session}>
      <PrimaryLayout>
        <MainApp title="Importação Segunda Instância">
          <ImportFormSegundaInstancia></ImportFormSegundaInstancia>
        </MainApp>
      </PrimaryLayout>
    </SessionProvider>
  )
}
