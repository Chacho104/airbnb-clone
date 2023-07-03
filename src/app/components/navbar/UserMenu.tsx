"use-client";

import React from "react";
import { FiGlobe } from "react-icons/fi";
import Avatar from "../Avatar";

const UserMenu: React.FC = () => {
  return (
    <div className="hidden md:flex flex-row items-center">
      <div className="text-sm font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
        Airbnb your home
      </div>
      <div className="py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
        <FiGlobe />
      </div>
      <div className="rounded-full border-[1px] ml-2 hover:shadow-md transition cursor-pointer">
        <Avatar />
      </div>
    </div>
  );
};
export default UserMenu;
