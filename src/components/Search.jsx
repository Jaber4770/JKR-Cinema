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
    const getResult = async () => {
      const result = await getSearchedMovie(searchText);
      setMovieResult(result);
    };

    getResult();
  }, [searchText]);

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Search */}
      <div className="border-b-2 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-center items-center gap-3">
          <span className="text-2xl font-bold">
            Search Movie:
          </span>

          <input
            type="text"
            onChange={handleSearch}
            className="w-full sm:w-96 text-xl p-3 border-2 border-gray-400 rounded-full outline-none focus:border-violet-600"
            placeholder="Movie Title: Titanic"
          />
        </div>
      </div>

      {/* Search Result */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-center mb-10">
          Your Search Result
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">

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