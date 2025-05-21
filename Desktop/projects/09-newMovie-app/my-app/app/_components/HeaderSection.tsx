"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Genres } from "./Genre";
import { ChevronRight, Film, Search } from "lucide-react";
import { useState } from "react";
import { DesktopInput } from "./DesktopInput";
import { PhoneInput } from "./PhoneInput";
import { Badge } from "@/components/ui/badge";
import { Header } from "./header";

export const HeaderSection = () => {
  const [activeGenres, setActiveGenres] = useState<string[]>([]);
  const toggleGenre = (genre: string) => {
    setActiveGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };
  return (
    <div className="flex justify-around items-center p-[16px]">
        <div className="flex h-[20px] w-[90px] gap-[8px] cursor-pointer items-center">
          <Film className="text-[#4338ca] h-[17px] w-[17px]" />
          <p className="weight-[700] font-bold italic text-[16px] text-[#4338CA] w-[90px]">
            Movie Z
          </p>
        </div>

        {/* Navigation section */}
        <div className="w-[488px] h-[36px] gap-[12px] flex">
          <div className="hidden sm:flex">
            <NavigationMenu className="">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="border-1 pl-[16px] pr-[16px] pt-[8px] pb-[8px]">
                    <p> Genre</p>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[577px] h-[333px] flex p-[20px] flex-col">
                    <div className="flex flex-col gap-1">
                      <h1 className="w-[577px] font-bold weight-[600] text-[24px]">
                        Genres
                      </h1>
                      <p className="text-[16px] weight-[400] mb-[8px]">
                        See lists of movies by genre
                      </p>
                    </div>
                    <div className="border-[1px] flex-row flex"></div>
                    <div className="flex gap-[16px] mt-[10px] h-auto pl-[20px] pr-[20px] pb-[20px]  flex-wrap">
                      {Genres.map((el, index) => (
                        <Badge
                          key={index}
                          className={`h-[20px] p-[10px] font-bold cursor-pointer transition-colors duration-100 border-1 border-grey-300  ${
                            activeGenres.includes(el.name)
                              ? "bg-black text-white "
                              : "bg-white text-black "
                          } `}
                          onClick={() => toggleGenre(el.name)}
                        >
                          {el.name}
                          <ChevronRight className="inline-block ml-1" />
                        </Badge>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="w-[100%] items-center gap-[10px] border-1 rounded-lg pl-[12px] pr-[12px] h-[36px] hidden sm:flex">
            <Search className="h-[16px] w-[16px] opacity-[50%]" />
            <DesktopInput />
          </div>
          {/* <div className=" w-full h-[36px] mr-[12px] flex sm:hidden "></div> */}
        </div>
        <div className="gap-[12px] flex">
          <PhoneInput />
          <Header />
        </div>
      </div>
  );
};
