import { PropsWithChildren } from 'react'

import { MinistryProvider } from '@/contexts/ministry-context'
import { NavigationBar } from '@/components/navigation-bar'

export default function MinistryLayout({ children }: PropsWithChildren) {
  return (
    <MinistryProvider>
      <main className="p-4 pb-20">{children}</main>

      <NavigationBar />
    </MinistryProvider>
  )
}
