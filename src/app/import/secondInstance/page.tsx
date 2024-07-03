'use client'
import ImportFormSecondInstance from '@/components/import/importFormSecondInstance'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Importação Segunda Instância">
        <ImportFormSecondInstance></ImportFormSecondInstance>
      </MainApp>
    </PrimaryLayout>
  )
}
