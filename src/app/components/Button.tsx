"use client";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full cursor-pointer rounded-lg transition disabled:cursor-not-allowed disabled:opacity-70 ${
        outline ? "bg-white" : "bg-rose-500"
      } ${outline ? "border-zinc-500" : "border-rose-500"} ${
        outline ? "text-black" : "text-white"
      } ${outline ? "hover:bg-neutral-100" : "hover:opacity-90"} ${
        small ? "py-1" : "py-2"
      } ${small ? "text-sm" : "text-md"} ${
        small ? "font-light" : "font-semibold"
      } ${small ? "border-[1px]" : "border-2"}`}
    >
      {Icon && <Icon size={24} className="absolute left-4" />}
      {label}
    </button>
  );
};
export default Button;
