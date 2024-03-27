'use client'

import LinesLayout from '@/components/lines/linesLayout'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import { NextUIProvider } from '@nextui-org/react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export default function Home(session: Session) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <PrimaryLayout>
          <MainApp title="Linhas">
            <LinesLayout></LinesLayout>
          </MainApp>
        </PrimaryLayout>
      </NextUIProvider>
    </SessionProvider>
  )
}
