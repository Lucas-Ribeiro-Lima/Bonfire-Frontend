'use client'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import ImportFormFirstInstance from '@/components/import/importFormFirstInstance'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Importação Primeira Instância">
        <ImportFormFirstInstance></ImportFormFirstInstance>
      </MainApp>
    </PrimaryLayout>
  )
}
