import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import NewsItem from "../newsitems/NewsItem";
import axios from "axios";
import Buttons from "../pagination buttons/Buttons";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState();
    const [pageSize, setPageSize] = useState(20);

    const [prev,setPrev]=useState(false);   
    const [next,setNext]=useState(false);

    let title = props.category.slice(1);
    document.title = props.category[0].toUpperCase() + title;

    useEffect(() => {

        const api = async () => {
            try {
                setLoader(true);

                {prev && setPage((prev) => (prev !== 1 ? prev - 1 : prev))};

                {next && setPage((prev) => (prev !== Math.ceil(totalResult / pageSize) ? prev + 1 : prev))};

                const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${props.search}&country=${props.country}&category=${props.category}&apiKey=b7e5090adc214eb5be61fabad71ff288&page=${page}&pageSize=${pageSize}`);
                const data = await res.data.articles;
                console.log("Page : ", page);
                setTotalResult(await res.data.totalResults);
                console.log("Total result : ", totalResult);
                setArticles(await data);
                setLoader(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        api();
    }, [props.search, props.country, totalResult, page, prev, next]);

    const prevClick=(p)=>{
        setPrev(p);
    }
    const nextClick=(n)=>{
        setNext(n);
    }

    // const moreArticles = async () => {
    //     try {
    //         setLoader(true);

    //         setPage((prev) => (prev !== Math.ceil(totalResult / pageSize) ? prev + 1 : prev));

    //         const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${props.search}&country=${props.country}&category=${props.category}&apiKey=b7e5090adc214eb5be61fabad71ff288&page=${page}&pageSize=${pageSize}`);
    //         const data = await res.data.articles;
    //         console.log("More page : ", page);
    //         setArticles(await data);
    //         console.log("Page length : ", data.length);
    //         setLoader(false);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }


    // const lessArticles = async () => {
    //     try {
    //         setLoader(true);

    //         setPage((prev) => (prev !== 1 ? prev - 1 : prev));

    //         const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${props.search}&country=${props.country}&category=${props.category}&apiKey=b7e5090adc214eb5be61fabad71ff288&page=${page}&pageSize=${pageSize}`);
    //         const data = await res.data.articles;
    //         console.log("Less Page : ", page);
    //         setArticles(await data);
    //         setLoader(false);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }

    return (
        <>
            <div className="w-full flex items-center justify-center flex-wrap gap-10 pt-12 pb-5">

                {loader ? <Loader borderColor="border-blue-500" /> : articles.map((item, i) => {
                    return <NewsItem key={i} title={item.title} image={item.urlToImage} description={item.description} url={item.url} source={item.source.name} author={item.author} time={item.publishedAt} />
                })}

            </div>

            <section className="w-full flex items-center justify-evenly mb-5 mt-5">

                <Buttons text="&larr; Prev" click={prevClick} disabled={page === 1}></Buttons>
                <Buttons text="Next &rarr;" click={nextClick} disabled={page === Math.ceil(totalResult / pageSize)}></Buttons>

            </section>

        </>
    );
}
export default News;