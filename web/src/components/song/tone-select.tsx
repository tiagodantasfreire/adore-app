import { cn } from '@/lib/utils'
import { MUSICAL_NOTES } from '@/constants/musical-notes'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface ToneSelectProps {
  value?: string
  onChange?: (value: string) => void
  name?: string
  onBlur?: () => void
  disabled?: boolean
  hasError?: boolean
}

export function ToneSelect({
  value,
  onChange,
  name,
  onBlur,
  disabled,
  hasError,
}: ToneSelectProps) {
  return (
    <Select
      value={value}
      onValueChange={onChange}
      name={name}
      onOpenChange={(open) => {
        if (!open && onBlur) {
          onBlur()
        }
      }}
      disabled={disabled}
    >
      <SelectTrigger className={cn('w-full', hasError && 'border-destructive')}>
        <SelectValue placeholder="Tom" />
      </SelectTrigger>

      <SelectContent>
        {MUSICAL_NOTES.map((note) => (
          <SelectItem key={note.value} value={note.value}>
            <p className="text-sm font-bold">{note.value}</p>
            <span className="text-sm text-muted-foreground">
              ({note.label})
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
