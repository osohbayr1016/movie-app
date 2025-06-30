"use client";
import { GetSimilarApi } from "@/hooks/GetSimilarApi";
import { useState, useEffect } from "react";
import { MovieSection } from "@/app/_components/MovieSection";
import { getMovieDetail } from "@/hooks/GetMovieDetail";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GetCreditApi } from "@/hooks/GetCreditApi";

interface PageProps {
  params: {
    id: string;
  };
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface Credits {
  cast: { name: string; character?: string }[];
  crew: { name: string; job: string; department: string }[];
}

interface Movie {
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genres: { id: number; name: string }[];
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;

  trailerKey: string;
  similar: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }[];
}

export const DetailPage = ({ id }: { id: string }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  console.log(movie, 'asdknasldhkajsdj');
  

  const [moreLikeThis, setMoreLikeThis] = useState([]);

  const [movieCredits, setMovieCredits] = useState<Credits | null>(null);

  const director = movieCredits?.crew.filter((el) => {
    if (el.job.toLocaleLowerCase() === "director") {
      return true;
    }
  });
  const writer = movieCredits?.crew.filter((el) => {
    if (el.job.toLocaleLowerCase() === "writer") {
      return true;
    }
  });
  const stars = movieCredits?.cast.filter((el) => {
    if (el.name.toLocaleLowerCase() <= "star") {
      return true;
    }
  });

  useEffect(() => {
    const fetchAllMovies = async () => {
      const response = await GetSimilarApi(id);
      setMoreLikeThis(response?.results.slice(0, 5));
    };

    const fetchMovie = async () => {
      const response = await getMovieDetail(id);
      setMovie(response);
    };

    const credits = async () => {
      const response = await GetCreditApi(id);
      setMovieCredits(response);
      console.log(response);
    };

    credits();
    fetchMovie();
    fetchAllMovies();
  }, []);

  return (
    <div className="mx-[117px]">
      <div className="pb-[24px] flex justify-between">
        <div>
          <h1 className="text-[36px] font-[800]">{movie?.title}</h1>
          <div className="flex gap-1">
            {movie?.release_date}
            <p>•</p>
            <p>PG</p>
            <p>•</p>
            {movie?.runtime}
            {"m"}
          </div>
        </div>
        <div>
          <p className="text-[12px] font-[500] ">Rating</p>
          <div className="flex items-center gap-1">
            <Star width={30} height={30} className="text-yellow-300" />
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="font-[600] text-[16px] ">
                  {movie?.vote_average}
                </p>
                <p className="weight-[400] text-[16px] opacity-[50%]">/10</p>
              </div>
              <div className="font-[400] text-[12px] text-[#71717A]">{movie?.vote_count}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Image
          className="w-[23%] h-[428px]"
          height={428}
          width={290}
          alt="image"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        />
        <Image
          className="w-[70%] h-[428px]"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          height={428}
          width={760}
          alt="image"
        />
      </div>
      <div className="gap-1 flex mt-[20px]">
        {movie?.genres.map((el, index) => {
          return (
            <Badge
              className=" bg-white text-black border-1 border-grey"
              key={index}
            >
              {el.name}
            </Badge>
          );
        })}
      </div>
      <div className="py-[20px]">{movie?.overview}</div>
      <div className="flex-col flex gap-3">
        <div className="flex gap-2">
          <p className="w-[113px] font-[700] text-[16px]">Director</p>
          {director?.map((el, index) => {
            return (
              <div className="flex flex-row">
                <div key={index} className="">
                  {el.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-1"></div>
        <div className="flex gap-2">
          <p className="w-[113px] font-[700] text-[16px]">Writer</p>
          {writer?.map((el, index) => {
            return (
              <div className="">
                <div key={index} className="">
                  {el.name}s
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-1"></div>
        <div className="flex gap-2">
          <p className="w-[113px] font-[700] text-[16px]">Stars</p>
          {stars?.slice(0, 4).map((el, index) => {
            return (
              <div className="">
                <div key={index} className="">
                  {el.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-1"></div>
      </div>
      <div>
        <MovieSection title="More like this" movies={moreLikeThis} seeMore={`/similar/${movie?.id}`} />
      </div>
    </div>
  );
};
