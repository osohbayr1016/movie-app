"use client";
 
import { ChevronRight } from "lucide-react";
import { Movies } from "./Movies";
 
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
 
interface MovieSectionProps {
  title: string;
  movies: Movie[];
}
 
export const MovieSection = ({ title, movies }: MovieSectionProps) => {
  
  return (
    <div className="">
      <div className="flex justify-between md:mt-[45px] md:mb-[40px]">
        <h3 className="text-[24px] font-semibold ">{title}</h3>
        <button className="cursor-pointer text-blue-500 flex hover:underline">See more <ChevronRight /></button>
      </div>
      <Movies sectionMovies={movies} />
    </div>
  );
};