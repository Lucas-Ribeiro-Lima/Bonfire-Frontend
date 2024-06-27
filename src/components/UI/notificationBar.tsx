import { eventT } from '@/hooks/postInfractions'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { LucideBell } from 'lucide-react'
import { useEffect, useState } from 'react'
import Separator from './separator'

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

export function NotificationBar() {
  const [notifications, setNotifications] = useState<notificationT[]>([])

  useEffect(() => {
    setNotifications(GetNotificationLocalStorage)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <LucideBell className="scale-90" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-4 top-4 flex flex-col gap-4 bg-slate-950 p-4">
        {notifications.length > 0 ? (
          notifications.map((notification: notificationT) => {
            return (
              <>
                <DropdownMenuItem>
                  <div>
                    <div>Data: {notification.date}</div>
                    <div>Documento: {notification.document}</div>
                    <div>{notification.message}</div>
                  </div>
                </DropdownMenuItem>
                <Separator></Separator>
              </>
            )
          })
        ) : (
          <DropdownMenuItem>Sem notificações</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
