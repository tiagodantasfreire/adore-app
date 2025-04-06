import { Ministry } from '@/types/ministry'

interface MinistryItemProps {
  ministry: Ministry
}

export default function MinistryItem({ ministry }: MinistryItemProps) {
  const owner = ministry.owner
    ? `${ministry.owner?.firstName} ${ministry.owner?.lastName}`
    : null

  return (
    <div className="flex border-2 p-4 rounded-md">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{ministry.name}</h3>
        {owner && <p className="text-sm text-muted-foreground">{owner}</p>}
      </div>
    </div>
  )
}
