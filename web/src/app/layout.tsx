import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Adore App',
  description: 'App para seu grupo de louvor da sua igreja!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
