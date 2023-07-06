"use client";

import React, { useCallback, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="hidden md:flex flex-row items-center">
      <div
        onClick={() => {}}
        className="text-sm font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer"
      >
        Airbnb your home
      </div>
      <div className="py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
        <FiGlobe size={18} />
      </div>
      <div
        onClick={toggleOpen}
        className="rounded-full border-[1px] ml-2 hover:shadow-md transition cursor-pointer"
      >
        <Avatar />
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-lg bg-white overflow-hidden w-[250px] right-4 xl:right-20 md:right-5 sm:right-2 top-20 text-sm">
          <div className="flex flex-col cursor-pointer border-b-[1px] py-1">
            <MenuItem onClick={() => {}} label="Sign up" />
            <MenuItem onClick={() => {}} label="Log in" />
          </div>
          <div className="flex flex-col cursor-pointer py-1">
            <MenuItem onClick={() => {}} label="Airbnb your home" />
            <MenuItem onClick={() => {}} label="Help" />
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
