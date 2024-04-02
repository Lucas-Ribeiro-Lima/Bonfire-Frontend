'use client'
import ImportFormSegundaInstancia from '@/components/import/importFormSegundaInstancia'
import MainApp from '@/components/ui/mainApp'
import PrimaryLayout from '@/components/ui/primaryLayout'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: any) {
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
