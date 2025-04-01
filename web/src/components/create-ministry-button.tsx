import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export default function CreateMinistryButton() {
  // add react hook form
  // validate with zod
  // check in the backend if there's a ministry with this name
  // show errors

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="full">Criar ministério</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="text-left mb-2">
          <DialogTitle>Crie seu ministério</DialogTitle>
        </DialogHeader>

        <div>
          <Input
            id="ministry-name"
            placeholder="Nome do ministerio"
            autoComplete="off"
          />
        </div>

        <DialogFooter>
          <Button type="submit" variant="secondary" size="full">
            Criar ministério
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
