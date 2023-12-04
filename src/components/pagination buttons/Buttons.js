const Buttons=(props)=>{

    // const click=()=>(props.click);

    return(
        <button className="w-28 h-10 bg-blue-600 text-white text-xl rounded-md shadow-[2px_2px_10px_0px_grey] hover:text-blue-600 hover:bg-white" disabled={props.disabled} onClick={props.click}>
            {props.text}
        </button>
    );
};

export default Buttons;