import { SecondaryLayout } from '@/components/UI/secondaryLayout'
import { Undo2 } from 'lucide-react'

export default function NotFound() {
  return (
    <SecondaryLayout>
      <a className="fixed left-6 top-6 text-red-500" href="..">
        <Undo2 />
      </a>
      <div className="flex flex-col justify-center rounded-md p-4 dark:bg-slate-900">
        <div className="text-center text-5xl font-extrabold text-red-500">
          404 Algo está perdido por ai...
        </div>
      </div>
    </SecondaryLayout>
  )
}
