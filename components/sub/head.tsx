"use client";

import React from "react";
import { toast } from "sonner"
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { FormCreateContact } from './form-create-contact'
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Head = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <motion.div className="h-full w-full flex flex-col gap-5  mx-auto text-center items-center justify-center">
        <motion.div className="py-[8px] px-[7px] opacity-[0.9] flex gap-2 transition-transform ease-in animate-girar cursor-pointer">
          <motion.div className="flex items-center justify-center gap-3 max-h-[243px]" variants={slideInFromLeft(0)}>
            <Image
              src="/i.png"
              alt="logo iDo"
              className="mt-7"
              width={13.5}
              height={243}
            />
          </motion.div>
          <motion.div variants={slideInFromRight(0)}>
            <Image
              src="/DO in png.png"
              alt="logo iDo"
              width={200}
              height={243}
            />
          </motion.div>
        </motion.div>
        <div className="flex items-center justify-center gap-3 max-h-[243px] transition-transform ease-in delay-1000 animate-hover overflow-hidden">
          <div className="absolute mb-[600px] ml-[230px] md:ml-[330px] ">
            <p className="font-mono text-white text-xs animate-typing1 w-[21ch] overflow-hidden">clique em  <span className="p-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-md">começar</span> e</p>
            <p className="font-mono text-white text-xs animate-typing2 w-[19ch] overflow-hidden">selecione de acordo</p> 
            <p className="font-mono text-white text-xs animate-typing3 w-[21ch] overflow-hidden">com a nescessidade da</p>
            <p className="font-mono text-white text-xs animate-typing4 w-[12ch] overflow-hidden border-r-2">sua empresa</p>
          </div>
          <div className="absolute mb-[600px] ml-[230px] md:ml-[330px]">
            <MessageCircle size={48} color="#fff" strokeWidth={0.5} width={250} height={250} className="" />
          </div>
        </div>
        <motion.div>
          <Image
            src="/descri in png.png"
            className="animate-hoverBalao"
            alt="logo iDo"
            width={300}
            height={243}
          />
        </motion.div>
        <FormCreateContact />
      </motion.div>

    </motion.div>
  );
};


