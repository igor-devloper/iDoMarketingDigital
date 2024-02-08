import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";


const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap mb-4">

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Instagram className="w-4 h-4" />
                            <Link href="https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6" target="_blank">
                                <span className="text-[15px] ml-[6px]">Instagram</span>
                            </Link>
                        </p>
                        <Link href="https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6" className="cursor-pointer" target="_blank">
                            <p className="flex flex-row items-center justify-center my-[15px]">
                                <Twitter className="w-4 h-4" />
                                <span className="text-[15px] ml-[6px]">Twitter</span>
                            </p>
                        </Link>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Linkedin className="w-4 h-4" /><Link href="https://www.instagram.com/idomktdigital?igsh=YmN5Z25ja3VxY2F6" target="_blank">
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="mb-[20px] text-[15px] text-center">
                    &copy; iDo Marketing Digital 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer