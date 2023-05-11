import { createContext, useContext, useEffect, useState } from "react";

//packages
import axios from "axios";

//custom-hook
import useDebounce from "../hooks/useDebounce";

//creating MovieContext
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    //states
    const [searchedWord, setSearchedWord] = useState("");
    const [movies, setMovies] = useState([]);

    //params for movie api
    const API_KEY = "69dbeda68297ea0f8823be5bfee5b907";
    const PAGE = 1;

    //fetching movies
    const fetchMovies = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchedWord}&page=${PAGE}&include_adult=false`
            );
            setMovies(
                response.data.results.filter((movie) => {
                    return movie?.poster_path !== null;
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    useDebounce(fetchMovies, [searchedWord]);

    //setting default value for search inorder to get movies eventhough searchquery is empty
    useEffect(() => {
        if (searchedWord === "") {
            setSearchedWord("movies");
        }
    }, [searchedWord]);
    return (
        <MovieContext.Provider value={{ movies, searchedWord, setSearchedWord }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovies = () => {
    return useContext(MovieContext);
};
