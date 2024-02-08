"use client";


import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Blocks } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductSite() {
  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button className="w-full gap-2 text-md py-4 mt-4 text-sm items-center bg-gradient-to-r from-purple-400  to-purple-600 justify-center flex text-center cursor-pointera rounded-lg">
            <Blocks />
            Site
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="sm:max-w-[700px] max-w-[300px] max-h-[600px] px-5 pb-5 mb-4 flex flex-col items-center justify-center bg-black text-white font-bold space-y-3">
          <DropdownMenuLabel className="flex items-center justify-center p-4 text-xl">Site</DropdownMenuLabel>
          <DropdownMenuGroup>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                </a>
              </li>
              <DropdownMenuItem>
                <ListItem title="">
                  é a solução de publicidade on-line do Google. Com ele, é possível criar anúncios on-line para alcançar os usuários exatamente quando eles estiverem interessados nos produtos e serviços que você oferece.
                </ListItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListItem title="">
                  é uma ferramenta de anúncios pagos que permite que você anuncie seus produtos ou sua loja dentro da Shopee
                </ListItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListItem title="">
                  é uma ferramenta que te permite divulgar seus produtos no Instagram e Facebook
                </ListItem>
              </DropdownMenuItem>
            </ul>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

    </>
  )
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-center">
          <div className="text-sm font-medium leading-none">{title}</div>
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  )
})
ListItem.displayName = "ListItem"

