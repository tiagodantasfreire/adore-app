'use client'
import { useState } from 'react'

import { Ministry } from '@/types/ministry'
import JoinButton from './join-button'

interface MinistryItemProps {
  ministry: Ministry
}

export default function MinistryItem({ ministry }: MinistryItemProps) {
  const [showJoinButton, setShowJoinButton] = useState(false)

  const createdBy = ministry.createdBy
    ? `${ministry.createdBy?.firstName} ${ministry.createdBy?.lastName}`
    : null

  const membersCount = ministry._count?.members || 0
  const membersCountText =
    membersCount === 1 ? '1 membro' : `${membersCount} membros`

  return (
    <div className="flex flex-col border-2 p-4 rounded-md transition-colors cursor-pointer">
      <div onClick={() => setShowJoinButton(!showJoinButton)}>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{ministry.name}</h3>

          {createdBy && (
            <p className="text-sm text-muted-foreground">
              Criado por: {createdBy}
            </p>
          )}

          <p className="text-sm text-muted-foreground">{membersCountText}</p>
        </div>
      </div>

      <JoinButton ministryId={ministry.id} showJoinButton={showJoinButton} />
    </div>
  )
}
