import CreateMinistryButton from '@/components/ministry/create-ministry-button'
import { MinistryAccessCode } from '@/components/ministry/ministry-access-code'

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">Seja bem-vindo ao Adore App!</p>
        <p className="text-md">
          Você ainda não faz parte de nenhum ministério.
        </p>
      </div>

      <div className="flex flex-col w-full gap-6">
        <MinistryAccessCode />
        <CreateMinistryButton />
      </div>
    </div>
  )
}
