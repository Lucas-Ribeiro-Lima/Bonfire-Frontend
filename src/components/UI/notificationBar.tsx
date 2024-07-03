import { ScrollArea } from '@/components/UI/scroll-area'
import { useNotifications } from '@/hooks/useNotifications'
import { notificationT } from '@/services/localStorage'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { LucideBell, Paintbrush } from 'lucide-react'

export function NotificationBar() {
  const { notifications, qtdNotifications, handleClear } = useNotifications()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex">
        <LucideBell className="scale-90" />
        {qtdNotifications > 0 && (
          <div className="relative right-2 top-2 z-10 flex h-4 w-4 scale-90 items-center justify-center rounded-full bg-red-800 p-3 text-sm">
            {qtdNotifications}
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-4 top-2 z-20 shadow-md shadow-zinc-700">
        <ScrollArea className="flex h-96 w-72 flex-col rounded-lg bg-slate-950">
          <div className="fixed flex w-full justify-end p-4">
            <button onClick={handleClear}>
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
