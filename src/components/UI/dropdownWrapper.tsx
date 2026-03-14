import { ReactNode } from "react"
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"


export function DropdownMenuContentWrapper({ children }: { children: ReactNode }) {

  return (
    <DropdownMenuContent
      align="start"
      className="w-72 rounded-xl
            border
            bg-main-dark
            text-popover-foreground
            p-2
            shadow-lg
            backdrop-blur
            animate-in fade-in zoom-in-95
          "
    >
      {children}
    </DropdownMenuContent>
  )
}

export function DropDownMenuItemWrapper({ children, onClick }: { children: ReactNode, onClick: () => void }) {
  return (
    <DropdownMenuItem
      onClick={onClick}
      className="
      cursor-pointer
      rounded-lg
      px-3 py-2
      text-sm
      font-medium
      transition-colors
      hover:bg-muted
      focus:bg-muted
    "
    >{children}</DropdownMenuItem>
  )
}
