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
      <DropdownMenuTrigger className="flex relative">
        <LucideBell width={16} height={16} />
        {qtdNotifications > 0 && (
          <div className="absolute -right-1 -top-1 z-10 h-3 w-3 rounded-full bg-red-800"></div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-4 top-2 z-20 shadow-sm shadow-neutral-400 ">
        <ScrollArea className="z-1000 flex h-96 w-72 flex-col rounded-lg bg-white dark:bg-slate-950">
          <div className="fixed flex w-full justify-end p-4">
            <button onClick={handleClear}>
              <Paintbrush
                width={16}
                height={16}
                className="dark:text-zinc-400"
              ></Paintbrush>
            </button>
          </div>
          {notifications.length > 0 ? (
            notifications.map((notification: notificationT, idx) => {
              return (
                <DropdownMenuItem key={idx} className="p-4">
                  <div>
                    <div>Data: {notification.date}</div>
                    <div>Documento: {notification.document}</div>
                    <div>{notification.message}</div>
                  </div>
                </DropdownMenuItem>
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
