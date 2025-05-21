"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import { getHeroApi } from "@/hooks/GetHeroApi";

type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: string;
};

export const Hero = () => {
  const [upcoming, setUpcoming] = useState<UpcomingMovies[]>([]);

  useEffect(() => {
    const nowPlaying = async () => {
      const response = await getHeroApi();
      const firstFive = response?.results.splice(0, 5);
      console.log(response?.results.data, "Response ");
      setUpcoming(firstFive);
    };
    nowPlaying();
  }, []);

  return (
    <div className="w-full justify-center flex ">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 2000 })]}
        className="relative mt-[20px] lg:mt-[15px] w-screen overflow-hidden"
      >
        <CarouselContent>
          {upcoming.map((el, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden h-[365px] lg:h-[600px] ">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  alt={"image"}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-background hidden lg:flex absolute -translate-y-1/2" />
        <CarouselNext className="bg-background hidden lg:flex absolute -transalte-y-1/2" />
      </Carousel>
    </div>
  );
};
