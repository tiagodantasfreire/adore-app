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

  return (
    <div className="flex flex-col gap-2 border-2 p-4 rounded-md transition-colors cursor-pointer">
      <div onClick={() => setShowJoinButton(!showJoinButton)}>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{ministry.name}</h3>
          {createdBy && (
            <p className="text-sm text-muted-foreground">{createdBy}</p>
          )}
        </div>
      </div>

      <JoinButton ministryId={ministry.id} showJoinButton={showJoinButton} />
    </div>
  )
}
