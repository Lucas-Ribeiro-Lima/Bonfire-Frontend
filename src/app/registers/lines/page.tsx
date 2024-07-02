'use client'

import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import LinesLayout from '@/components/lines/linesLayout'
import { LinesProvider } from '@/contexts/lineContext'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Linhas">
        <LinesProvider>
          <LinesLayout></LinesLayout>
        </LinesProvider>
      </MainApp>
    </PrimaryLayout>
  )
}
