"use client";


import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogClose,
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
        <DialogClose asChild>
          <Button
            className="bg-green-500 hover:bg-green-400"
            onClick={() => {
              toast({
                variant: 'default',
                title: "Sucesso🎉✔",
                description: "Em breve entraremos em contato atraves do Whatsapp informado ",
                action: (

                  <ToastAction altText="Goto schedule to undo" className="bg-green-500 text-white hover:bg-green-400 gap-2 flex items-center justify-center" rel='https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6'>
                    <p >Siga-nos no instagram</p>
                    <Instagram className="w-4 h-4" />
                  </ToastAction>

                ),
              })
            }
            }
          >
            Confirmar ✔
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}