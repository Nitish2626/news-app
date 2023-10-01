import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = (props) => {

    return (
        <div id="sidebar-div">

            <NavLink to="/" className="link">
                <button className="sidebar-btn">
                    <h1 className="h1">General</h1>
                </button>
            </NavLink>

            <NavLink to="/health" className="link">
                <button className="sidebar-btn">
                    <h1 className="h1">Health</h1>
                </button>
            </NavLink>

            <NavLink to="/science" className="link">
                <button className="sidebar-btn">
                    <h1 className="h1">Science</h1>
                </button>
            </NavLink>

            <NavLink to="/technology" className="link">
                <button className="sidebar-btn">
                    <h1 className="h1">Technology</h1>
                </button>
            </NavLink>

            <NavLink to="/business" className="link">
                <button className="sidebar-btn">
                    <h1 className="h1">Business</h1>
                </button>
            </NavLink>

            <NavLink to="/entertainment" className="link">
                <button className="sidebar-btn">
                    <h1 className="h1">Entertainment</h1>
                </button>
            </NavLink>

            <NavLink to="/sports" className="link">
                <button className="sidebar-btn">
                    <h1 className="h1">Sports</h1>
                </button>
            </NavLink>

        </div>
    );
}
export default Sidebar;