"use client";

import React, { useCallback, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useAuthModal from "@/app/hooks/useAuthModal";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const startAuthModal = useAuthModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="hidden flex-row items-center md:flex">
      <div
        onClick={() => {}}
        className="cursor-pointer rounded-full p-3 text-sm font-semibold transition hover:bg-neutral-100"
      >
        Airbnb your home
      </div>
      <div className="cursor-pointer rounded-full px-4 py-3 transition hover:bg-neutral-100">
        <FiGlobe size={18} />
      </div>
      <div
        onClick={toggleOpen}
        className="ml-2 cursor-pointer rounded-full border-[1px] transition hover:shadow-md"
      >
        <Avatar />
      </div>
      {isOpen && (
        <div className="absolute right-4 top-20 w-[250px] overflow-hidden rounded-xl bg-white text-sm shadow-lg sm:right-2 md:right-5 xl:right-20">
          <div className="flex cursor-pointer flex-col border-b-[1px] py-1">
            <MenuItem onClick={startAuthModal.onOpen} label="Sign up" />
            <MenuItem onClick={startAuthModal.onOpen} label="Log in" />
          </div>
          <div className="flex cursor-pointer flex-col py-1">
            <MenuItem onClick={() => {}} label="Airbnb your home" />
            <MenuItem onClick={() => {}} label="Help" />
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
