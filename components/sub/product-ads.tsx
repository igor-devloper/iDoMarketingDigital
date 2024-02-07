"use client";


import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Megaphone } from "lucide-react";

export function ProductAds() {
  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button className="w-full gap-2 text-md py-4 mt-4 text-sm items-center bg-gradient-to-r from-purple-400   to-purple-600 justify-center flex text-center text-white cursor-pointer rounded-lg">
            <Megaphone />
            Anuncio
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 flex flex-col items-center justify-center bg-gradient-to-r from-purple-400   to-purple-600 text-white">
          <DropdownMenuLabel className="flex items-center justify-center p-4">Anuncio</DropdownMenuLabel>
          <DropdownMenuGroup className="flex items-center p-2">
            <DropdownMenuItem className="w-full p-4 gap-9 items-center justify-center">
              <DropdownMenuShortcut >
                <Image
                  src='/Meta.png'
                  alt="logo ads"
                  width={50}
                  height={50}
                />
              </DropdownMenuShortcut>
              Meta Ads
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup className="flex items-center p-2">
            <DropdownMenuItem className="w-full p-4 gap-9 items-center justify-center">
              <DropdownMenuShortcut >
                <Image
                  src='/Google Ads.png'
                  alt="logo ads"
                  width={30}
                  height={30}
                />
              </DropdownMenuShortcut>
              Google Ads
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup className="flex items-center p-2">
            <DropdownMenuItem className="w-full p-4 gap-9 items-center justify-center">
              <DropdownMenuShortcut >
                <Image
                  src='/Shopee.png'
                  alt="logo ads"
                  width={50}
                  height={50}
                />
              </DropdownMenuShortcut>
              Shopee Ads
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
     
    </>
  )
}