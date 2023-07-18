"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

const Search: React.FC = () => {
  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="truncate px-6 text-sm font-semibold md:w-24 lg:w-auto">
          Anywhere
        </div>
        <div className="hidden flex-1 truncate border-x-[1px] px-6 text-center text-sm font-semibold sm:block md:w-24 lg:w-auto">
          Any week
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden truncate sm:block md:w-12 lg:w-auto">
            Add guests
          </div>
          <div className="rounded-full bg-rose-500 p-2 text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
