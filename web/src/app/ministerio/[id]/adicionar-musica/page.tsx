import Link from 'next/link'

import { AddMusicForm } from '@/components/music/add-music-form'

interface AddMusicPageProps {
  params: Promise<{ id: string }>
}

export default async function AddMusicPage({ params }: AddMusicPageProps) {
  const { id } = await params

  return (
    <div className="flex flex-col gap-4">
      <Link href={`/ministerio/${id}`}>Voltar</Link>

      <h1 className="text-2xl font-bold">Adicionar música</h1>
      <AddMusicForm ministryId={id} />
    </div>
  )
}
