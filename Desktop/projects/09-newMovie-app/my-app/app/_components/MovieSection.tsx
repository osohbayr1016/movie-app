"use client";

import { ChevronRight } from "lucide-react";
import { Movies } from "./Movies";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  seeMore: string;
}

export const MovieSection = ({ title, movies, seeMore }: MovieSectionProps) => {
  return (
    <div className="">
      <div className="flex justify-between md:mt-[45px] md:mb-[40px]">
        <h3 className="text-[24px] font-semibold ">{title}</h3>
        <Link
          href={seeMore}
          className="cursor-pointer text-blue-500 flex hover:underline"
        >
          See More
          <ChevronRight />
        </Link>
      </div>
      <Movies sectionMovies={movies} />
    </div>
  );
};
