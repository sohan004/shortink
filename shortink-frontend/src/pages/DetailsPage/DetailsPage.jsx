import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../../App";
import getSortUrl from "../../utilities/getSortUrl";
import moment from "moment";
import { HashLoader } from "react-spinners";

const DetailsPage = () => {
    const id = useParams().id
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        fetch(`${BACKEND_URL}/d/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    return navigate('/')
                }
                setData(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div className="flex justify-center p-4 flex-col items-center">
            {loading ?
                <div className='flex justify-center my-5'>
                    <HashLoader color="#5f2eea" />
                </div>
                : <div className="max-w-[450px] grid gap-4 w-full p-5 bg-[#bcabe950] rounded-xl mt-5 shadow-xl">
                    <h1 className="text-2xl font-semibold text-[#543a9b] text-center mb-4">Click: {data?.click}</h1>
                    <div className="flex items-start gap-4">
                        <p className="w-[20%] font-semibold text-[#543a9b] text-sm md:text-base flex justify-between ">Main Url <span>:</span></p>
                        <p
                            style={{ wordBreak: "break-word" }}
                            className="flex-1 text-sm whitespace-pre-wrap ">{data?.url}</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <p className="w-[20%] font-semibold text-[#543a9b] text-sm md:text-base flex justify-between">Short Url <span>:</span></p>
                        <p className="flex-1 text-sm">{getSortUrl(data?.code)}</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <p className="w-[20%] font-semibold text-[#543a9b] text-sm md:text-base flex justify-between">Create  <span>:</span></p>
                        <p className="flex-1 text-sm">{moment(data?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                </div>
            }
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 2, 2020</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 3, 2020</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 4, 2020</span>
                                    <span>2.4K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            {/* <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leadi text-center">What our customers are saying about us</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p>Leroy Jenkins</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit doloribus, voluptatum quidem magnam velit excepturi nobis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p>Leroy Jenkins</p>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default DetailsPage;