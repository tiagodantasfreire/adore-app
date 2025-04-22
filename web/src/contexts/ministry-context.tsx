'use client'

import { useParams } from 'next/navigation'
import { createContext, PropsWithChildren, use } from 'react'

interface MinistryContextType {
  id: string
}

export const MinistryContext = createContext<MinistryContextType>({
  id: '',
})

export function MinistryProvider({ children }: PropsWithChildren) {
  const { id } = useParams()

  return (
    <MinistryContext.Provider value={{ id: id as string }}>
      {children}
    </MinistryContext.Provider>
  )
}

export function useMinistry() {
  return use(MinistryContext)
}
