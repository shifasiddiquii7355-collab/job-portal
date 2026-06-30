import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import logoImage from "../assets/companyLogo.svg";
import { useNavigate } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaBookmark,
  FaTrash,
  FaArrowRight,
  FaBriefcase,
  FaMoneyBillWave,
} from "react-icons/fa";
const JobCard = ({ job, isSavedPage, onRemove }) => {
    const navigate = useNavigate()
    const [isSaved, setIsSaved] = useState(false)
    useEffect(() => {
        const savedJobs =
            JSON.parse(localStorage.getItem("savedJobs")) || [];

        const exists = savedJobs.some((savedJob) => {
            return savedJob.id === job.id;
        });

        setIsSaved(exists);
    }, [job.id]);

    function handleRemoveSavedJob() {
        if (onRemove) {
            onRemove(job.id);
        }
    }

    function handleToggleSave() {
        const savedJobs =
            JSON.parse(localStorage.getItem("savedJobs")) || [];

        const exists = savedJobs.some((savedJob) => {
            return savedJob.id === job.id;
        });

        if (exists) {
            const updatedJobs = savedJobs.filter(
                (savedJob) => savedJob.id !== job.id
            );

            localStorage.setItem(
                "savedJobs",
                JSON.stringify(updatedJobs)
            );

            setIsSaved(false);
        } else {
            savedJobs.push(job);

            localStorage.setItem(
                "savedJobs",
                JSON.stringify(savedJobs)
            );

            setIsSaved(true);
        }
    }
    return (
        <div onClick={() =>
  navigate(`/jobs/${job.id}`, {
    state: { job },
  })
} className=" cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-5 bg-gradient-to-r from-purple-50 to-white hover:ring-2 hover:ring-purple-200">

            <img className="h-20 w-20 rounded-xl bg-white shadow-md p-2 object-contain" src={job.company_logo} alt={job.company_name} onError={(e) => {
                e.target.onerror = null;
                e.target.src = logoImage
            }} />

            <div className="flex flex-col justify-between flex-grow w-full">
                <div className='space-y-3'>
                    <h1 className='font-bold text-2xl md:text-3xl'>{job.title}</h1>
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        <FaBuilding className="text-purple-600" /> {job.company_name}
                    </div>
                    <p className="flex items-center gap-2 text-gray-500 font-medium">
                        <FaMapMarkerAlt className="text-red-500" /> {job.candidate_required_location}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1  rounded-full text-sm font-medium">
<FaBriefcase className="text-green-600" />
<span>{job.category}</span>
</div>

{job.salary && (
  <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
    <FaMoneyBillWave className="text-yellow-500" /> {job.salary}
  </div>
)}

                </div>
                <div className=" mt-3 flex flex-wrap gap-2">
                    {job.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="cursor-default bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-end">
                    <button
                        onClick={(e) => {
  e.stopPropagation();
  isSavedPage ? handleRemoveSavedJob() : handleToggleSave();
}}
                        className={`shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 px-4 py-1.5 rounded-xl transition-all duration-300 ${isSavedPage
                                ? "bg-red-100 text-red-600 hover:bg-red-200"
                                : isSaved
                                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                                    : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                            }`}
                    >
                        {isSavedPage ? (<><FaTrash /> Remove</>) : isSaved ? (<><FaBookmark />Saved</>) :  (<><FaBookmark />Save Job</>)}
                    </button>
                    <button
                      onClick={(e) => {
  e.stopPropagation();

  navigate(`/jobs/${job.id}`, {
    state: { job },
  });
}}
                        className="shadow-md hover:shadow-lg flex items-center justify-center gap-2  bg-purple-700 px-4 py-1.5 text-white rounded-xl transition-all duration-300 hover:bg-purple-800 hover:scale-105 active:scale-95"
                    >
                        View Details <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JobCard