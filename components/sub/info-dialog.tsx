import { InfosSchema } from "@/lib/schema";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
import z from 'zod'
import Link from "next/link";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import * as fbq from "@/lib/fbpixel";


interface DialogProps {
  open: boolean,
  setOpen: any
}

export function InfoDialog(props: DialogProps) {
  
  

  function onSubmitDialog(data: z.infer<typeof InfosSchema>) {
    //  fbq.event("contact", {user: 'novo usuario'})
     toast({
      variant: 'sucesso',
      title: "Sucesso🎉✔",
      description: `Olá ${data.name}, vamos entrar em contato com você em breve`,
      action: (
        <Link href='https://api.whatsapp.com/send/?phone=5511932466384&text&type=phone_number&app_absent=0' className="w-full p-2 rounded-md border-spacing-1 bg-white" target="_blank">
          <ToastAction altText="Instagram" className="flex gap-2 items-center justify-center">
            <Send className="w-3 h-3" />
            <p className="text-xs">Qualque duvida</p>
          </ToastAction>
        </Link>
      ),
    });
    alert(`Olá ${data.name} em breve entraremos em contato com você atraves do numero informado, senão já entramos haha 🎉💪🤞`)
    props.setOpen(false)
    console.log(data.name)
    console.log(data.number)
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
