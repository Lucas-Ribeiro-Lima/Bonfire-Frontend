'use client'
import ImportFormSegundaInstancia from '@/components/import/importFormSegundaInstancia'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Importação Segunda Instância">
        <ImportFormSegundaInstancia></ImportFormSegundaInstancia>
      </MainApp>
    </PrimaryLayout>
  )
}
