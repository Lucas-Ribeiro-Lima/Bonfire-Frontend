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
  const [qtdNotifications, setQtdNotifications] = useState<number>(0)

  function handleInsert(notification: EventT) {
    addNotification(notification)
    updateNotifications()
  }

  function handleClear() {
    clearNotifications()
    updateNotifications()
  }

  function updateNotifications() {
    const storedNotifications = getNotifications()
    setNotifications(storedNotifications)
    setQtdNotifications(storedNotifications.length)
  }

  useEffect(() => {
    updateNotifications()
  }, [])

  return {
    notifications,
    qtdNotifications,
    handleInsert,
    handleClear,
  }
}
