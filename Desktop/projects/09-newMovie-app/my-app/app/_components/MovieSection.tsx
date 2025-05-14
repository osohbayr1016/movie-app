"use client";
 
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
    <div className="md:px-5 ml-[20px] mr-[20px] md:ml-[80px] md:mr-[80px]">
      <div className="flex justify-between md:mt-[45px] md:mb-[40px]">
        <p className="text-[24px]">{title}</p>
        <p className="cursor-pointer text-blue-500 hover:underline">See more</p>
      </div>
      <Movies sectionMovies={movies} />
    </div>
  );
};
 