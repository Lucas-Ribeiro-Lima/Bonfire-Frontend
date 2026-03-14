'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/UI/scroll-area'
import { useNotifications } from '@/hooks/useNotifications'
import { NotificationT } from '@/services/localStorage'

import { Bell, Paintbrush } from 'lucide-react'

export function NotificationBar() {
  const { notifications, qtdNotifications, handleClear } = useNotifications()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative flex h-8 w-8 items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <Bell size={18} />

          {qtdNotifications > 0 && (
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-zinc-950" />
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-80 p-0 rounded-lg border shadow-lg bg-white dark:bg-main-dark"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <span className="text-sm font-medium">Notificações</span>

          <button
            onClick={handleClear}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400"
          >
            <Paintbrush size={16} />
          </button>
        </div>

        {/* LIST */}
        <ScrollArea className="h-80">
          {notifications.length > 0 ? (
            notifications.map((notification: NotificationT, idx: number) => (
              <div
                key={idx}
                className="flex flex-col gap-1 border-b px-4 py-3 last:border-none"
              >
                <span className="text-xs text-zinc-500">
                  {notification.date}
                </span>

                <span className="text-sm font-medium">
                  {notification.document}
                </span>

                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {notification.message}
                </span>
              </div>
            ))
          ) : (
            <div className="flex h-40 items-center justify-center text-sm text-zinc-500">
              Sem notificações
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

