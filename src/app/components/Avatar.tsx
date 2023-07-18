"use client";

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

type AvatarProps = {};

const Avatar: React.FC<AvatarProps> = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-3 px-3 py-1">
      <AiOutlineMenu />
      <Image
        alt="Avatar"
        height={30}
        width={30}
        src="/images/placeholder.jpg"
        className="rounded-full"
      />
    </div>
  );
};
export default Avatar;
