import { PropsWithChildren } from 'react'

import { MinistryProvider } from '@/contexts/ministry'
import { NavigationBar } from '@/components/navigation-bar'

export default function MinistryLayout({ children }: PropsWithChildren) {
  return (
    <MinistryProvider>
      <main className="p-4 pb-22">{children}</main>

      <NavigationBar />
    </MinistryProvider>
  )
}
