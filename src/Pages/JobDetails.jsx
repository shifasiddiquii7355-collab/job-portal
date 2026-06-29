import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import logoImage from "../assets/companyLogo.svg";

const JobDetails = () => {
    const { job } = useLocation().state;
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-r from-purple-50 to-white p-4 md:p-8">
                <div className="max-w-5xl mx-auto">
                    
                    <button
                        onClick={() => navigate(-1)}
                       className="inline-flex items-center text-purple-700 font-medium hover:underline mb-6"
                    >
                        ← Back to Jobs
                    </button>


                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
                        <div>
                            {job.company_logo ? (
                                <img
                                   className="w-24 h-24 md:w-32 md:h-32 object-contain"
                                    src={job.company_logo}
                                    alt={job.company_name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = logoImage;
                                    }}
                                />
                            ) : (
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gray-100 flex items-center justify-center text-5xl">
                                    🏢
                                </div>
                            )}
                        </div>

                       <div className="space-y-2 text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {job.title}
                            </h1>

                            <p className="text-xl font-semibold text-purple-700">
                                {job.company_name}
                            </p>

                            <p>💼 {job.category}</p>

                            <p>📍 {job.candidate_required_location}</p>

                            <p>
                                💰 {job.salary || "Salary not disclosed"}
                            </p>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8 mt-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Job Description
                        </h2>

                        <hr className="mb-6 border-gray-200" />

                        <div
                           className="text-gray-700 leading-7 md:leading-8"
                            dangerouslySetInnerHTML={{
                                __html: job.description,
                            }}
                        />


                       <div className="mt-8 flex justify-center md:justify-end">
                            <button
                                onClick={() => window.open(job.url, "_blank")}
                                className="w-full md:w-auto bg-purple-700 px-6 py-3 text-white rounded-lg transition-all duration-300 hover:bg-purple-800 hover:scale-105 active:scale-95"
                            >
                                Apply Now 🚀
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;