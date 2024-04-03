'use client'

import InfractionLayout from '@/components/infractions/infractionLayout'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Primeira Instância">
        <InfractionLayout></InfractionLayout>
      </MainApp>
    </PrimaryLayout>
  )
}
