import SecondaryLayout from './secondaryLayout'

export function Error() {
  return <div className="text-5xl font-extrabold text-red-700">Error!</div>
}

export default function ErrorPage() {
  return (
    <SecondaryLayout>
      <div className="flex flex-col justify-center rounded-md bg-slate-900 p-4">
        <Error></Error>
      </div>
    </SecondaryLayout>
  )
}
