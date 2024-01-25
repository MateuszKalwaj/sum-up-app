import {copy, linkIcon, loader, tick} from '../assets';

const Demo = () => {


    return (
        <section className="mt-16 w-full max-w-xl">
            <div className="flex flex-col w-full gap-2">
                <form className="relative flex justify-center items-center"
                      onSubmit={() => {
                      }}
                >
                    <img src={linkIcon} alt="link-icon" className="absolute left-2 my-2"/>
                    <input
                        type="url"
                        placeholder="Enter the URL"
                        value=""
                        onChange={() => {
                        }}
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
