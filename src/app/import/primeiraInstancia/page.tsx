'use client'
import ImportFormPrimeiraInstancia from '@/components/import/importFormPrimeiraInstancia'
import MainApp from '@/components/ui/mainApp'
import PrimaryLayout from '@/components/ui/primaryLayout'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: any) {
  return (
    <SessionProvider session={session}>
      <PrimaryLayout>
        <MainApp title="Importação Primeira Instância">
          <ImportFormPrimeiraInstancia></ImportFormPrimeiraInstancia>
        </MainApp>
      </PrimaryLayout>
    </SessionProvider>
  )
}
