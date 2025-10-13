import { PrimaryLayout } from '@/components/UI/primaryLayout'
import { RecursesLayout } from '@/components/recurses/recursesLayout'

export const metadata = {
  title: 'Bonfire - Recursos',
}

export default function Home() {
  return (
    <PrimaryLayout>
      <RecursesLayout></RecursesLayout>
    </PrimaryLayout>
  )
}
