'use client'
import ImportFormPrimeiraInstancia from '@/components/import/importFormPrimeiraInstancia'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Importação Primeira Instância">
        <ImportFormPrimeiraInstancia></ImportFormPrimeiraInstancia>
      </MainApp>
    </PrimaryLayout>
  )
}
