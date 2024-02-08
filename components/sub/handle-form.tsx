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
import Link from "next/link";
import { useState } from "react";
import { act } from "@react-three/fiber";





export function HandleForm() {
  const { toast } = useToast()
  const [active, setActive] = useState(false)

  const handleChange = (e: { target: { value: string | any[]; }; }) => {
    if (e.target.value.length > 4) {
       setActive(!active)
    } else {
      active
    }
};

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
            <Input id="name" placeholder="Qual o seu Nome?" className="col-span-3" required onChange={handleChange}
             />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Whatsapp
            </Label>
            <Input type="number" id="username" placeholder="(**) 9****-****" className="col-span-3" required />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={!active}
              className="bg-green-500 hover:bg-green-400"
              onClick={() => {
                toast({
                  variant: 'default',
                  title: "Sucesso🎉✔",
                  description: "Em breve entraremos em contato atraves do Whatsapp informado ",
                  action: (

                    <Link href='https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6' className="w-full">
                      <ToastAction altText="Goto schedule to undo" rel='https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6' className="w-full bg-green-500 text-white hover:bg-green-400 gap-2 flex items-center justify-center">
                        <p className="text-xs">Siga-nos no instagram</p>
                        <Instagram className="w-6 h-6" />
                      </ToastAction>
                    </Link>

                  ),
                })
              }
              }
            >
              Confirmar ✔
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}