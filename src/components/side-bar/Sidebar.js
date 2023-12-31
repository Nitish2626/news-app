import Navlinks from "../navlinks/Navlinks";
import general from "../../images/news.png";
import health from "../../images/health.png";
import science from "../../images/science.png";
import technology from "../../images/technology.png";
import business from "../../images/business.png";
import entertainment from "../../images/entertainment.png";
import sports from "../../images/sports.png";

const Sidebar = (props) => {

    return (
        <div className={`w-52 flex flex-col items-center justify-center fixed top-10 right-0 bg-blue-500 rounded-md py-1 ${props.show===false ? "hidden" : ""} 3xl:flex 3xl:flex-row 3xl:w-5/6 3xl:h-10 3xl:px-1 3xl:top-1 3xl:left-24 3xl:gap-5 3xl:bg-transparent`}>

            <Navlinks to="/" route="General" src={general} />

            <Navlinks to="/health" route="Health" src={health} />

            <Navlinks to="/science" route="Science" src={science} />

            <Navlinks to="/technology" route="Technology" src={technology} />

            <Navlinks to="/business" route="Business" src={business} />

            <Navlinks to="/entertainment" route="Entertainment" src={entertainment}  />

            <Navlinks to="/sports" route="Sports" src={sports} />

        </div >
    );
}
export default Sidebar;