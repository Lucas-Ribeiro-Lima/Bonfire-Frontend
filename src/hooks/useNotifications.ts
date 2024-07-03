import { EventT } from '@/schemas/notificationSchema'
import {
  ClearNotificationLocalStorage,
  GetNotificationLocalStorage,
  SetNotificationLocalStorage,
  notificationT,
} from '@/services/localStorage'
import { useEffect, useState } from 'react'

export function useNotifications() {
  const [notifications, setNotifications] = useState<notificationT[]>([])
  const [qtdNotifications, setQtdNotifications] = useState<number>(0)

  function handleInsert(notification: EventT) {
    SetNotificationLocalStorage(notification)
    updateNotifications()
  }

  function handleClear() {
    ClearNotificationLocalStorage()
    updateNotifications()
  }

  function updateNotifications() {
    const storedNotifications = GetNotificationLocalStorage()
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
