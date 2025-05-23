"use client";

import { GetPopularApi } from "@/hooks/GetPopularApi";
import { GetTopRatedApi } from "@/hooks/GetTopRatedApi";
import { GetUpcomingApi } from "@/hooks/GetUpcomingApi";
import { useState, useEffect } from "react";
import { Hero } from "./Hero";
import { MovieSection } from "./MovieSection";
import Image from "next/image";

export const SeeMore = ({ id }: { id: string }) => {
  const [upcoming, setupcoming] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const [popularRes, upcomingRes, topRatedRes] = await Promise.all([
        GetPopularApi(),
        GetUpcomingApi(),
        GetTopRatedApi(),
      ]);

      setupcoming(upcomingRes?.results?.slice(0, 20) || []);
      setPopularMovies(popularRes?.results?.slice(0, 20) || []);
      setTopRatedMovies(topRatedRes?.results?.slice(0, 20) || []);
    };

    fetchAllMovies();
  });
  return (
    <div className="flex flex-wrap pl-[80px] gap-[12px]">
      {id === "Upcoming" &&
        upcoming.map((el, index) => {
          return (
            <div key={index} className="">
              <Image
                src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`}
                height={428}
                width={290}
                alt="image"
              />
            </div>
          );
        })}
      {id === "TopRated" &&
        topRatedMovies.map((el, index) => {
          return (
            <div key={index} className="">
              <Image
                src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`}
                height={428}
                width={290}
                alt="image"
              />
            </div>
          );
        })}
      {id === "Popular" &&
        popularMovies.map((el, index) => {
          return (
            <div key={index} className="">
              <Image
                src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`}
                height={428}
                width={290}
                alt="image"
              />
            </div>
          );
        })}
    </div>
  );
};
