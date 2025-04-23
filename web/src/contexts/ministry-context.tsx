'use client'

import { useParams } from 'next/navigation'
import { createContext, PropsWithChildren, use } from 'react'

interface MinistryContextType {
  id: string
  singerId?: number
}

export const MinistryContext = createContext<MinistryContextType>({
  id: '',
  singerId: undefined,
})

export function MinistryProvider({ children }: PropsWithChildren) {
  const { id, singerId } = useParams()

  console.log({ id, singerId })

  return (
    <MinistryContext.Provider
      value={{
        id: id as string,
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
