import { ScrollArea } from '@/components/UI/scroll-area'
import { eventT } from '@/schemas/notificationSchema'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { LucideBell, Paintbrush } from 'lucide-react'
import { useEffect, useState } from 'react'

export type notificationT = eventT & {
  date: string
}

export function SetNotificationLocalStorage(notification: eventT) {
  if (typeof window === 'undefined') return []
  const actualDate = new Date()
  const previousNotifications = JSON.parse(
    window.localStorage.getItem('notifications') || '[]',
  )
  const newNotifications = [...previousNotifications]
  newNotifications.push({
    date: actualDate.toLocaleDateString('pt-BR'),
    document: notification.document,
    message: notification.message,
  })
  window.localStorage.setItem('notifications', JSON.stringify(newNotifications))
}

function GetNotificationLocalStorage(): Array<notificationT> {
  if (typeof window === 'undefined') return []

  const notifications = JSON.parse(
    window.localStorage.getItem('notifications') || '[]',
  )
  return notifications
}

function ClearNotificationLocalStorage() {
  if (typeof window === 'undefined') return

  window.localStorage.clear()
}

export function NotificationBar() {
  const [notifications, setNotifications] = useState<notificationT[]>([])
  const qtdNotifications = notifications.length

  useEffect(() => {
    setNotifications(GetNotificationLocalStorage)
  }, [])

  function clearNotifications() {
    ClearNotificationLocalStorage()
    setNotifications([])
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">
        <LucideBell className="scale-90" />
        <div className="relative right-2 top-2 flex h-4 w-4 scale-90 items-center justify-center rounded-full bg-red-800 text-sm">
          {qtdNotifications}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-4 top-2 z-20 shadow-md shadow-zinc-700">
        <ScrollArea className="flex h-96 w-72 flex-col rounded-lg bg-slate-950">
          <div className="fixed flex w-full justify-end p-4">
            <button onClick={clearNotifications}>
              <Paintbrush className="scale-90 text-zinc-400"></Paintbrush>
            </button>
          </div>
          {notifications.length > 0 ? (
            notifications.map((notification: notificationT) => {
              return (
                <>
                  <DropdownMenuItem className="p-4">
                    <div>
                      <div>Data: {notification.date}</div>
                      <div>Documento: {notification.document}</div>
                      <div>{notification.message}</div>
                    </div>
                  </DropdownMenuItem>
                </>
              )
            })
          ) : (
            <DropdownMenuItem className="p-4">
              Sem notificações
            </DropdownMenuItem>
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
