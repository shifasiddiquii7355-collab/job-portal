import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../Components/Navbar";
import JobCard from "../Components/JobCard"
const Jobs = () => {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("default")
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
      let sortedJobs = [...filteredJobs];
      if (sortBy === "title") {
  sortedJobs.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}

if (sortBy === "company") {
  sortedJobs.sort((a, b) =>
    a.company_name.localeCompare(b.company_name)
  );
}
 if (loading) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-50 to-white flex flex-col justify-center items-center">
        <div className="w-14 h-14 border-4 border-purple-200 border-t-purple-700 rounded-full animate-spin"></div>

        <p className="mt-6 text-xl font-semibold text-purple-700">
          Loading Jobs...
        </p>

        <p className="text-gray-500 mt-2">
          Please wait while we fetch the latest opportunities.
        </p>
      </div>
    </>
  );
}
if (filteredJobs.length === 0) {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-purple-50 to-white flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl mb-4">🔍</h1>

        <h2 className="text-3xl font-bold text-gray-800">
          No Jobs Found
        </h2>

        <p className="text-gray-500 mt-3 max-w-md">
          We couldn't find any jobs matching your search.
          Try a different keyword.
        </p>
      </div>
    </>
  );
}
return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-white">
      <div className="max-w-5xl mx-auto space-y-6 px-4 pb-10">

    <h1 className="text-4xl font-bold text-gray-900">
        Explore <span className="text-purple-700">Jobs</span>
    </h1>

    <p className="text-gray-600 mt-3 max-w-2xl">
        Browse remote opportunities from companies around the world and
        discover your next career move.
    </p>

    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

        <div className="bg-white px-5 py-3 rounded-xl shadow-sm border">
            <span className="text-gray-500">
                Showing
            </span>

            <span className="font-bold text-purple-700 ml-2">
                {filteredJobs.length}
            </span>

            <span className="text-gray-500 ml-2">
                Jobs
            </span>
        </div>
<div>
  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="bg-white border rounded-xl px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-purple-500"
  >
    <option value="default">Sort By</option>
    <option value="title">Job Title (A-Z)</option>
    <option value="company">Company (A-Z)</option>
  </select>
</div>
    </div>

</div>
      <div className="max-w-5xl mx-auto space-y-6 pt-8">
        {sortedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  </>
);
}

export default Jobs