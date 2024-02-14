"use client";

import {
  slideInFromRight,
} from "@/lib/motion";
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
import { ArrowDown, Instagram } from "lucide-react"
import Link from "next/link";
import { useForm } from 'react-hook-form'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";
import { Services } from "./services";
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";



const InfoSchema = z.object({
  name: z.string({
    required_error: "Informe seu nome",
    invalid_type_error: "erro"
  }),
  number: z.number({
    required_error: "Informe ser numero",
    invalid_type_error: "erro"
  }).max(11),
})

export function FormCreateContact() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
  } = useForm<z.infer<typeof InfoSchema>>({
    resolver: zodResolver(InfoSchema)
  })

  function handleSubmitInfos(data: z.infer<typeof InfoSchema>) {
    console.log(InfoSchema)
    console.log(data)
    toast({
      variant: 'default',
      title: "Sucesso🎉✔",
      description: "Em breve entraremos em contato atraves do Whatsapp informado ",
      action: (
        <Link href='https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6' className="w-full bg-green-600 opacity-5 border border-green-600" target="_blank">
          <ToastAction altText="Goto schedule to undo" className="w-full bg-white text-gray-500 hover:bg-green-400 gap-2 flex items-center justify-center">
            <p className="text-xs">Siga-nos no instagram</p>
            <Instagram className="w-6 h-6" />
          </ToastAction>
        </Link>

      ),
    })
  }
  return (
    <Drawer>
      <motion.div className="">
        <motion.div variants={slideInFromRight(7)} className="flex flex-col items-center justify-center">
          <div className="animate-bounce p-4  rounded-full border items-center border-gray-500 bg-gray-800">
            <ArrowDown  className="w-6 h-6 text-purple-500"/>
          </div>
          <DrawerTrigger asChild>
            <Button className="w-[200px] uppercase text-md py-6 mt-6 items-center trasintion ease-in-out delay-1000 bg-gradient-to-r from-purple-400   to-purple-600 hover:bg-gradient-to-r hover:from-purple-300   hover:to-purple-500 justify-center text-center text-white cursor-pointer rounded-lg max-w-[400px]">
              começar
            </Button>
          </DrawerTrigger>
        </motion.div>
        <DrawerContent className="bg-black">
          <motion.div className="mx-auto w-full max-w-md">
            <DrawerHeader className="text-white leading-10 items-center justify-center">
              <DrawerTitle>BRIEFING (formulario)</DrawerTitle>
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