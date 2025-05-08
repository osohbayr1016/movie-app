import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export default function Home() {
  return (
    <div className="flex justify-around items-center p-[16px]">
      <div className="flex h-[20px] w-[92px] gap-[8px] cursor-pointer">
        <img src={"/Vector (5).png"} />
        <img src={"/Movie Z.png"} />
      </div>
      <div className="flex w-[488px] h-[36px] gap-[12px]">
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
                  <div className="flex gap-[4px] mt-[10px] h-[20px] p-[4px] w-[76px] justify-center flex ">
                    <Badge
                      className="h-[20px] hover:bg-[#00000020] cursor-pointer p-[10px]"
                      variant="secondary"
                    >
                      Action <ChevronRight />
                    </Badge>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="w-[100%] flex items-center gap-[10px] border-1 rounded-lg pl-[12px] pr-[12px] h-[36px]">
          <Search className="h-[16px] w-[16px] opacity-[50%]" />
          <Input
            type="text"
            placeholder="Search..."
            className="border-none w-full"
          />
        </div>
      </div>
      <Button className="w-[36px] h-[36px] cursor-pointer bg-white border-1">
        <Moon className="text-black" />
      </Button>
    </div>
  );
}
