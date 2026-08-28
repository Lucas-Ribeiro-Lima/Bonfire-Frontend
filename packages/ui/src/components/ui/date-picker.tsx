'use client'

import * as React from 'react'
import { format, parseISO, isValid } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon, X } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover'

export interface DatePickerProps {
  value?: string | Date | null
  onChange?: (dateStr: string | null) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  id?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  avoidCollisions?: boolean
  collisionPadding?: number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>
}

function parseValueToDate(val?: string | Date | null): Date | undefined {
  if (!val) return undefined
  if (val instanceof Date) return isValid(val) ? val : undefined
  if (typeof val === 'string') {
    const parsed = parseISO(val)
    if (isValid(parsed)) return parsed
    const dateObj = new Date(val)
    return isValid(dateObj) ? dateObj : undefined
  }
  return undefined
}

export const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Selecione uma data',
      disabled = false,
      className,
      id,
      side = 'top',
      align = 'start',
      sideOffset = 6,
      avoidCollisions = true,
      collisionPadding = 12,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const selectedDate = React.useMemo(() => parseValueToDate(value), [value])

    const handleSelect = (day: Date | undefined) => {
      if (!day) {
        onChange?.(null)
      } else {
        onChange?.(format(day, "yyyy-MM-dd'T'HH:mm:ss"))
      }
      setOpen(false)
    }

    const handleSetToday = () => {
      handleSelect(new Date())
    }

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation()
      onChange?.(null)
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={id}
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              'w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 dark:focus:ring-orange-500/20 dark:focus:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-left',
              !selectedDate && 'text-zinc-400 dark:text-zinc-500',
              selectedDate && 'text-zinc-800 dark:text-zinc-100 font-medium',
              className
            )}
          >
            <div className="flex items-center gap-2.5 truncate">
              <CalendarIcon className="h-4 w-4 text-orange-500 shrink-0" />
              <span className="truncate">
                {selectedDate
                  ? format(selectedDate, 'dd/MM/yyyy', { locale: ptBR })
                  : placeholder}
              </span>
            </div>

            {selectedDate && !disabled && (
              <span
                role="button"
                tabIndex={0}
                onClick={handleClear}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onChange?.(null)
                  }
                }}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                title="Limpar data"
              >
                <X className="h-3.5 w-3.5" />
              </span>
            )}
          </button>
        </PopoverTrigger>

        <PopoverContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          avoidCollisions={avoidCollisions}
          collisionPadding={collisionPadding}
          className="w-auto p-0 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl z-50 overflow-hidden"
        >
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={selectedDate}
            onSelect={handleSelect}
            locale={ptBR}
            autoFocus
          />
          <div className="p-2 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between gap-2 bg-zinc-50/50 dark:bg-zinc-900/30">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleSetToday}
              className="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-950/40 px-2.5 py-1.5 h-auto rounded-lg transition-colors"
            >
              Hoje
            </Button>
            {selectedDate && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  onChange?.(null)
                  setOpen(false)
                }}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 px-2.5 py-1.5 h-auto rounded-lg transition-colors"
              >
                Limpar
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    )
  }
)

DatePicker.displayName = 'DatePicker'
