import { useEffect, useState } from "react";
import { getSearchedMovie } from "../utils/getSearchedMovie";
import MovieCard from "./MovieCart";

export default function Search() {
    const [searchText, setSearchText] = useState("");
    const [movieResult, setMovieResult] = useState([]);
    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }
    useEffect(() => {

        const getResult = async () => {
            const result = await getSearchedMovie(searchText);
            setMovieResult(result);
        };

        getResult();

    }, [searchText]);

    // console.log("..........", movieResult);

    return <>
        <div className="flex justify-center items-center border-b-2">
            <span className="text-2xl font-bold">Search Movie:</span>
            <input type="text"
                onChange={(e) => handleSearch(e)}
                className="text-2xl p-4 m-2 border-2 border-gray-400 rounded-full outline-none"
                placeholder="Movie Title: Titanic"
            />
        </div>
        <div>
            <h1 className="text-3xl font-bold flex justify-center py-5">Your searched result: </h1>
            <div className="grid grid-cols-4 gap-4 items-center">
                {
                    movieResult.map((movie) => <MovieCard movie={movie}></MovieCard>)
                }
            </div>
        </div>
    </>
}
