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


export interface DialogProps {
  open: boolean,
  setOpen: any,

}

export function InfoDialog(props: DialogProps) {
  const [active, setActive] = useState(false)

  const { register, handleSubmit, getValues } = useForm<z.infer<typeof InfosSchema & typeof ServiceSchema>>({
    resolver: zodResolver(InfosSchema),
  })

  
  async function onSubmit(data: z.infer<typeof InfosSchema & typeof ServiceSchema>) {
    const response = await fetch('api/send', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        number: data.number,
      })

    })
    if (response.status === 200) {
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
      alert("Erro no Email")
    }
  }

  function activeButton() {
    const nome = getValues('name')
    const numero = getValues('number')

    { nome.length >= 1 ? setActive(true) : setActive(false) }
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
            <Button onClick={() => { track('Info') }} type="submit" disabled={!active} className="bg-green-600 hover:bg-green-400 w-full">Confirmar ✔🎉</Button >
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

