import { PropsWithChildren } from 'react'

import { Header } from '@/components/header'
import { MinistryProvider } from '@/contexts/ministry-context'
import { NavigationBar } from '@/components/navigation-bar'

export default function MinistryLayout({ children }: PropsWithChildren) {
  return (
    <MinistryProvider>
      <Header />

      <main className="p-4">{children}</main>

      <NavigationBar />
    </MinistryProvider>
  )
}
