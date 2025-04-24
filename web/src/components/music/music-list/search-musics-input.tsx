'use client'

import { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import { Input } from '@/components/ui/input'

export function SearchMusicsInput() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const musicParamValue = searchParams.get('musica')
  const [value, setValue] = useState(musicParamValue ?? '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    setValue(searchValue)

    if (!searchValue) {
      router.replace(pathname)
      return
    }

    router.replace(`${pathname}?musica=${searchValue}`)
  }

  return (
    <Input
      placeholder="Pesquisar músicas"
      className="w-full"
      onChange={handleChange}
      value={value}
      type="search"
    />
  )
}
