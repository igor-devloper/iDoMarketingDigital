"use sever"

import { InfosSchema, ServiceSchema } from "@/lib/schema";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "@/components/ui/use-toast"
import z, { number } from 'zod'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { track } from '@vercel/analytics/react';
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Loading } from "../loading";


export interface DialogProps {
  open: boolean,
  setOpen: any,
}
export function InfoDialog(props: DialogProps) {
  const router = useRouter();
  const [active, setActive] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const { register, handleSubmit, getValues } = useForm<z.infer<typeof InfosSchema & typeof ServiceSchema>>({
    resolver: zodResolver(InfosSchema),
  })

  async function onSubmit(data: z.infer<typeof InfosSchema & typeof ServiceSchema>) {
    setLoading(true)
    const response = await fetch('api/send', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        number: data.number,
      }),
    })

    if (response.status === 200) {
      setLoading(false)
      await toast({
        variant: 'default',
        title: "Sucesso🎉✔",
        description: `Olá ${data.name}, em breve vamos entrar em contato com você em breve`,
      });
      await track('Infos', {
        message: `o usuario ${data.name} com o numero ${data.number} realizou um briefing: ${data.servicesAds}, ${data.servicesCreate}, ${data.servicesSite}`
      })
      props.setOpen(false);
    } else {
      await toast({
        variant: 'destructive',
        title: "Erro 👻",
        description: `Erro ao enviar o Email de confirmação. Revise o formato do numero.`,
      });
    }
    await router.refresh()  
  }

  function activeButton() {
    const nome = getValues('name')

    { nome.length >= 1 ? setActive(true) : setActive(false) }
    { isLoading ? setActive(false) : active}
  }
  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white  ">
        <DialogHeader>
          <DialogTitle>Ultimas Informações</DialogTitle>
          <DialogDescription>
            Ultimas Informações para entrarmos em contato com você
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                nome
              </Label>
              <Input id="name" type="text" className="col-span-3" {...register('name')} onChange={activeButton} required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="number" className="text-right">
                WhatsApp
              </Label>
              <Input id="number" type="tel" className="col-span-3" {...register('number')} placeholder="(**) 9****-****" onChangeCapture={activeButton} required />
            </div>

            <Button type="submit" disabled={!active} className="bg-green-600 hover:bg-green-400 w-full transition-all">
              {isLoading ?  <Loading /> : 'Confirmar ✔🎉'}
            </Button >
          </div>
        </form>
      </DialogContent>
    </Dialog >
  )
}

