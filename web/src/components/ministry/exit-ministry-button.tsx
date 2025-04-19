'use client'

import { Button } from '../ui/button'
import { useGetMinistryMusics } from '@/services/music/useGetMinistryMusics'
import { useExitMinistry } from '@/services/ministry/useExitMinistry'
import { useDeleteMusic } from '@/services/music/useDeleteMusic'

interface ExitMinistryButtonProps {
  id: string
}

export default function ExitMinistryButton({ id }: ExitMinistryButtonProps) {
  const { mutate: exitMinistry, isPending } = useExitMinistry()

  const { data: musics } = useGetMinistryMusics(id)
  const { mutate: deleteMusic, isPending: isDeletingMusic } = useDeleteMusic()

  return (
    <>
      <div className="flex flex-col gap-4">
        {musics?.data?.map((music) => (
          <div
            key={music.id}
            className="flex flex-col gap-2 border rounded-md p-4"
          >
            <h2>{music.name}</h2>
            <p>{music.artist}</p>
            <p>{music.singer}</p>
            <p>{music.tone}</p>
            <p>{music.date}</p>

            <Button
              variant="destructive-outline"
              size="sm"
              onClick={() => deleteMusic(music.id)}
              isLoading={isDeletingMusic}
            >
              Deletar
            </Button>
          </div>
        ))}
      </div>

      <Button
        variant="destructive-outline"
        size="full"
        onClick={() => exitMinistry(id)}
        isLoading={isPending}
      >
        {isPending ? 'Saindo...' : 'Sair do Ministério'}
      </Button>
    </>
  )
}
