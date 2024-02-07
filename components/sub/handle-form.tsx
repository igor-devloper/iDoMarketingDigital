"use client";


import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Instagram } from "lucide-react"




export function HandleForm() {
  const { toast } = useToast()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-400">Enviar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Ultimas informações</DialogTitle>
          <DialogDescription>
            Antes de enviar preencha as informações abaixo.💪
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" placeholder="Qual o seu Nome?" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Whatsapp
            </Label>
            <Input type="number" id="username" placeholder="(**) 9****-****" className="col-span-3" />
          </div>
        </div>
        <Button
          className="bg-green-500 hover:bg-green-400"
          onChange={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            })
          }}
      
        >
          Confirmar ✔
        </Button>
      </DialogContent>
    </Dialog>
  )
}