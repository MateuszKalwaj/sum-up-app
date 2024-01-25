import Logo from '../assets/sumuplogo3.png'

const CoreInfo = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={Logo} alt="sum-up-logo" className="w-28 object-contain"/>
                <button
                    type="button"
                    onClick={() => window.open('https://github.com/MateuszKalwaj/sum-up-app')}
                    className="black_btn"
                >
                    Github
                </button>
            </nav>
            <h1 className="head_text">
                Sum-up<br/> articles<br/> with<br className="max-md:hidden"/> <span className="orange_gradient">OpenAI</span>
            </h1>
            <h2 className="desc p-2">
                Welcome to the AI reading summarizer. <br/>
                This open source app will allow you to summarize all the articles you want. <br/>
                <br/>
                If the article is in different language that english, it will be automatically translated.
            </h2>
        </header>
    )
}
export default CoreInfo
