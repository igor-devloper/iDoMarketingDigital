import {
  slideInFromRight,
} from "@/lib/motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";
import { Services } from "./services";
import { track } from "@vercel/analytics/react";



export function FormCreateContact() {
  return (
    <Drawer>
      <motion.div className="">
        <motion.div variants={slideInFromRight(7)} className="flex flex-col items-center justify-center">
          <DrawerTrigger asChild>
            <Button onClick={() => { track('OpenDrawer') }} className="w-[200px] uppercase hover:shadow-lg hover:translate-x-1 hover:translate-y-1 transition-all hover:shadow-purple-600 text-md py-6 mt-6 items-center bg-gradient-to-r from-purple-400   to-purple-600 hover:bg-gradient-to-r hover:from-purple-300   hover:to-purple-500 justify-center text-center text-white cursor-pointer rounded-lg max-w-[400px]">
              começar
            </Button>

          </DrawerTrigger>
          <div className="animate-bounce mb-4 p-4 mt-32  rounded-full border items-center border-gray-500 bg-gray-800 hover:text-gradient-to-r hover:from-purple-400   hover:to-purple-600">
            <ArrowDown className="w-6 h-6 text-purple-500 " />
          </div>
          <div className="flex justify-between items-center gap-5 bg-purple-400 rounded-md shadow-xl shadow-purple-700 overflow-hidden">
            <video preload="none" autoPlay loop muted className="md:w-[500px] md:h-[500px] ">
              <source src="/mkt.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
        <DrawerContent className="bg-black flex h-full justify-center m-auto md:h-[500px] md:p-2">
          <motion.div className="mx-auto w-full ">
            <DrawerHeader className="text-white leading-10 m-auto top-0 items-center justify-center">
              <DrawerTitle>BRIEFING (formulario)</DrawerTitle>
              <DrawerDescription>Descubra nossos serviços e elecione o serviço desejado</DrawerDescription>
            </DrawerHeader>
            <motion.div className="pb-0 w-full gap-2">
              <motion.div className="md:h-auto h-full text-white flex flex-col md:w-full md:items-center md:justify-center">
                <Services />
              </motion.div>,
            </motion.div>

          </motion.div>
        </DrawerContent>
      </motion.div>
    </Drawer>
  )
}