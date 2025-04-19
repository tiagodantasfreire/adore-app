import { cn } from '@/lib/utils'

import {
  SelectValue,
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from '../ui/select'

// TODO: get singers from database
// TODO: add singer to database

const singersMock = [
  { name: 'Guilherme' },
  { name: 'Carol' },
  { name: 'Cleide' },
]

interface SingerSelectProps {
  value?: string
  onChange?: (value: string) => void
  name?: string
  onBlur?: () => void
  disabled?: boolean
  hasError?: boolean
}

export function SingerSelect({
  value,
  onChange,
  name,
  onBlur,
  disabled,
  hasError,
}: SingerSelectProps) {
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
        <SelectValue placeholder="Ministro" />
      </SelectTrigger>

      <SelectContent>
        {singersMock.map((singer) => (
          <SelectItem key={singer.name} value={singer.name}>
            <p className="text-sm">{singer.name}</p>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
