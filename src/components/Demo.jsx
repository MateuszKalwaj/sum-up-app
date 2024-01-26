import {copy, linkIcon, loader, tick} from '../assets';
import {useEffect, useState} from "react";
import {useLazyGetSummaryQuery} from "../services/article.js";

const Demo = () => {

    const [article, setArticle] = useState({
        url: '',
        summary: ''
    })

    const [allArticles, setAllArticles] = useState([]);

    const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))
        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data} = await getSummary({
            articleUrl: article.url
        });
        if (data?.summary) {
            const newArticle = {
                ...article,
                summary: data.summary
            }
            const updatedArticles = [newArticle, ...allArticles];
            setArticle(newArticle);
            setAllArticles(updatedArticles);

            localStorage.setItem('articles', JSON.stringify(updatedArticles))
        }
    }

    return (
        <section className="mt-16 w-full max-w-xl">
            <div className="flex flex-col w-full gap-2">
                <form className="relative flex justify-center items-center"
                      onSubmit={handleSubmit}
                >
                    <img src={linkIcon} alt="link-icon" className="absolute left-2 my-2"/>
                    <input
                        type="url"
                        placeholder="Enter the URL"
                        value={article.url}
                        onChange={(e) => setArticle({...article, url: e.target.value})}
                        required
                        className="url_input peer"
                    />

                    <button
                        type="submit"
                        className="submit_btn peer-focus:border-gray-900 peer-focus:text-gray-900"
                    >
                        ↵
                    </button>
                </form>
                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                    {allArticles.map((item, index) => (
                        <div
                            key={`link-${index}`}
                            onClick={() => setArticle(item)}
                            className="link_card">
                            <div className="copy_btn">
                                <img src={copy}
                                     alt="copy-icon"
                                     className="w-[40%] h-[40%] object-contain"/>
                            </div>
                            <p className="flex-1 font-satoshi text-blue-900 font-medium text-sm truncate">
                                {item.url}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='my-10 max-w-full flex justify-center items-center'>
                {isFetching ? (
                    <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
                ) : error ? (
                    <p className='font-inter font-bold text-black text-center'>
                        Sorry, some malicious elves stolen your results, or free tier for this month is out :(
                        <br />
                        <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                                Article <span className='orange_gradient'>Summary</span>
                            </h2>
                            <div className='summary_box'>
                                <p className='text-lg text-center m-3 text-gray-800 md:text-xl'>
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}
export default Demo
