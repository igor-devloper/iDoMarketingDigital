import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  color?: string;
}

const ProjectCard = ({ src, title, description, color }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-[170px] max-h-[170px] justify-center items-center bg-white">
      <Image
        src={src}
        alt={title}
        width={100}
        height={100}
        className="w-auto object-contain items-center justify-center flex mx-auto mt-2"
      />

      <div className="relative p-4">
        <h1 className="text-xa font-semibold text-black">{title}</h1>
        <p className="text-xs  text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
