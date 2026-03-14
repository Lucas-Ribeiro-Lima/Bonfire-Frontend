'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/UI/scroll-area'
import { useNotifications } from '@/hooks/useNotifications'
import { notificationT } from '@/services/localStorage'

import { Bell, Paintbrush } from 'lucide-react'

export function NotificationBar() {
  const { notifications, qtdNotifications, handleClear } = useNotifications()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative flex items-center justify-center">
          <Bell size={16} />

          {qtdNotifications > 0 && (
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-600" />
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
            notifications.map((notification: notificationT, idx: number) => (
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

