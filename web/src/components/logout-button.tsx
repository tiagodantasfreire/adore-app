'use client'
import { LogOut } from 'lucide-react'

import { deleteSession } from '@/lib/session'
import { Button } from './ui/button'

export default function LogoutButton() {
  const handleLogout = async () => {
    await deleteSession()
  }

  return (
    <Button variant="outline" onClick={handleLogout}>
      <LogOut className="text-destructive" />
    </Button>
  )
}
