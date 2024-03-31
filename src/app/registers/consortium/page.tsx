'use client'

import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: any) {
  return (
    <SessionProvider session={session}>
      <PrimaryLayout>
        <MainApp title="Consórcios">
          {/* <ConsortiumLayout></ConsortiumLayout> */}
          <></>
        </MainApp>
      </PrimaryLayout>
    </SessionProvider>
  )
}
