import Logo from '@/components/ui/logo'
import SecondaryLayout from '@/components/ui/secondaryLayout'

export function Error() {
  return <div className="text-5xl font-extrabold text-red-700">Error!</div>
}

export default function ErrorPage() {
  return (
    <SecondaryLayout>
      <div className="flex flex-col justify-center">
        <Logo></Logo>
        <Error></Error>
      </div>
    </SecondaryLayout>
  )
}
