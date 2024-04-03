'use client'

import LinesLayout from '@/components/lines/linesLayout'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Linhas">
        <LinesLayout></LinesLayout>
      </MainApp>
    </PrimaryLayout>
  )
}
