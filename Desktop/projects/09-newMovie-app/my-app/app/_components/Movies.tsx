"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

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
        <Link href={`/details/${el?.id}`} key={el.id}>
          <div
            key={el.id}
            className={`w-[158px] h-[440px] md:w-[230px] rounded-2xl overflow-hidden ${
              isDarkThemeActive
                ? "bg-[#353839] text-white"
                : "bg-[#F4F4F5] text-black"
            }`}
          >
            <div>
              <div className="relative w-full h-[330px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`}
                  alt={"image"}
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex  gap-1 p-2 text-sm  items-center">
              <Star className="w-4 h-4 text-yellow-400" />
              <p>{el?.vote_average?.toFixed(1)}/10</p>
            </div>
            <p className="px-2 font-semibold truncate">{el?.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
