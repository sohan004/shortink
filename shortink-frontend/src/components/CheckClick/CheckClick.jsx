import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckClick = ({ state, setState }) => {
    const navigate = useNavigate()
    const inputRef = useRef();
    useEffect(() => {
        if (state) {
            inputRef.current.focus()
        }
    }, [state]);

    const track = () => {
        if (!inputRef.current.value) return toast.error('Please enter a valid URL')
        const code = inputRef.current.value.split('/').pop()
        if (code.length !== 5) return toast.error('Invalid URL')
        navigate(`/D/${code}`)
    }

    return (
        <div className="">
            {state && <div className="fixed top-0 left-0 w-full h-full bg-black z-50 bg-opacity-25"></div>}
            <div className={`fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  p-3 z-50 rounded-lg max-w-[550px] duration-200 w-full ${state ? 'visible scale-100 opacity-100' : 'invisible scale-75 opacity-0'}`}>
                <div className="p-6  rounded-md  w-full bg-[#eadcf5]">
                    <input
                        // onKeyDown={(e) => e.key === 'Enter' && createSortUrl()}
                        ref={inputRef}
                        placeholder='Paste short URL here...'
                        className='md:py-3 py-2 px-3  shadow  w-full focus:outline-none ' type="text" />
                    <div className="flex justify-center mt-4 gap-4">
                        <button
                            onClick={() => setState(false)}
                            className='bg-[#d5caf5] hover:bg-[#bdadec] duration-75 font-semibold text-[#4820b6]  px-4   py-2'>Close</button>
                        <button
                            onClick={() => track()}
                            className='bg-[#5f2eea] hover:bg-[#2f176e] duration-75 font-semibold text-white  px-4   py-2'>Track</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckClick;