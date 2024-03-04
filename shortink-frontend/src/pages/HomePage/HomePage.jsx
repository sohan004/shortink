import logo from '../../assets/logo/SORTINK_transparent.png'
import { IoIosArrowRoundDown, IoIosClose } from 'react-icons/io'
import { IoStatsChart } from 'react-icons/io5'
import { FaCopy } from 'react-icons/fa'
import { HashLoader } from 'react-spinners';
import { useEffect, useRef, useState } from 'react';
import { BACKEND_URL } from '../../App';
import toast from 'react-hot-toast';
import Sec2 from '../../components/Sec2/Sec2';
import { useNavigate } from 'react-router-dom';
import getSortUrl from '../../utilities/getSortUrl';
import CheckClick from '../../components/CheckClick/CheckClick';

const HomePage = () => {
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState([])
    const inputRef = useRef()
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const createSortUrl = () => {
        if (!inputRef.current.value) {
            toast.error('Please enter a valid URL')
            return
        }
        setLoading(true)
        fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ url: inputRef.current.value }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.error(data.message)
                }
                else {
                    setUrl(prev => [`${data.shortUrl}`, ...prev])
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const remove = (index) => {
        setUrl(prev => prev.filter((_, i) => i !== index))
    }

    const copy = async (index) => {
        const u = await getSortUrl(url[index])
        await navigator.clipboard.writeText(u)
        await toast.success('URL copied successfully!')
    }

    const redirectToDetails = (code) => {
        navigate(`/D/${code}`)
    }

    return (
        <div className=''>
            <div className='fixed  top-0 left-0 w-full h-full bg-[#5f2eea] bg-opacity-5 '></div>
            <div className='bg-[#eadcf5] p-3 pb-12 md:pb-18 rounded-b-[40px] md:rounded-b-[250px] relative z-50 shadow-md'>
                <h1 className='text-center text-2xl md:text-4xl font-medium text-gray-700 mt-4'>I'm Long <span className='font-extrabold text-[#5227c9]'>URL</span> Shortner</h1>
                <p className='text-center text-base md:text-lg mt-3 text-gray-500'>A fast and simple URL shortener</p>
                <div className='flex justify-center mt-3 text-4xl text-[#543a9b]'>
                    <IoIosArrowRoundDown className='animate-bounce' />
                </div>
                <div className='flex items-center justify-center mt-5 px-4'>
                    <div className='flex items-center justify-center w-full relative max-w-[600px]'>
                        <input
                            onKeyDown={(e) => e.key === 'Enter' && createSortUrl()}
                            ref={inputRef}
                            placeholder='Paste or type your long URL here...'
                            className='md:py-3 py-2 px-3  shadow  w-full focus:outline-none' type="text" />
                        <button
                            onClick={createSortUrl}
                            className='bg-[#5f2eea] hover:bg-[#2f176e] duration-75 font-semibold text-white px-2 md:px-4  md:py-3 py-2'>Shorten</button>
                        <p 
                        onClick={() => setShowModal(true)}
                        className='absolute top-[101%] text-[#2f176e] left-1 text-sm font-semibold underline cursor-pointer'>Check Click?</p>
                    </div>
                </div>

                {loading && <div className='flex justify-center my-5'>
                    <HashLoader color="#5f2eea" />
                </div>}

                {url.length > 0 && <div className='flex gap-5 flex-col items-center mt-7'>
                    {url.map((u, i) =>
                        <p
                            key={i}
                            className='bg-[#c1b4e6a4] py-2 px-5 flex items-center relative'>
                            {getSortUrl(u)}
                            <IoStatsChart
                                onClick={() => redirectToDetails(u)}
                                className='mx-6 text-[#2f176e] cursor-pointer' />
                            <FaCopy
                                onClick={() => copy(i)}
                                className=' text-[#2f176e] cursor-pointer' />
                            <IoIosClose
                                onClick={() => remove(i)}
                                className='text-2xl absolute -right-6 text-gray-600 cursor-pointer' />
                        </p>)}
                </div>}
            </div>

            <Sec2></Sec2>
            <CheckClick
                state={showModal}
                setState={setShowModal}
            ></CheckClick>

        </div>
    );
};

export default HomePage;