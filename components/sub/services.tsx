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
        <DropdownMenu>

          <DropdownMenuTrigger asChild>
            <Button className="w-full gap-2 text-md py-4 mt-4 text-sm items-center bg-gradient-to-r from-purple-400  to-purple-600 justify-center flex text-center cursor-pointera rounded-lg">
              <Megaphone />
              Anuncio
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full px-5 pb-5  h-auto sm:max-w-[700px] max-w-[300px] max-h-[600px] mb-4 flex flex-col items-center justify-center bg-black text-white font-bold space-y-3">
            <DropdownMenuLabel className="flex items-center justify-center p-4 ">Anuncio</DropdownMenuLabel>
            <DropdownMenuGroup>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]  lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src='/suaempresa.webp'
                      alt="sua empresa"
                      className="w-full h-full"
                      width={240}
                      height={100}
                    />
                  </a>
                </li>
                <DropdownMenuItem>
                  <ListItem title="Google Ads">
                    é a solução de publicidade on-line do Google. Com ele, é possível criar anúncios on-line para alcançar os usuários exatamente quando eles estiverem interessados nos produtos e serviços que você oferece.
                  </ListItem>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ListItem title="Shoope Ads">
                    é uma ferramenta de anúncios pagos que permite que você anuncie seus produtos ou sua loja dentro da Shopee
                  </ListItem>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ListItem title="Meta Ads">
                    é uma ferramenta que te permite divulgar seus produtos no Instagram e Facebook
                  </ListItem>
                </DropdownMenuItem>
              </ul>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>


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


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-center">
          <div className="text-sm font-medium leading-none">{title}</div>
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  )
})
ListItem.displayName = "ListItem"