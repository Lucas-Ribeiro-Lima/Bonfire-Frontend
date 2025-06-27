import SecondaryLayout from '@/components/UI/secondaryLayout'

export function Loading() {
  return <div className="text-5xl font-extrabold text-sky-700">Loading...</div>
}

export default function LoadingPage() {
  return (
    <SecondaryLayout>
      <div className="flex flex-col justify-center rounded-md dark:bg-slate-900 p-4">
        <Loading></Loading>
      </div>
    </SecondaryLayout>
  )
}
