"use client"

import * as React from "react"
import {
  ChevronDown,
  ChevronLeftIcon,
  ChevronRightIcon,
  Check,
} from "lucide-react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type DropdownProps,
  type Locale,
} from "react-day-picker"

import { cn } from "../../lib/utils"
import { Button, buttonVariants } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}

function CalendarDropdown({
  options = [],
  value,
  onChange,
  disabled,
  "aria-label": ariaLabel,
  name,
}: DropdownProps) {
  const selectedOption = options?.find((opt) => String(opt.value) === String(value))

  const sortedOptions = React.useMemo(() => {
    if (!options || options.length === 0) return []
    const isYearDropdown =
      name?.includes("year") ||
      ariaLabel?.toLowerCase().includes("year") ||
      ariaLabel?.toLowerCase().includes("ano") ||
      options.some((opt) => typeof opt.value === "number" && opt.value > 100)

    if (isYearDropdown) {
      // Ordena anos em ordem decrescente (mais recentes primeiro)
      return [...options].sort((a, b) => Number(b.value) - Number(a.value))
    }

    // Meses permanecem em ordem cronológica crescente (Janeiro -> Dezembro)
    return [...options].sort((a, b) => Number(a.value) - Number(b.value))
  }, [options, name, ariaLabel])

  const handleSelect = (val: string | number) => {
    const syntheticEvent = {
      target: { value: String(val) },
      currentTarget: { value: String(val) },
    } as unknown as React.ChangeEvent<HTMLSelectElement>
    onChange?.(syntheticEvent)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          aria-label={ariaLabel}
          className="inline-flex items-center justify-between gap-1.5 px-2.5 py-1 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-850 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 disabled:opacity-50 select-none shadow-xs"
        >
          <span className="capitalize">{selectedOption?.label ?? value}</span>
          <ChevronDown className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={4}
        className="max-h-60 overflow-y-auto min-w-[7.5rem] p-1 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150"
      >
        {sortedOptions.map(({ value: optVal, label, disabled: optDisabled }) => {
          const isSelected = String(optVal) === String(value)
          return (
            <DropdownMenuItem
              key={optVal}
              disabled={optDisabled}
              onClick={() => handleSelect(optVal)}
              className={cn(
                "flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors capitalize select-none",
                isSelected &&
                  "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-bold",
                !isSelected &&
                  "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              )}
            >
              <span>{label}</span>
              {isSelected && (
                <Check className="h-3.5 w-3.5 text-orange-500 shrink-0 ml-2" />
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-white dark:bg-zinc-950", className)}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between px-1 h-8 z-10 pointer-events-none",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 select-none pointer-events-auto rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-20",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 select-none pointer-events-auto rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-20",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "relative flex h-8 w-full items-center justify-center px-8 text-sm font-semibold text-zinc-900 dark:text-zinc-100",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-8 w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative inline-flex items-center",
          defaultClassNames.dropdown_root
        ),
        caption_label: cn(
          "inline-flex items-center gap-1 text-xs font-semibold select-none capitalize",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse space-y-1", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "w-8 text-center rounded-md text-[0.8rem] font-medium text-zinc-400 dark:text-zinc-500 select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-8 select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-zinc-400 dark:text-zinc-500 select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative h-8 w-8 p-0 text-center text-sm focus-within:relative focus-within:z-20",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-orange-500 text-white",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none bg-orange-100 dark:bg-orange-950/30", defaultClassNames.range_middle),
        range_end: cn(
          "rounded-r-md bg-orange-500 text-white",
          defaultClassNames.range_end
        ),
        today: cn(
          "border border-orange-500/40 text-orange-600 dark:text-orange-400 font-bold",
          defaultClassNames.today
        ),
        outside: cn(
          "text-zinc-300 dark:text-zinc-700 opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-zinc-300 dark:text-zinc-700 opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Dropdown: CalendarDropdown,
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon
                className={cn("h-4 w-4 shrink-0", className)}
                {...props}
              />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("h-4 w-4 shrink-0", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDown className={cn("h-3.5 w-3.5 shrink-0", className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex h-8 w-8 items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  const isSelected = Boolean(modifiers.selected)

  return (
    <Button
      variant="ghost"
      size="icon"
      ref={ref}
      data-day={day.date.toLocaleDateString(locale?.code)}
      className={cn(
        "h-8 w-8 p-0 font-normal rounded-xl transition-all select-none text-xs",
        isSelected &&
          "bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white shadow-sm",
        !isSelected && "hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton, CalendarDropdown }
