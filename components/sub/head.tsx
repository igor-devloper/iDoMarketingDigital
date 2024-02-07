"use client";

import React from "react";
import { toast } from "sonner"
import Image from "next/image";
import { FormCreateContact } from './form-create-contact'
import { Button } from "../ui/button";

const HeroContent = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] ">
      <div className="h-full w-full flex flex-col gap-5  mx-auto text-center items-center justify-center group cursor-pointer">
        <div className="py-[8px] px-[7px] opacity-[0.9] flex gap-2 trasintion ease-in-out duration-1000 group-hover:animate-girar cursor-pointer">
          <div className="flex items-center justify-center gap-3 max-h-[243px]">
            <Image
              src="/i.png"
              alt="logo iDo"
              className="mt-7"
              width={13.5}
              height={243}
            />
          </div>
          <div>
            <Image
              src="/DO in png.png"
              alt="logo iDo"
              width={200}
              height={243}
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 max-h-[243px]">
          <Image
            src="/caixaTexto.png"
            alt="logo iDo"
            className="absolute mb-[500px] ml-80 none hidden group-hover:flex hover:transition-transform delay-1000 ease-in-out"
            width={140}
            height={243}
          />
        </div>
        <div>
          <Image
            src="/descri in png.png"
            alt="logo iDo"
            width={300}
            height={243}
          />
        </div>
        <FormCreateContact />a
      </div>
      
    </div>
  );
};

export default HeroContent;
