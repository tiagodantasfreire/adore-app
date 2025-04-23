'use client'

import { useState } from 'react'
import { Check, ChevronDown, PlusCircle } from 'lucide-react'

import { useGetSingers } from '@/services/music/useGetSingers'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface SingerSelectProps {
  value?: string
  onChange?: (value: string) => void
  name?: string
  onBlur?: () => void
  disabled?: boolean
  hasError?: boolean
  onSelectSinger: (singerId: number) => void
}

export function SingerSelect({
  value,
  onChange,
  name,
  onBlur,
  disabled,
  hasError,
  onSelectSinger,
}: SingerSelectProps) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const { data: singers } = useGetSingers()

  const handleSelect = (singer: { id?: number; name: string }) => {
    if (singer.id) {
      onSelectSinger(singer.id)
    }

    onChange?.(singer.name)
    setOpen(false)
  }

  const handleAddSinger = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return

    handleSelect({ name: trimmed })
  }

  const filteredSingers = singers?.filter((singer) =>
    singer?.name.toLowerCase().includes(inputValue?.toLowerCase()),
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-full justify-between',
            hasError && 'border-destructive',
          )}
          disabled={disabled}
        >
          <input
            value={value}
            placeholder="Ministro"
            name={name}
            onBlur={onBlur}
            onChange={(e) => handleSelect({ name: e.target.value })}
            className="text-sm placeholder:text-muted-foreground"
          />
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command
          shouldFilter={false}
          className="max-h-[300px] overflow-y-auto w-[calc(100vw-2rem)] max-w-[400px]"
        >
          <CommandInput
            placeholder="Buscar ou criar ministro"
            value={inputValue}
            onValueChange={setInputValue}
          />

          <CommandEmpty>Nenhum ministro encontrado.</CommandEmpty>

          <CommandGroup>
            {filteredSingers?.map((singer) => (
              <CommandItem
                key={singer.id}
                value={singer.name}
                onSelect={() => handleSelect(singer)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === singer.name ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {singer.name}
              </CommandItem>
            ))}

            {inputValue &&
              !filteredSingers?.some((s) => s.name === inputValue.trim()) && (
                <CommandItem
                  onSelect={handleAddSinger}
                  className="text-primary"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Adicionar {inputValue.trim()}
                </CommandItem>
              )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
