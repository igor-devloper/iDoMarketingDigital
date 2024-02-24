import { InfosSchema } from "@/lib/schema";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "@/components/ui/use-toast"
import z from 'zod'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { track } from '@vercel/analytics/server';


interface DialogProps {
  open: boolean,
  setOpen: any
}

export function InfoDialog(props: DialogProps) {
  
  

  async function onSubmitDialog(data: z.infer<typeof InfosSchema>) {
    await toast({
      variant: 'default',
      title: "Sucesso🎉✔",
      description: `Olá ${data.name}, em breve vamos entrar em contato com você em breve`,
    });
    await track('Info', {
      message: `${data.name} realizou o briefing,com o numero ${data.number}`
    })
    await props.setOpen(false)
  }
  const { register, handleSubmit } = useForm<z.infer<typeof InfosSchema>>({
    resolver: zodResolver(InfosSchema),
  })
  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white  ">
        <DialogHeader>
          <DialogTitle>Ultimas Informações</DialogTitle>
          <DialogDescription>
            Ultimas Informações para entrarmos em contato com você
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmitDialog)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                nome
              </Label>
              <Input id="name" type="text" className="col-span-3" {...register('name')} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="number" className="text-right">
                WhatsApp
              </Label>
              <Input id="number" type="tel" className="col-span-3" {...register('number')} placeholder="(**) 9****-****" />
            </div>
            <Button type="submit"  className="bg-green-600 hover:bg-green-400 w-full">Confirmar ✔🎉</Button >
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
