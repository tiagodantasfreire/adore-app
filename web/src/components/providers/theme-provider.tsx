'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <Toaster richColors position="top-center" />
    </NextThemesProvider>
  )
}
