import React, { useContext } from "react";

//css;
import "./movies-list.css";

//movie context
import { MovieContext } from "../../context/MovieContext";
import { modeContext } from "../../context/ModeContext";

function MoviesList() {
    //fetching movies from movie context
    const { movies } = useContext(MovieContext);
    const { whiteMode } = useContext(modeContext);

    return (
        <div className={`movie-list-box ${whiteMode && "white-mode"}`}>
            {movies?.map((movie) => (
                <div
                    key={movie?.id}
                    className="movie"
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                        alt="movie-poster"
                    />
                </div>
            ))}
        </div>
    );
}

export default MoviesList;
