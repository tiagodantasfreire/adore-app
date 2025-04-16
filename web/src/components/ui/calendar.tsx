'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker, type DayPickerProps } from 'react-day-picker'
import { ptBR } from 'react-day-picker/locale'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

export type CalendarProps = DayPickerProps

function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ptBR}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        month_caption: 'flex justify-center relative items-center w-full',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center justify-between gap-1',
        button_previous: cn(
          buttonVariants({ variant: 'outline' }),
          'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        button_next: cn(
          buttonVariants({ variant: 'outline' }),
          'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        month_grid: 'flex flex-col gap-2',
        weekday:
          'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        day: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-8 p-0 font-normal aria-selected:opacity-100 rounded-md',
        ),
        today: 'bg-accent text-accent-foreground rounded-md',
        disabled: 'text-muted-foreground opacity-50',
        selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-md',
        outside: 'text-muted-foreground opacity-50',
        hidden: 'invisible',
      }}
      components={{
        NextMonthButton: ({ ...props }) => (
          <Button variant="ghost" size="icon" {...props}>
            <ChevronRight className={cn('size-4', className)} />
          </Button>
        ),
        PreviousMonthButton: ({ ...props }) => (
          <Button variant="ghost" size="icon" {...props}>
            <ChevronLeft className={cn('size-4', className)} />
          </Button>
        ),
      }}
      {...props}
    />
  )
}

export { Calendar }
