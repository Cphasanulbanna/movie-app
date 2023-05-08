import React, { useContext } from "react";

//css
import "./movies.css";

//components
import SearchBar from "../search-bar/SearchBar";
import MoviesList from "../movies-list/moviesList";

//mode context
import { ModeContext } from "../../context/ModeContext";

function Movies() {
    const { whiteMode } = useContext(ModeContext);
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
