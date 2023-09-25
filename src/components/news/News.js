import { useEffect, useState } from "react";
import "./News.css";
import Loader from "../Loader/Loader";
import NewsItem from "../newsitems/NewsItem";
import axios from "axios";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(false);

    document.title=props.category;

    const api = async () => {
        try {
            props.progress(0);
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b7e5090adc214eb5be61fabad71ff288`)
            props.progress(50)
            const data =await res.data.articles;
            props.progress(70)
            setArticles(await data);
            props.progress(100);
        }
        catch (err) {
            console.log(err);
        }
    };
    useEffect(()=>{
        api();
    },[]);

    return (
        <div id="news-div">
            {loader ? <Loader /> : articles.map((item) => {
                return <NewsItem title={item.title} image={item.urlToImage} description={item.description} url={item.url} source={item.source.name} author={item.author} time={item.publishedAt} />
            })}
        </div>
    );
}
export default News;