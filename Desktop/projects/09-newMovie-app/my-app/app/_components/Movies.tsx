"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
 
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
 
interface MoviesProps {
  sectionMovies: Movie[];
}
 
export const Movies = ({ sectionMovies }: MoviesProps) => {
  const { resolvedTheme } = useTheme();
  const isDarkThemeActive = resolvedTheme === "dark";
 
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      {sectionMovies.map((el) => (
        <div
          key={el.id}
          className={`w-[158px] h-[310px] md:w-[230px] rounded-2xl overflow-hidden ${
            isDarkThemeActive
              ? "bg-[#353839] text-white"
              : "bg-[#F4F4F5] text-black"
          }`}
        >
          <div className="relative w-full h-[234px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              alt={el.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-1 p-2 text-sm">
            <Star className="w-4 h-4 text-yellow-400" />
            <p>{el.vote_average.toFixed(1)}/10</p>
          </div>
          <p className="px-2 font-semibold truncate">{el.title}</p>
        </div>
      ))}
    </div>
  );
};
 