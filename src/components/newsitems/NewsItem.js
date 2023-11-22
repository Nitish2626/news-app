import { Link } from "react-router-dom";

const NewsItem = (props) => {

    let time = new Date(props.time);
    let t = time.toLocaleString();


    return (
        <div className="w-11/12 h-fit rounded-xl shadow-[2px_2px_10px_0_black] px-2 pb-6 pt-1 hover:shadow-none sm:w-72">

            <h2 className="text-center text-purple-900 overflow-hidden text-ellipsis text-xl font-semibold my-2">{props.source}</h2>

            <div className="flex justify-between text-gray-500">

                <span className="overflow-hidden text-ellipsis">
                    {props.author}
                </span>
                <span>
                    {t}
                </span>
            </div>

            <h3 className="text-lg font-semibold my-2">{props.title}</h3>

            <img src={props.image} className="w-11/12 h-40 rounded-md"></img>

            <p className="mb-4">{props.description}</p>

            <Link to={props.url} id="url" target="blank" className="bg-blue-600 text-white text-lg py-1.5 px-3 rounded-md text-center cursor-pointer shadow-[1px_1px_10px_0_grey] hover:bg-white hover:text-blue-500">Read More</Link>
        </div>
    );
}
export default NewsItem;