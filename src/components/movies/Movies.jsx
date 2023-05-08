import React, { useContext } from "react";

//css
import "./movies.css";

//components
import SearchBar from "../search-bar/SearchBar";
import MoviesList from "../movies-list/moviesList";

//mode context
import { modeContext } from "../../context/ModeContext";

function Movies() {
    const { whiteMode } = useContext(modeContext);
    return (
        <section className={`main-container ${whiteMode && "white-mode"}`}>
            <section className="container">
                <SearchBar />
                <MoviesList />
            </section>
        </section>
    );
}

export default Movies;
