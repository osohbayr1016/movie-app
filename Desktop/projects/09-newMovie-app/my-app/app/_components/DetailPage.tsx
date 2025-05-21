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
  movie: {
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    genres: { id: number; name: string }[];
    release_date: string;
    runtime: number;
    vote_average: number;
    vote_count: number;
  };
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

  const [moreLikeThis, setMoreLikeThis] = useState([]);

  const [movieCredits, setMovieCredits] = useState<Credits | null>(null);

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
    };

    credits();
    fetchMovie();
    fetchAllMovies();
  }, []);

  return (
    <div className="mx-[117px]">
      <div className="pb-[24px] flex justify-between">
        <div>
          {movie?.title}
          <div className="flex gap-1">
            {movie?.release_date}
            <p>•</p>
            <p>PG</p>
            <p>•</p>
            {movie?.runtime}
          </div>
        </div>
        <div>
          <p>Rating</p>
          <div className="flex items-center gap-1">
            <Star width={30} height={30} className="text-yellow-300" />
            <div className="flex flex-col">
              <div>{`${movie?.vote_average}/10`}</div>
              <div>{movie?.vote_count}</div>
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
      <div>
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
      <div>{movie?.overview}</div>

      {Array.isArray(movieCredits?.cast) && movieCredits.cast.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Cast</h2>
          <ul className="list-disc list-inside">
            {movieCredits.cast.slice(0, 5).map((actor, index) => (
              <li key={index}>{actor.name}</li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(movieCredits?.crew) && movieCredits.crew.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Crew</h2>
          <ul className="list-disc list-inside">
            {movieCredits.crew.slice(0, 5).map((member, index) => (
              <li key={index}>
                {member.name} - {member.job} ({member.department})
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <MovieSection title="More like this" movies={moreLikeThis} />
      </div>
    </div>
  );
};

const a = {
  adult: false,
  backdrop_path: "/cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg",
  belongs_to_collection: null,
  budget: 20000000,
  genres: [
    {
      id: 10752,
      name: "War",
    },
    {
      id: 28,
      name: "Action",
    },
  ],
  homepage: "https://a24films.com/films/warfare",
  id: 1241436,
  imdb_id: "tt31434639",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Warfare",
  overview:
    "A platoon of Navy SEALs embarks on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event.",
  popularity: 340.5692,
  poster_path: "/srj9rYrjefyWqkLc6l2xjTGeBGO.jpg",
  production_companies: [
    {
      id: 284,
      logo_path: "/6a26if3IKy7mlrQuGHHVp6ufQtF.png",
      name: "DNA Films",
      origin_country: "GB",
    },
    {
      id: 41077,
      logo_path: "/1ZXsGaFPgrgS6ZZGS37AqD5uU12.png",
      name: "A24",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "GB",
      name: "United Kingdom",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2025-04-09",
  revenue: 31896828,
  runtime: 95,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "Turkish",
      iso_639_1: "tr",
      name: "Türkçe",
    },
  ],
  status: "Released",
  tagline: "Everything is based on memory.",
  title: "Warfare",
  video: false,
  vote_average: 7.2,
  vote_count: 374,
};
