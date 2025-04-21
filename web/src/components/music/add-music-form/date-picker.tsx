'use client'

import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { formatDate } from '@/lib/date'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  name?: string
  onBlur?: () => void
  disabled?: boolean
  hasError?: boolean
}

export function DatePicker({
  value,
  onChange,
  name,
  onBlur,
  disabled,
  hasError,
}: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(value)

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate)

    if (onChange) {
      onChange(newDate)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={hasError ? 'destructive-outline' : 'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
          type="button"
          disabled={disabled}
          name={name}
          onBlur={onBlur}
        >
          <CalendarIcon className="h-4 w-4" />
          {date ? formatDate(date, 'dd/MMM, EEE') : <span>Data do culto</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          disabled={(date) => date > new Date()}
        />
      </PopoverContent>
    </Popover>
  )
}
