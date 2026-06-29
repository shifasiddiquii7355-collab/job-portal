
import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../Components/Navbar";
import JobCard from "../Components/JobCard"
const Jobs = () => {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
const [searchParams] = useSearchParams();
const search = searchParams.get("search")|| "";

console.log(search);

  useEffect(
    () => {
      fetchJobs()
    }, []
  )
  async function fetchJobs() {
    try {
      setLoading(true)
      const response = await fetch("https://remotive.com/api/remote-jobs")
      const data = await response.json()
    
      if (data && data.jobs) {
        setJobs(data.jobs)
      }
      else {
        setJobs([])
      }
    }
    catch (error) {
      console.log("Error fetching jobs", error)
      setJobs([])
    }
    finally {
      setLoading(false)
    }
  }
  const filteredJobs =  jobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company_name.toLowerCase().includes(search.toLowerCase())
        );
      })
 if (loading) {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <h2 className="text-2xl font-semibold text-purple-700">
        🔄 Loading jobs...
      </h2>
    </div>
  );
}
if(filteredJobs.length===0)
{
 return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[90vh] bg-gradient-to-r
from-purple-50
to-white">
        <h2 className="text-2xl font-semibold text-gray-700">
          🔍 No jobs found
        </h2>
      </div>
    </div>
  );
}
return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-white">
      <div className="max-w-5xl mx-auto space-y-6 pt-8">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  </>
);
}

export default Jobs