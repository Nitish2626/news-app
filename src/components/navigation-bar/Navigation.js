const Navigation = (props) => {

    const showCountry=()=>{
        props.show(true);
    }

    return (
        <nav className="w-full h-10 sticky top-0 bg-blue-500 flex items-center justify-between">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcW8zoDItzqViYNVJozeC__TYcszlrg3_67g&usqp=CAU" className="w-10 h-8 ml-2 rounded-md"></img>

            <button className="w-9 h-9 bg-transparent flex justify-center items-center border-none outline-none fill-white md:hidden" onClick={showCountry}>
                <svg
                    viewBox="0 0 24 24"
                > 
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 00-2-2h-4v-3a2 2 0 002-2V7h1a2 2 0 002-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 01-1.67 4.873z" />
                </svg>
            </button>

            <button className="w-10 h-6 flex flex-col items-center justify-between bg-transparent rounded-full border-none outline-none cursor-pointer" onClick={() =>{
                props.func((prev)=>
                    !prev
                );
            }}
            >
                <span className="w-8 h-1 bg-white rounded-md" id="line1"></span>
                <span className="w-8 h-1 bg-white rounded-md" id="line2"></span>
                <span className="w-8 h-1 bg-white rounded-md" id="line3"></span>
            </button>

        </nav>
    );
}
export default Navigation;