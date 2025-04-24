import Link from 'next/link'

import { Heading1 } from '@/components/ui/heading'
import { AddMusicForm } from '@/components/music/add-music-form'

interface AddMusicPageProps {
  params: Promise<{ id: string }>
}

export default async function AddMusicPage({ params }: AddMusicPageProps) {
  const { id } = await params

  return (
    <div className="flex flex-col gap-4">
      <Link href={`/ministerio/${id}`}>Voltar</Link>

      <Heading1>Adicionar música</Heading1>
      <AddMusicForm />
    </div>
  )
}
