"use client";

import {
  slideInFromRight,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Instagram } from "lucide-react"
import Link from "next/link";
import { useForm } from 'react-hook-form'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";
import { Services } from "./services";


type Inputs = {
  name: string
  number: number
}


export function FormCreateContact() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  function handleSubmitInfos(data: any) {
    console.log(data)
    toast({
      variant: 'default',
      title: "Sucesso🎉✔",
      description: "Em breve entraremos em contato atraves do Whatsapp informado ",
      action: (
          <Link href='https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6' className="w-full" target="_blank">
          <ToastAction altText="Goto schedule to undo" className="w-full bg-green-500 text-white hover:bg-green-400 gap-2 flex items-center justify-center">
            <p className="text-xs">Siga-nos no instagram</p>
            <Instagram className="w-6 h-6" />
          </ToastAction>
        </Link>

      ),
    })
  }
  return (
    <Drawer>
      <motion.div className="border-none">
        <motion.div variants={slideInFromRight(7)}>
          <DrawerTrigger asChild>
            <Button className="w-[200px] uppercase text-md py-6 mt-6 items-center trasintion ease-in-out delay-1000 bg-gradient-to-r from-purple-400   to-purple-600 hover:bg-gradient-to-r hover:from-purple-300   hover:to-purple-500 justify-center text-center text-white cursor-pointer rounded-lg max-w-[400px]">
              começar
            </Button>
          </DrawerTrigger>
        </motion.div>
        <DrawerContent className="bg-black">
          <motion.div className="mx-auto w-full max-w-md">
            <DrawerHeader className="text-white">
              <DrawerTitle>Brefing (Form)</DrawerTitle>
              <DrawerDescription>Selecione o serviço desejado</DrawerDescription>
            </DrawerHeader>
            <motion.div className="p-4 pb-0">
              <motion.div className="flex items-center justify-center space-x-2">

              </motion.div>
              <motion.div className="mt-3 h-[130px] text-white flex flex-col gap-2 max-w-xl m-14">
                <Services />
              </motion.div>,
            </motion.div>
            <DrawerFooter>
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
                  <form onSubmit={handleSubmit(handleSubmitInfos)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nome
                        </Label>
                        <Input placeholder="Qual o seu Nome?" className="col-span-3" {...register('name', { required: true })} />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Whatsapp
                        </Label>
                        <Input placeholder="(**) 9****-****" className="col-span-3" {...register('number', { required: true })} />
                      </div>
                    </div>
                    <DialogClose asChild>
                      <input type="submit" className="p-2 rounded-md w-full bg-green-500 hover:bg-green-400 disabled:cursor-wait" />
                    </DialogClose>
                  </form>
                </DialogContent>
              </Dialog>
              <DrawerClose asChild>
                <Button
                  variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </motion.div>
        </DrawerContent>
      </motion.div>
    </Drawer>
  )
}