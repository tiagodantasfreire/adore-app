'use client'
import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { useDebounce } from '@/hooks/use-debounce'
import { Input } from '../ui/input'

export default function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState(
    searchParams.get('ministryName') || '',
  )
  const debouncedSearchValue = useDebounce(searchValue, 300)

  // Update URL when debounced search value changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (debouncedSearchValue) {
      params.set('ministryName', debouncedSearchValue)
    } else {
      params.delete('ministryName')
    }

    router.push(`?${params.toString()}`)
  }, [debouncedSearchValue, router, searchParams])

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value)
    },
    [],
  )

  return (
    <Input
      placeholder="Pesquisar por ministério"
      type="search"
      value={searchValue}
      onChange={handleSearchChange}
    />
  )
}
