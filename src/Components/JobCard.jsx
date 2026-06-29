import React, { useEffect, useState } from 'react'

import logoImage from "../assets/companyLogo.svg";
import { useNavigate } from 'react-router-dom';
const JobCard = ({ job , isSavedPage, onRemove  }) => {
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
        <div className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center md:items-start gap-5 bg-gradient-to-r from-purple-50 to-white">

            <img   className="h-20 w-20 object-contain" src={job.company_logo} alt={job.company_name} onError={(e) => {
                e.target.onerror = null;
                e.target.src = logoImage
            }} />

         <div className="flex flex-col justify-between flex-grow w-full">
                <div className='space-y-3'>
                    <h1 className='font-bold text-2xl'>{job.title}</h1>
                    <p>{job.company_name}</p>
                    <p>📍{job.candidate_required_location}</p>
                </div>
               <div className=" mt-3 flex flex-wrap gap-2">
  {job.tags.slice(0,4).map((tag) => (
    <span
      key={tag}
      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-700
hover:text-white"
    >
      {tag}
    </span>
  ))}
</div>
                <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3 mt-4">
           <button
 onClick={isSavedPage ? handleRemoveSavedJob : handleToggleSave}
  className={` active:scale-95 px-4 py-1.5 rounded-md transition-all duration-300 ${
    isSavedPage
      ? "bg-red-100 text-red-600 hover:bg-red-200"
      : isSaved
      ? "bg-green-100 text-green-700 hover:bg-green-200"
      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
  }`}
>
  {isSavedPage ? "🗑️ Remove" : isSaved ? "Saved" : " Save"}
</button>
                    <button
                        onClick={() => {
                            navigate(`/jobs/${job.id}`, {
                                state: { job }
                            });
                        }}
                        className="bg-purple-700 px-4 py-1.5 text-white rounded-md transition-all duration-300 hover:bg-purple-800 hover:scale-105 active:scale-95"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JobCard