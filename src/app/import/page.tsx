import { ImportFormAutoInfraction } from '@/components/import/importFormAutoInfraction'
import { ImportFormRecurseFirstInstance } from '@/components/import/importFormRecurseFirstInstance'
import { ImportFormRecurseSecondInstance } from "@/components/import/importFormRecurseSecondInstance";
import { PrimaryLayout } from '@/components/UI/primaryLayout'

export const metadata = {
  title: 'Bonfire - Importação',
}

export default function Home() {
  return (
    <PrimaryLayout>
      <div className="flex items-center justify-evenly gap-20 max-sm:flex-col">
        <ImportFormAutoInfraction></ImportFormAutoInfraction>
        <ImportFormRecurseFirstInstance></ImportFormRecurseFirstInstance>
		<ImportFormRecurseSecondInstance></ImportFormRecurseSecondInstance>
      </div>
    </PrimaryLayout>
  )
}