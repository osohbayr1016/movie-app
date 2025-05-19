"use client";
import { GetSimilarApi } from "@/hooks/GetSimilarApi";
import { Badge, ChevronRight, Film, Mail, Phone, Search } from "lucide-react";
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
import { DesktopInput } from "@/app/_components/DesktopInput";
import { PhoneInput } from "@/app/_components/PhoneInput";
import { Header } from "@/app/_components/header";
import { Hero } from "@/app/_components/Hero";
import { useState, useEffect } from "react";
import { MovieSection } from "@/app/_components/MovieSection";
// import { useRouter } from "next/navigation";
interface PageProps {
  params: {
    id: string;
  };
}

export const DetailPage = ({ id }: { id: string }) => {
  const [moreLikeThis, setMoreLikeThis] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const response = await GetSimilarApi(id);
      setMoreLikeThis(response?.results.slice(0, 5) || []);
    };
    fetchAllMovies();
  }, [id]);

  return (
    <div>
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
                    <div className="flex gap-[16px] mt-[10px] h-[20px] pl-[20px] pr-[20px] pb-[20px] -pt  ustify-center flex-wrap"></div>
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
      <div>
        {moreLikeThis.map((el, index) => {
          return (
            <div key={index}>
              <MovieSection title="More like this" movies={moreLikeThis} />
            </div>
          );
        })}
      </div>
      {/* Footer section */}
      <div className="bg-[#4338CA] h-[280px] text-[#fafafa] py-[40px] flex  justify-between mt-[100px] w-full flex-col sm:flex-row">
        <div className="flex-col flex gap-[12px] w-full">
          <div className="flex gap-[8px] w-full">
            <Film />
            Movie Z
          </div>
          <div>
            <p>© 2024 Movie Z. All Rights Reserved.</p>
          </div>
        </div>
        {/* <div className="flex-row gap-[96px] sm:flex-col"> */}
        <div className="flex flex-col gap-[12px] w-full">
          <div className="">
            <div>
              <p>Contact Information</p>
            </div>
            <div className="flex items-center gap-[12px] pb-[24px] pt-[12px] w-full">
              <div className="">
                <div>
                  <Mail />
                </div>
              </div>
              <div>
                <div>
                  <p>Email:</p>
                  <p>Support@MovieZ.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[12px] w-full">
              <div>
                <Phone />
              </div>
              <div>
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div>
            <p>Follow us</p>
          </div>
          <div className="gap-[12px] flex w-full flex-col sm:flex-row">
            <button>Facebook</button>
            <button>Instagram</button>
            <button>Twitter</button>
            <button>Youtube</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
