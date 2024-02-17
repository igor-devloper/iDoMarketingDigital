import Image from "next/image";
import React from "react";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { useForm } from "react-hook-form";
import z from 'zod'
import { ServiceSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  src: string;
  title: string;
  description: string;
  color: string ;
  name: string;
  children?: React.ReactNode;
}

export function ProjectCard({ src, title, description, color, name, children }: Props ){
  return (
    <div className={`relative overflow-hidden gap-4 rounded-lg border border-${color}-500 shadow-lg shadow-${color}-500 w-[130px] m-auto h-[171px] justify-center items-center gap-2`}>
      <p className="m-2">{children}</p>
      <Image
        src={src}
        alt={title}
        width={30}
        height={30}
        className="object-contain items-center justify-center flex mx-auto mt-2"
      />

      <div className="relative p-4 items-center justify-center flex flex-col  ">
        <h1 className="text-xs font-semibold text-white">{title}</h1>
        <p className="text-xs  text-gray-400">{description}</p>
      </div>
    </div>
  );
};

