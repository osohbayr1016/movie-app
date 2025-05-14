// Importuud
import Image from "next/image";
// import { NewCarousel } from "@/app/_components/newCarousel";

import Autoplay from "embla-carousel-autoplay";
import { Header } from "@/app/_components/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { DesktopInput } from "./_components/DesktopInput";
import { Badge } from "@/components/ui/badge";
import { Search, Moon, Sun, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Hero } from "./_components/Hero";

export default function Home() {
  // return <div className="block sm:hidden">
  //   box
  // </div>
  return (
    <div>
      <div className="flex justify-around items-center p-[16px]">
        <div className="flex h-[20px] w-[92px] gap-[8px] cursor-pointer items-center">
          <img src={"/Vector (5).png"} />
          <p className="weight-[700] font-bold italic text-[16px] text-[#4338CA] ">
            Movie Z
          </p>
        </div>

        {/* Navigation section */}
        <div className="flex w-[488px] h-[36px] gap-[12px] md:opacity-1">
          <div>
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
                    <div className="flex gap-[16px] mt-[10px] h-[20px] pl-[20px] pr-[20px] pb-[20px] -pt  ustify-center flex-wrap">
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Action <ChevronRight />
                      </Badge>

                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Adventure <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Animation <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Biography <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Comedy <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Crime <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Documentary <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Drama <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Family <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Fantasy <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Film-Noir <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Game-show <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        History <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Horror <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Music <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Musical <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Mystery <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        News <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Reality-TV <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Romance <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Romance <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Short <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Sport <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Talk-Show <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Thriller <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        War <ChevronRight />
                      </Badge>
                      <Badge
                        className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px] font-bold"
                        variant="secondary"
                      >
                        Western <ChevronRight />
                      </Badge>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="w-[100%] flex items-center gap-[10px] border-1 rounded-lg pl-[12px] pr-[12px] h-[36px]">
            {/* <Search className="h-[16px] w-[16px] opacity-[50%]" /> */}
            <DesktopInput />
          </div>
        </div>
        <Header />
      </div>
      <div className="w-full justify-center flex h-[700px] ">
        <Hero />
      </div>
    </div>
  );
}
