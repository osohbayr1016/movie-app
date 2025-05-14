"use client";
import { Search } from "lucide-react";

export const PhoneInput = () => {
  return (
    <div className="w-full h-[36px] justify-end items-end flex sm:hidden">
      <Search
        size="icon"
        className="flex justify-center items-center bg-dark rounded-md p-[8px] w-[36px] h-full border-1 "
      />
    </div>
  );
};
