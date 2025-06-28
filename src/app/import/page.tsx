import { ImportFormFirstInstance } from '@/components/import/importFormFirstInstance'
import { ImportFormSecondInstance } from '@/components/import/importFormSecondInstance'
import { PrimaryLayout } from '@/components/UI/primaryLayout'

export const metadata = {
  title: 'Bonfire - Importação',
}

export default function Home() {
  return (
    <PrimaryLayout>
      <div className="flex items-center justify-evenly gap-20 max-sm:flex-col">
        <ImportFormFirstInstance></ImportFormFirstInstance>
        <ImportFormSecondInstance></ImportFormSecondInstance>
      </div>
    </PrimaryLayout>
  )
}
