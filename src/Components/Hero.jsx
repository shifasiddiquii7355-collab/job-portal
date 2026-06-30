import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Hiring-amico.svg";
import { useState } from "react"
import { FaSearch } from "react-icons/fa";

const Hero = () => {
    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate();
    return (
        <section className="flex flex-col lg:flex-row w-full min-h-[75vh] items-center px-6 lg:px-10 bg-gradient-to-r from-purple-50 to-white gap-10">
           <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
           <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
  🚀 Trusted by 10,000+ developers worldwide
</div>
                <h1 className="text-5xl lg:text-6xl leading-tight font-bold">
  Find Your{" "}
  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
    Dream Job
  </span>{" "}
  Today
</h1>
               <p className="text-gray-600 leading-relaxed max-w-xl">
                    Discover thousands of remote and on-site opportunities from leading companies and take the next step toward your dream career.
                </p>
  <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">

  <div className="flex items-center flex-1 px-4">
    <FaSearch className="text-gray-400 mr-3" />

    <input
      type="text"
      placeholder="Search jobs, companies..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="flex-1 py-3 outline-none bg-transparent"
    />
  </div>

  <button
    onClick={() => navigate(`/jobs?search=${searchText}`)}
   className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-600 rounded-xl text-white px-6 py-3 hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
  >
    <FaSearch />
    Search Jobs
  </button>

</div>
<div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
  <div>
    <h2 className="text-2xl font-bold text-purple-700">10K+</h2>
    <p className="text-gray-500 text-sm">Jobs</p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-purple-700">500+</h2>
    <p className="text-gray-500 text-sm">Companies</p>
  </div>

  <div>
    <h2 className="text-2xl font-bold text-purple-700">120+</h2>
    <p className="text-gray-500 text-sm">Countries</p>
  </div>

                </div>
              
            </div>
            <div className="w-full lg:w-2/5 flex justify-center items-center">
                <img src={heroImage} alt=" Hiring Illustration"  className="w-full max-w-lg hover:scale-105 transition-all duration-500 drop-shadow-2xl"/>
            </div>
        </section>
    )
}

export default Hero