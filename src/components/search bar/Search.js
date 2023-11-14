const Search = (props) => {

    const changeSearch = (events) => {
        props.search(events.target.value);
    }

    const clear=()=>{
        props.search("");
    }

    return (
        <section className="w-full h-10 flex items-center justify-center fixed bg-white px-1 shadow-[2px_2px_10px_0px_black]">

            <input type="text" className="w-11/12 h-9 rounded-tl-md rounded-bl-md text-lg px-2 outline-none" placeholder={`Search for ${props.selected} news`} onChange={changeSearch} value={props.value}></input>

            <button className="w-10 h-9 flex items-center justify-center bg-blue-500" onClick={clear}>

                <i className="fa-solid fa-xmark text-white"></i>

            </button>

        </section>
    );
}
export default Search;