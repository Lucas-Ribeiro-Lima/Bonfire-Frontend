import { EventT } from '@/schemas/NotificationSchema'
import {
  clearNotifications,
  getNotifications,
  addNotification,
  NotificationT,
} from '@/services/localStorage'

import { useEffect, useState } from 'react'

export function useNotifications() {
  const [notifications, setNotifications] = useState<NotificationT[]>([])

  function handleInsert(notification: EventT) {
    const updated = addNotification(notification)
    setNotifications(updated)
  }

  function handleClear() {
    clearNotifications()
    setNotifications([])
  }

  useEffect(() => {
    setNotifications(getNotifications())
  }, [])

  return {
    notifications,
    qtdNotifications: notifications.length,
    handleInsert,
    handleClear,
  }
}
