import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import NewsItem from "../newsitems/NewsItem";
import axios from "axios";
import Buttons from "../pagination buttons/Buttons";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(false);
    const [page,setPage]=useState(1);
    const [totalResult,setTotalResult]=useState();

    let title = props.category.slice(1);
    document.title = props.category[0].toUpperCase() + title;

    useEffect(() => {

        const api = async () => {
            try {
                props.progress(10);
                const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${props.search}&country=${props.country}&category=${props.category}&apiKey=b7e5090adc214eb5be61fabad71ff288&page=${page}&pageSize=20`);
                props.progress(50);
                const data = await res.data.articles;
                setTotalResult(await res.data.totalResults);
                props.progress(70);
                setArticles(await data);
                props.progress(100);
                // if(articles.length !== totalResult){
                //     moreArticles();
                // }
            }
            catch (err) {
                console.log(err);
            }
        };
        api();
    }, [props.search,props.country,totalResult]);

    // const moreArticles=async ()=>{
    //     try {
    //         // if()
    //         setPage((prev)=> prev+1);
    //         setLoader(true);
    //         const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${props.search}&country=${props.country}&category=${props.category}&apiKey=b7e5090adc214eb5be61fabad71ff288&page=${page}&pageSize=20`);
    //         const data = await res.data.articles;
    //         // setTotalResult(await res.data.totalResults); 
    //         setArticles(articles.concat(await data));
    //         setTotalResult((prev)=> prev-articles.length);
    //         console.log("more : ",totalResult);
    //         setLoader(false);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }

    return (
        <div className="w-full flex items-center justify-center flex-wrap gap-10 pt-12 pb-5">

            {loader ? <Loader borderColor="border-blue-500" /> : articles.map((item, i) => {
                return <NewsItem key={i} title={item.title} image={item.urlToImage} description={item.description} url={item.url} source={item.source.name} author={item.author} time={item.publishedAt} />
            })}

            <section className="flex items-center justify-end">
                <Buttons text="Prev"></Buttons>
                <Buttons text="Next"></Buttons>
            </section>

        </div>
    );
}
export default News;