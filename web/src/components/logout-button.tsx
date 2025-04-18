'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { deleteSession } from '@/lib/session'
import { Button } from './ui/button'

export default function LogoutButton() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      const result = await deleteSession()

      if (result.success) {
        router.refresh()
        router.push('/')
      }
    } catch {
      toast.error('Erro ao sair da conta')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button variant="outline" onClick={handleLogout} disabled={isLoading}>
      <LogOut className={`text-destructive ${isLoading ? 'opacity-50' : ''}`} />
    </Button>
  )
}
