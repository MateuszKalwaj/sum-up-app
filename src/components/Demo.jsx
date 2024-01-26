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
        </section>
    )
}
export default Demo
