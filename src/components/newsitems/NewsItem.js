import { Link } from "react-router-dom";
import "./NewsItem.css";

const NewsItem = (props) => {

    let time = new Date(props.time);
    let t = time.toLocaleString();


    return (
        <div id="news-item">
            <h2 id="h2">{props.source}</h2>
            <div id="div">
                <span>
                    {props.author}
                </span>
                <span>
                    {t}
                </span>
            </div>
            <h3>{props.title}</h3>
            <img src={props.image} id="img"></img>
            <p>{props.description}</p>
            <Link to={props.url} id="url" target="blank">Read More</Link>
        </div>
    );
}
export default NewsItem;