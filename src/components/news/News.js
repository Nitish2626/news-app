import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import NewsItem from "../newsitems/NewsItem";
import axios from "axios";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(false);
    const [page,setPage]=useState(1);
    const [totalResult,setTotalResult]=useState();

    let title = props.category.slice(1);
    document.title = props.category[0].toUpperCase() + title;

    const moreArticles=async ()=>{
        try {
            setPage(page+1);
            setLoader(true);
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${props.search}&country=${props.country}&category=${props.category}&apiKey=b7e5090adc214eb5be61fabad71ff288&page=${page}&pageSize=10`);
            const data = await res.data.articles;
            setTotalResult(await res.data.totalResults); 
            console.log("more",totalResult);
            setArticles(articles.concat(await data));
            setLoader(false);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        const api = async () => {
            try {
                props.progress(10);
                const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${props.search}&country=${props.country}&category=${props.category}&apiKey=b7e5090adc214eb5be61fabad71ff288&page=${page}&pageSize=10`)
                props.progress(50);
                const data = await res.data.articles;
                setTotalResult(await res.data.totalResults);
                console.log(totalResult);
                props.progress(70);
                setArticles(await data);
                props.progress(100);
                if(articles.length !== totalResult){
                    moreArticles();
                }
            }
            catch (err) {
                console.log(err);
            }
        };
        api();
    }, [props.search,props.country,totalResult]);

    return (
        <div className="w-full flex items-center justify-center flex-wrap gap-10 pt-12 pb-5 sm:gap-8">

            {loader ? <Loader /> : articles.map((item, i) => {
                return <NewsItem key={i} title={item.title} image={item.urlToImage} description={item.description} url={item.url} source={item.source.name} author={item.author} time={item.publishedAt} />
            })}

        </div>
    );
}
export default News;