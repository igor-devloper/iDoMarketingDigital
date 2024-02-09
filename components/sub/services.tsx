"use client";


import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Blocks, Megaphone, Pencil } from "lucide-react";
import React from "react";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useForm } from 'react-hook-form'
import { cn } from "@/lib/utils";




type Inputs = {
  service: string
}

export function Services() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  function handleSubmitServices(data: Inputs) {
    console.log(data)
    toast({
      variant: 'default',
      title: "Sucesso🎉✔",
      description: "Em breve entraremos em contato atraves do Whatsapp informado ",
      
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitServices)}>
        {/* Botao de ads   */}
        <Button className="w-full gap-2 text-md py-4 mt-4 text-sm items-center bg-gradient-to-r from-purple-400  to-purple-600 justify-center flex text-center cursor-pointera rounded-lg">
          <Megaphone />
          Anuncio
        </Button>

        {/* Botao de Creation   */}
        <Button className="w-full gap-2 text-md py-4 mt-4 text-sm items-center bg-gradient-to-r from-purple-400  to-purple-600 justify-center flex text-center cursor-pointera rounded-lg">
          <Pencil />
          Criação
        </Button>

        {/* Botao de Site  */}
        <Button className="w-full gap-2 text-md py-4 mt-4 text-sm items-center bg-gradient-to-r from-purple-400  to-purple-600 justify-center flex text-center cursor-pointera rounded-lg">
          <Blocks />
          Site
        </Button>
      </form >
    </>
  )
}


