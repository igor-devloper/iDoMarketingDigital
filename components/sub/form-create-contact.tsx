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
import { Services } from "./servicesResp";
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import { InfoDialog } from "./info-dialog";



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

  }
  return (
    <Drawer>
      <motion.div className="">
        <motion.div variants={slideInFromRight(7)} className="flex flex-col items-center justify-center">
          <DrawerTrigger asChild>
            {/* <Button className="w-[200px] uppercase hover:animate-moveInBottom transition-transform text-md py-6 mt-6 items-center hover:animate- trasintion ease-in-out delay-1000 bg-gradient-to-r from-purple-400   to-purple-600 hover:bg-gradient-to-r hover:from-purple-300   hover:to-purple-500 justify-center text-center text-white cursor-pointer rounded-lg max-w-[400px]">
              começar
            </Button> */}
            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 w-[200px] uppercase overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
              <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span class="relative text-white">começar</span>
            </a>
          </DrawerTrigger>
          <div className="animate-bounce p-4 mt-32  rounded-full border items-center border-gray-500 bg-gray-800 hover:text-gradient-to-r hover:from-purple-400   hover:to-purple-600">
            <ArrowDown className="w-6 h-6 text-purple-500 " />
          </div>
        </motion.div>
        <DrawerContent className="bg-black">
          <motion.div className="mx-auto w-full max-w-md">
            <DrawerHeader className="text-white leading-10 items-center justify-center">
              <DrawerTitle>BRIEFING (formulario)</DrawerTitle>
              <DrawerDescription>Descubra nossos serviços e elecione o serviço desejado</DrawerDescription>
            </DrawerHeader>
            <motion.div className="pb-0">
              <motion.div className="flex items-center justify-center space-x-2">

              </motion.div>
              <motion.div className="mt-3 h-[130px] text-white flex flex-col gap-2 m-14">
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