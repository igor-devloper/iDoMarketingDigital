import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";


const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap mb-4">

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Instagram  className="w-4 h-4"/>
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center justify-center my-[15px] cursor-pointer">
                            <Twitter  className="w-4 h-4"/>
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Linkedin  className="w-4 h-4"  />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </p>
                    </div>
                </div>
                <div className="mb-[20px] text-[15px] text-center">
                    &copy; WebChain Dev 2023 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer