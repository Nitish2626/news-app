import { NavLink } from "react-router-dom";

const Navlinks=(props)=>{
    return(
        <NavLink to={props.to} className="w-3/4 h-9 flex items-center justify-around cursor-pointer text-white mb-1">

            <img src={props.src} className="w-8 h-8"></img>

            <h1 className="text-lg">{props.route}</h1>

        </NavLink>
    );
};

export default Navlinks;