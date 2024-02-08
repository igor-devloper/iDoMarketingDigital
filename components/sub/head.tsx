"use client";

import React from "react";
import { toast } from "sonner"
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { FormCreateContact } from './form-create-contact'
import { motion } from "framer-motion";

export const Head = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible" 
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <motion.div className="h-full w-full flex flex-col gap-5  mx-auto text-center items-center justify-center">
        <motion.div className="py-[8px] px-[7px] opacity-[0.9] flex gap-2 transition-transform ease-in delay-1000 animate-girar cursor-pointer">
          <motion.div className="flex items-center justify-center gap-3 max-h-[243px]" variants={slideInFromLeft(0.1)}>
            <Image
              src="/i.png"
              alt="logo iDo"
              className="mt-7"
              width={13.5}
              height={243}
            />
          </motion.div>
          <motion.div variants={slideInFromRight(0.2)}>
            <Image
              src="/DO in png.png"
              alt="logo iDo"
              width={200}
              height={243}
            />
          </motion.div>
        </motion.div>
        <motion.div className="flex items-center justify-center gap-3 max-h-[243px] transition-transform ease-in delay-1000 animate-hover">
          <Image
            src="/caixaTexto.png"
            alt="logo iDo"
            className="absolute mb-[500px] ml-80"
            width={140}
            height={243}
          />
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <Image
            src="/descri in png.png"
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


