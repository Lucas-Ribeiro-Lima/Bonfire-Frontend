import { SecondaryLayout } from '@/components/UI/secondaryLayout'

export default function Loading() {
  return (
    <SecondaryLayout>
      <div className="flex flex-col justify-center rounded-md p-4">
        <div className="text-sky-500 dark:text-sky-700 text-5xl font-extrabold">Loading...</div>
      </div>
    </SecondaryLayout>
  )
}
