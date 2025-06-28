'use client'

import { SecondaryLayout } from '@/components/UI/secondaryLayout'

export default function Error() {
  return (
    <SecondaryLayout>
      <div className="flex flex-col justify-center rounded-md p-4 dark:bg-slate-900">
        <div className="text-5xl font-extrabold text-red-500">Error!</div>
      </div>
    </SecondaryLayout>
  )
}
