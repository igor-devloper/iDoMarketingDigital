"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";
import { ProductAds } from "./product-ads";
import { HandleForm } from "./handle-form";
import { useToast } from "../ui/use-toast";
import { ProductSite } from "./product-site";
import { ProductCreation } from "./product-creation";

export function FormCreateContact() {

  const { toast } = useToast()
  return (
    <form>
      <Drawer>
        <motion.div className="border-none">
          <motion.div variants={slideInFromRight(7)}>
            <DrawerTrigger asChild>
              <Button className="w-[200px] text-md py-6 mt-6 items-center trasintion ease-in-out delay-1000 bg-gradient-to-r from-purple-400   to-purple-600 justify-center text-center text-white cursor-pointer rounded-lg max-w-[400px]">
                começar
              </Button>
            </DrawerTrigger>
          </motion.div>
          <DrawerContent className="bg-black">
            <motion.div className="mx-auto w-full max-w-md">
              <DrawerHeader className="text-white">
                <DrawerTitle>Brefing (Form)</DrawerTitle>
                <DrawerDescription>Selecione o serviço desejado</DrawerDescription>
              </DrawerHeader>
              <motion.div className="p-4 pb-0">
                <motion.div className="flex items-center justify-center space-x-2">

                </motion.div>
                <motion.div className="mt-3 h-[130px] text-white flex flex-col gap-2 max-w-xl m-14">
                  <ProductAds />
                  <ProductSite />
                  <ProductCreation />
                </motion.div>
              </motion.div>
              <DrawerFooter>
                <HandleForm />
                <DrawerClose asChild>
                  <Button
                    variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </motion.div>
          </DrawerContent>
        </motion.div>
      </Drawer>
    </form>
  )
}