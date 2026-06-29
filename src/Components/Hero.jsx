import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Hiring-amico.svg";
import { useState } from "react"

const Hero = () => {
    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate();
    return (
        <section className="flex flex-col lg:flex-row w-full min-h-[75vh] items-center px-6 lg:px-10 bg-gradient-to-r from-purple-50 to-white gap-10">
           <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
                <h1 className='text-5xl leading-tight font-bold text-purple-800 '>
                    Find Your Dream Job Today
                </h1>
                <p className='text-gray-600 leading-relaxed max-w-md'>
                    Explore thousands of opportunities from top companies and take the
                    next step in your career.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <input type="text" placeholder='Search jobs, Companies...' className='focus:ring-2
focus:ring-purple-500
focus:outline-none flex-1 border border-gray-300 rounded-md px-5 py-2' value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button onClick={() => navigate(`/jobs?search=${searchText}`)} className='active:scale-95 bg-purple-600 rounded-md text-white px-5 py-2 hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg'>🔍 Search Jobs</button>
                </div>
                <div>
                    <a className="text-gray-900">New here? Sign up for free→</a>
                </div>
            </div>
            <div className="w-full lg:w-2/5 flex justify-center items-center">
                <img src={heroImage} alt=" Hiring Illustration" className='w-full max-w-md hover:scale-105 transition-all duration-500' />
            </div>
        </section>
    )
}

export default Hero