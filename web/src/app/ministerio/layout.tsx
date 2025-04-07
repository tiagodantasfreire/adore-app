import Header from '@/components/header'
import { PropsWithChildren } from 'react'

export default function MinistryLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />

      <main className="p-4">{children}</main>
    </div>
  )
}
