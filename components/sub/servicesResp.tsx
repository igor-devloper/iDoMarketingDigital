"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
import { Blocks, Instagram, Megaphone, Pencil, Send } from "lucide-react"
import { ServiceSchema } from "@/lib/schema"
import { servicesAds, servicesCreate, servicesSite } from "@/lib"
import Link from "next/link"
import Image from "next/image"
import { Drawer, DrawerClose, DrawerFooter } from "../ui/drawer"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useState } from "react"
import { DialogClose } from "@radix-ui/react-dialog"
import { InfoDialog } from "./info-dialog"





export function Services() {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
  })

  async function onSubmit(data: z.infer<typeof ServiceSchema>) {
    await setOpen(true)
    await toast({
      variant: 'sucesso',
      title: "Sucesso🎉✔",
      description: `${data.serviceSite}, ${data.serviceAds}, ${data.serviceCreate}. Esses foram o serviços selecionados`,
      action: (
        <Link href='https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6' className="w-full p-2 rounded-md border-spacing-1 bg-white" target="_blank">
          <ToastAction altText="Instagram" className="flex gap-2 items-center justify-center">
            <Instagram className="w-3 h-3" />
            <p className="text-xs">Siga-nos no instagram</p>
          </ToastAction>
        </Link>
      ),
    });
    console.log(data.serviceAds)
    console.log(data.serviceCreate)
    console.log(data.serviceSite)

  }


  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="serviceAds"
            render={({ field }) => (
              <FormItem className="flex flex-col">

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between bg-gradient-to-r from-purple-400 to-purple-600 border-none text-white hover:text-purple-200",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? servicesAds.find((ads) => ads.value === field.value)?.label
                          : <div className="flex gap-2 text-white items-center">
                            <Megaphone />
                            Anuncios
                          </div>}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Pesquise um serviço..."
                        className="h-9"
                      />
                      <CommandEmpty>Nenhum serviço encontrado</CommandEmpty>
                      <CommandGroup>
                        {servicesAds.map((ads) => (
                          <CommandItem
                            value={ads.label}
                            key={ads.value}
                            onSelect={() => {
                              form.setValue("serviceAds", ads.value)
                              setActive(true)
                            }}

                          >
                            {ads.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                ads.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceCreate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between bg-gradient-to-r from-purple-400 to-purple-600 border-none text-white hover:text-purple-200",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? servicesCreate.find(
                            (create) => create.value === field.value
                          )?.label
                          : <div className="flex gap-2 text-white items-center">
                            <Pencil />
                            Criação
                          </div>}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Pesquise um serviço..."
                        className="h-9"
                      />
                      <CommandEmpty>Nenhum serviço encontrado</CommandEmpty>
                      <CommandGroup>
                        {servicesCreate.map((create) => (
                          <CommandItem
                            value={create.label}
                            key={create.value}
                            onSelect={() => {
                              form.setValue("serviceCreate", create.value)
                              setActive(true)
                            }}
                          >
                            {create.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                create.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="serviceSite"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between bg-gradient-to-r from-purple-400 to-purple-600 border-none text-white hover:text-purple-200",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? servicesSite.find(
                            (site) => site.value === field.value
                          )?.label
                          : <div className="flex gap-2 text-white items-center">
                            <Blocks />
                            Site
                          </div>}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Pesquise um serviço..."
                        className="h-9"
                      />
                      <CommandEmpty>Nenhum serviço encontrado</CommandEmpty>
                      <CommandGroup>
                        {servicesSite.map((site) => (
                          <CommandItem
                            value={site.label}
                            key={site.value}
                            onSelect={() => {
                              form.setValue("serviceSite", site.value)
                              setActive(true)
                            }}
                          >
                            {site.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                site.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={!active} className="bg-green-600 hover:bg-green-400 w-full">Enviar</Button >
        </form >
      </Form >
      
      <InfoDialog open={open} setOpen={setOpen}/>
    </>
  )
}


