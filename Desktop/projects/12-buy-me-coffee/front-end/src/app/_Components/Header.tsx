"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const arr = ["/login", "/signup"];
  const path = usePathname();

  if (arr.includes(path)) {
    return null;
  }
  return (
    <div className="w-full px-[40px] flex justify-between py-4">
      <Image src={"/Logo.png"} alt="" width={230} height={24} />
      <Button variant={"secondary"}>Log out</Button>
    </div>
  );
};
