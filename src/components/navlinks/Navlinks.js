import { NavLink } from "react-router-dom";

const Navlinks=(props)=>{
    return(
        <NavLink to={props.to} className="w-11/12 h-9 flex items-center justify-around cursor-pointer text-white mb-1 3xl:px-3">

            <h1 className="text-lg lg:text-md">{props.route}</h1>
            
            <img src={props.src} className="w-8 h-8 xl:w-5 xl:h-5"></img>

        </NavLink>
    );
};

export default Navlinks;