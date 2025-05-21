"use client";

import { Hero } from "./_components/Hero";
import { useEffect, useState } from "react";
import { GetPopularApi } from "@/hooks/GetPopularApi";
import { GetTopRatedApi } from "@/hooks/GetTopRatedApi";
import { GetUpcomingApi } from "@/hooks/GetUpcomingApi";
import { MovieSection } from "./_components/MovieSection";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const [popularRes, upcomingRes, topRatedRes] = await Promise.all([
        GetPopularApi(),
        GetUpcomingApi(),
        GetTopRatedApi(),
      ]);

      setPopularMovies(popularRes?.results?.slice(0, 10) || []);
      setUpcomingMovies(upcomingRes?.results?.slice(0, 10) || []);
      setTopRatedMovies(topRatedRes?.results?.slice(0, 10) || []);
    };

    fetchAllMovies();
  }, []);

  return (
    <div>
      <Hero />
      <MovieSection title="Upcoming" movies={upcomingMovies} />
      <MovieSection title="Popular" movies={popularMovies} />
      <MovieSection title="Top Rated" movies={topRatedMovies} />
    </div>
  );
}
