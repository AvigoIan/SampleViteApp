import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { MovieCard } from "../../atoms";

// Styling for the movie container
const Movies = styled.div`
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  padding: 10px;
  height: 630px;
  overflow: scroll;
  row-gap: 10px;
`;

interface Movie {
  id: number;
  title: string;
}

// Mock API function to simulate fetching movies
const fetchMovies = async (page: number, limit: number): Promise<Movie[]> => {
  //simulate loading movies from backend
  return Array.from({ length: limit }, (_, index) => ({
    id: page * limit + index,
    title: `Movie ${(page - 1) * limit + index + 1}`,
  }));
};

const maxMoviesToLoad = 10;

export const MovieContainer: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMovies = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const newMovies = await fetchMovies(page, maxMoviesToLoad);

    setMovies((prevMovies) => [...prevMovies, ...newMovies]);
    setPage((prevPage) => prevPage + 1);

    if (newMovies.length < maxMoviesToLoad) {
      setHasMore(false); // No more movies to load
    }

    setLoading(false);
  }, [page, loading, hasMore]);

  // Scroll event listener to load more movies
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        !loading &&
        movies.length > 0 // Ensure it's not the initial render
      ) {
        loadMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [movies, loading, loadMovies]);

  useEffect(() => {
    let hasInitialized = false;

    if (!hasInitialized) {
      loadMovies();
      hasInitialized = true;
    }
  }, []);

  return (
    <Movies>
      {movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title}></MovieCard>
      ))}
      {loading && <p>Loading movies...</p>}
    </Movies>
  );
};
