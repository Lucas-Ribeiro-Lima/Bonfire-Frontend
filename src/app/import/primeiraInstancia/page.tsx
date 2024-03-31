'use client'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import ImportFormPrimeiraInstancia from '@/components/import/importFormPrimeiraInstancia'
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
