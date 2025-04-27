'use client'

import { useParams } from 'next/navigation'
import { createContext, PropsWithChildren, use } from 'react'

interface MinistryContextType {
  ministryId: number
  singerId?: number
  musicId?: number
}

export const MinistryContext = createContext<MinistryContextType>({
  ministryId: 0,
  singerId: undefined,
})

export function MinistryProvider({ children }: PropsWithChildren) {
  const { id: ministryId, singerId, musicId } = useParams()

  return (
    <MinistryContext.Provider
      value={{
        ministryId: Number(ministryId),
        singerId: singerId ? Number(singerId) : undefined,
        musicId: musicId ? Number(musicId) : undefined,
      }}
    >
      {children}
    </MinistryContext.Provider>
  )
}

export function useMinistry() {
  return use(MinistryContext)
}
