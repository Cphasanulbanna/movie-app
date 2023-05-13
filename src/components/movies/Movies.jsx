import React, { useContext } from "react";

//css
import "./movies.css";

//components
import SearchBar from "../search-bar/SearchBar";
import MoviesList from "../movies-list/moviesList";

//mode context
import { useMode } from "../../context/ModeContext";
import Footer from "../footer/Footer";

function Movies() {
    const { whiteMode } = useMode();
    return (
        <>
            <section className={`main-container ${whiteMode && "white-mode"}`}>
                <section className="container">
                    <SearchBar />
                    <MoviesList />
                </section>
            </section>
            <Footer />
        </>
    );
}

export default Movies;
