'use client'

import { useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { useMinistry } from '@/contexts/ministry-context'

export function SearchMusicsInput() {
  const router = useRouter()
  const { id } = useMinistry()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    if (!searchValue) {
      router.push(`/ministerio/${id}`)
      return
    }

    router.push(`/ministerio/${id}?musica=${searchValue}`)
  }

  return (
    <Input
      placeholder="Pesquisar músicas"
      className="w-full"
      onChange={handleChange}
    />
  )
}
