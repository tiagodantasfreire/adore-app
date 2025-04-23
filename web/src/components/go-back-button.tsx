'use client'

import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

export function GoBackButton() {
  const router = useRouter()

  return (
    <Button onClick={() => router.back()} variant="ghost" className="w-fit p-0">
      Voltar
    </Button>
  )
}
