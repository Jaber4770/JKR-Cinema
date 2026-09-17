import { useEffect, useState } from "react";
import { getSearchedMovie } from "../utils/getSearchedMovie";
import MovieCard from "./MovieCart";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [movieResult, setMovieResult] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const getMovies = async () => {
      // Input empty 
      if (searchText.trim() === "") {
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();
        const formattedData = data.map((movie) => ({
          show: movie,
        }));
        setMovieResult(formattedData);
        return;
      }

      const result = await getSearchedMovie(searchText);

      setMovieResult(result);
    };

    getMovies();
  }, [searchText]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Search */}
      <div className="border-b-2 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-6 py-5 sm:flex-row">

          <span className="text-2xl font-bold">
            Search Movie:
          </span>

          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            className="w-full rounded-full border-2 border-gray-400 p-3 text-xl outline-none focus:border-violet-600 sm:w-96"
            placeholder="Movie Title: Titanic"
          />

        </div>
      </div>

      {/* Movies */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid grid-cols-1 justify-items-center gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {movieResult.map((movie) => (
            <MovieCard
              key={movie.show.id}
              movie={movie}
            />
          ))}

        </div>

      </section>
    </main>
  );
}