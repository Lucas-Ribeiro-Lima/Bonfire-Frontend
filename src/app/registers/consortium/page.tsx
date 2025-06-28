import { ConsortiumLayout } from '@/components/consortium/consortiumLayout'
import { PrimaryLayout } from '@/components/UI/primaryLayout'

export const metadata = {
  title: 'Bonfire - Consórcios',
}

export default function Consortium() {
  return (
    <PrimaryLayout>
      <ConsortiumLayout></ConsortiumLayout>
    </PrimaryLayout>
  )
}
