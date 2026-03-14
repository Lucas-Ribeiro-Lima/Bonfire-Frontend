import { EventT } from '@/schemas/NotificationSchema'

export type NotificationT = EventT & {
  id: string
  date: string
}

const STORAGE_KEY = 'notifications'

function safeParse<T>(value: string | null, fallback: T): T {
  try {
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export function getNotifications(): NotificationT[] {
  if (typeof window === 'undefined') return []

  const data = window.localStorage.getItem(STORAGE_KEY)

  return safeParse<NotificationT[]>(data, [])
}

export function addNotification(notification: EventT): NotificationT[] {
  if (typeof window === 'undefined') return []

  const notifications = getNotifications()

  const newNotification: NotificationT = {
    ...notification,
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString('pt-BR'),
  }

  const updated = [newNotification, ...notifications]

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

  return updated
}

export function clearNotifications() {
  if (typeof window === 'undefined') return

  window.localStorage.removeItem(STORAGE_KEY)
}
