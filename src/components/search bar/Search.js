import { useState } from "react";
import "./Search.css";

const Search = (props) => {

    const changeSearch = (events) => {
        props.search(events.target.value);
    }

    const clear=()=>{
        props.search("");
    }


    return (
        <section id="search-box">
            <input type="text" id="search" placeholder={`Search for ${props.selected} news`} onChange={changeSearch} value={props.value}></input>
            <button id="cancel-btn" onClick={clear}>
                <i className="fa-solid fa-xmark"></i>
            </button>
        </section>
    );
}
export default Search;