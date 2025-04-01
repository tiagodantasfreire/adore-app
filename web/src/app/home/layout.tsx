import Header from '@/components/header'
import { PropsWithChildren } from 'react'

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />

      <main className="p-4">{children}</main>
    </div>
  )
}
