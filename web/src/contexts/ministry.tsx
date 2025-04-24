'use client'

import { useParams } from 'next/navigation'
import { createContext, PropsWithChildren, use } from 'react'

interface MinistryContextType {
  ministryId: number
  singerId?: number
}

export const MinistryContext = createContext<MinistryContextType>({
  ministryId: 0,
  singerId: undefined,
})

export function MinistryProvider({ children }: PropsWithChildren) {
  const { id: ministryId, singerId } = useParams()

  return (
    <MinistryContext.Provider
      value={{
        ministryId: Number(ministryId),
        singerId: singerId ? Number(singerId) : undefined,
      }}
    >
      {children}
    </MinistryContext.Provider>
  )
}

export function useMinistry() {
  return use(MinistryContext)
}
