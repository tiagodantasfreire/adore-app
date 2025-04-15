import Link from 'next/link'

import Ministry from '@/components/ministry'
import ExitMinistryButton from '@/components/ministry/exit-ministry-button'

interface MinistryPageProps {
  params: Promise<{ id: string }>
}

export default async function MinistryPage({ params }: MinistryPageProps) {
  const { id } = await params

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Ministry id={id} />
      <Link href={`/ministerio/${id}/adicionar-musica`}>Adicionar música</Link>
      <ExitMinistryButton id={id} />
    </div>
  )
}
