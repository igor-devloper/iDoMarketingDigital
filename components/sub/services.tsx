"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Blocks, Megaphone, Pencil, Send } from "lucide-react"
import { ServiceSchema } from "@/lib/schema"
import { servicesAds, servicesCreate, servicesSite } from "@/lib"
import { useState } from "react"
import { InfoDialog } from "./info-dialog"
import { Checkbox } from "../ui/checkbox"
import { ServiceCard } from "./service-card"






export function Services() {
  const [active, setActive] = useState(false)
  const [color1, setColor1] = useState(false)
  const [color2, setColor2] = useState(false)
  const [color3, setColor3] = useState(false)
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof ServiceSchema>>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      servicesAds: [""],
      servicesCreate: [""],
      servicesSite: [""],
    },
  })

  async function onSubmit(data: z.infer<typeof ServiceSchema>) {
    await setOpen(true)
    console.log(data.servicesAds)
    console.log(data.servicesCreate)
    console.log(data.servicesSite)
  }

  return (
    <>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 md:items-center md:justify-center md:flex md:m-auto md:w-full md:gap-4" >
          <div className='hidden md:flex gap-4'>
            <FormField
              control={form.control}
              name="servicesAds"
              render={() => (
                <FormItem>
                  {servicesAds.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="servicesAds"
                      render={({ field }) => {
                        return (
                          <div className="inline-flex items-center justify-center gap-4">
                            <ServiceCard src={item.src} color={item.color} description={item.description} name="servicesAds" title={item.value} id={item.id}>

                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked: any) => {
                                  return checked ? field.onChange([...field.value, item.id], setActive(true), setColor1(true)) : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                                }}
                              />
                            </ServiceCard>
                          </div>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="servicesCreate"
              render={() => (
                <FormItem>
                  {servicesCreate.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="servicesCreate"
                      render={({ field }) => {
                        return (
                          <div className="inline-flex items-center justify-center gap-2">
                            <ServiceCard src={item.src} color={item.color} description={item.description} name="servicesCreate" title={item.value}>

                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked: any) => {
                                  return checked ? field.onChange([...field.value, item.id], setActive(true), setColor2(true)) : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                                }}
                              />
                            </ServiceCard>
                          </div>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="servicesSite"
              render={() => (
                <FormItem>
                  {servicesSite.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="servicesSite"
                      render={({ field }) => {
                        return (
                          <div className="inline-flex items-center justify-center gap-4 space-x-4">
                            <ServiceCard src={item.src} color={item.color} description={item.description} name="servicesSite" title={item.value}>

                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked: any) => {
                                  return checked ? field.onChange([...field.value, item.id], setActive(true), setColor3(true)) : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                                }}
                              />
                            </ServiceCard>
                          </div>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />

          </div>







          <div className="flex flex-col items-center space-y-4 justify-center md:hidden">
            <FormField
              control={form.control}
              name="servicesAds"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base flex items-center gap-2 bg-purple-500 w-[112px] p-1 rounded-lg">
                      <Megaphone />
                      Anucios
                    </FormLabel>
                  </div>
                  {servicesAds.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="servicesAds"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                id={item.id}
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked: any) => {
                                  return checked ? field.onChange([...field.value, item.id], setActive(true), setColor1(true)) : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal" htmlFor={item.id} >
                              {item.value}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="servicesCreate"
              render={() => (
                <FormItem className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <FormLabel className="text-base flex items-center gap-2 bg-cyan-500 w-[112px] p-1 rounded-lg">
                      <Pencil />
                      Criação
                    </FormLabel>
                  </div>
                  {servicesCreate.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="servicesCreate"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start gap-2 justify-start space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="data-[state=checked]:bg-cyan-500"
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked ? field.onChange([...field.value, item.id], setActive(true), setColor2(true)) : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.value}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />



            <FormField
              control={form.control}
              name="servicesSite"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base flex items-center gap-2 bg-orange-500 w-[112px] p-1 rounded-lg">
                      <Blocks />
                      Site
                    </FormLabel>
                  </div>
                  {servicesSite.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="servicesSite"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="data-[state=checked]:bg-orange-500"
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked ? field.onChange([...field.value, item.id], setActive(true), setColor3(true)) : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.value}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />



          </div>
          <Button
            type="submit"
            disabled={!active}
            className={active ? `absolute bottom-4 w-[400px] bg-gradient-to-r ${color1 ? 'from-purple-500' : ''} ${color2 ? 'via-cyan-500' : ''} ${color3 ? 'to-orange-500 ' : ''} transition-all p-4` : "bg-green-600 hover:bg-green-400 absolute bottom-4 w-[400px] mb-2 p-4"}

          >

            Enviar
          </Button >
        </form >
      </Form >
      <InfoDialog open={open} setOpen={setOpen} />
    </>
  )
}


