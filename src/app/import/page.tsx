import { PrimaryLayout } from '@/components/UI/primaryLayout'
import { ImportForm } from '@/components/import/importForm'

export const metadata = {
  title: 'Bonfire - Importação',
}

export default function Home() {
  return (
    <PrimaryLayout>
      <ImportForm />
    </PrimaryLayout>
  )
}
