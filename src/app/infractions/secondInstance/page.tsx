'use client'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import { RecursesLayout } from '@/components/recurses/recursesLayout'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Segunda Instância">
        <RecursesLayout></RecursesLayout>
      </MainApp>
    </PrimaryLayout>
  )
}
