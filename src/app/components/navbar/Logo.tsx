"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo: React.FC = () => {
  const router = useRouter;
  return (
    <Image
      alt="Logo"
      height={100}
      width={100}
      src="/images/logo.png"
      className="hidden cursor-pointer md:block"
    />
  );
};
export default Logo;
