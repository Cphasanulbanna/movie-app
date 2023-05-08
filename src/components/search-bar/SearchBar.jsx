import React, { useContext } from "react";

//css
import "./search-bar.css";

// contexts
import { MovieContext } from "../../context/MovieContext";
import { ModeContext } from "../../context/ModeContext";

function SearchBar() {
    const { setSearchedWord } = useContext(MovieContext);
    const { whiteMode } = useContext(ModeContext);

    //storing search input value
    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchedWord(value);
    };
    return (
        <div className={`search-container ${whiteMode && "white-mode"}`}>
            <input
                type="text"
                placeholder="search movies...!"
                onChange={handleInputChange}
            />
            <span className="search-icon">
                <img
                    src={require("../../assets/images/search.svg").default}
                    alt="search-icon"
                />
            </span>
        </div>
    );
}

export default SearchBar;
