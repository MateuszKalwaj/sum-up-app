import {copy, linkIcon, loader, tick} from '../assets';
import {useState} from "react";

const Demo = () => {

    const [article, setArticle] = useState({
        url: '',
        summary: ''
    })

    const handleSubmit = async (e) => {
        alert('Submitted!')
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

            </div>
        </section>
    )
}
export default Demo
