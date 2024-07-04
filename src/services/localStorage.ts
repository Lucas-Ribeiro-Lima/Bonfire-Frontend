import { EventT } from '@/schemas/NotificationSchema'

export type notificationT = EventT & {
  date: string
}

export function SetNotificationLocalStorage(notification: EventT) {
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

export function GetNotificationLocalStorage(): Array<notificationT> {
  if (typeof window === 'undefined') return []

  const notifications = JSON.parse(
    window.localStorage.getItem('notifications') || '[]',
  )
  return notifications
}

export function ClearNotificationLocalStorage() {
  if (typeof window === 'undefined') return

  window.localStorage.clear()
}
