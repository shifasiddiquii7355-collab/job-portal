import React, { useEffect, useState } from 'react'
import JobCard from '../Components/JobCard';
import Navbar from '../Components/Navbar';
const SavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState([]);
    useEffect(() => {
        const jobs =
            JSON.parse(localStorage.getItem("savedJobs")) || [];

        setSavedJobs(jobs);
    }, []);
    if (savedJobs.length === 0) {
        return (
            <>
                <Navbar />
                <div className="flex justify-center items-center h-[90vh] bg-gradient-to-r
from-purple-50
to-white">
                    <h2 className="text-3xl font-bold text-gray-700">
                        No Saved Jobs Yet
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Start exploring jobs and save your favorites.
                    </p>
                </div>
            </>
        )
    }
    function handleRemoveJob(jobId) {
        const updatedSavedJobs = savedJobs.filter((savedJob) => savedJob.id !== jobId)
        setSavedJobs(updatedSavedJobs)
        localStorage.setItem(
            "savedJobs",
            JSON.stringify(updatedSavedJobs)
        );
    }
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-purple-50 to-white">
                <div className="max-w-5xl mx-auto space-y-6 pt-8">  {savedJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        isSavedPage={true}
                        onRemove={handleRemoveJob}
                    />
                ))}</div>
            </div>
        </>
    )
}

export default SavedJobs