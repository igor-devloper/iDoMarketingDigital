"use client";


import { Megaphone, PanelsTopLeft, ClipboardPenLine } from "lucide-react";
import { Button } from "../ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";
import { ProductAds } from "./product-ads";
import { HandleForm } from "./handle-form";
import { ToastAction } from "@radix-ui/react-toast";
import { useToast } from "../ui/use-toast";

export function FormCreateContact() {

  const { toast } = useToast()
  return (
    <form>
      <Drawer>
        <div className="border-none">
          <DrawerTrigger asChild>
            <Button className="w-[200px] text-md py-6 mt-6 items-center bg-gradient-to-r from-purple-400   to-purple-600 justify-center flex text-center text-white cursor-pointer rounded-lg max-w-[400px]">
              começar
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-black">
            <div className="mx-auto w-full max-w-md">
              <DrawerHeader className="text-white">
                <DrawerTitle>Selecione a categoria</DrawerTitle>
                <DrawerDescription>Selecione a categoria e descubra nossos serviços</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">

                </div>
                <div className="mt-3 h-[130px] text-white flex flex-col gap-4 max-w-xl m-10">
                  <ProductAds />
                </div>
              </div>
              <DrawerFooter>
                <HandleForm />
                <DrawerClose asChild>
                  <Button
                    variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </div>
      </Drawer>
    </form>
  )
}