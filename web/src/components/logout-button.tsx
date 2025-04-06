'use client'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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
    } catch (error) {
      console.error('Failed to logout:', error)
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
