import Logo from '@/components/ui/logo'
import SecondaryLayout from '@/components/ui/secondaryLayout'

export function Loading() {
  return <div className="text-5xl font-extrabold text-sky-700">Loading...</div>
}

export default function LoadingPage() {
  return (
    <SecondaryLayout>
      <div className="flex flex-col justify-center">
        <Logo></Logo>
        <Loading></Loading>
      </div>
    </SecondaryLayout>
  )
}
