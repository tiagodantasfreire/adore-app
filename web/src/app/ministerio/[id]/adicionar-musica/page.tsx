import AddSongForm from '@/components/song/add-song-form'

export default function AddMusicPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Adicionar música</h1>
      <AddSongForm />
    </div>
  )
}
