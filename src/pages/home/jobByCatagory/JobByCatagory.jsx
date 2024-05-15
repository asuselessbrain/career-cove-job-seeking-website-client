// import { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import JobByCatagoryCard from "./JobByCatagoryCard";


// const JobByCatagory = () => {
//     const [jobs, setJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [activeTab, setActiveTab] = useState(0);

//     useEffect(() => {
//         fetch("https://job-seeking-server-alpha.vercel.app/jobs")
//             .then(res => res.json())
//             .then(data => {
//                 setJobs(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             });
//     }, []);

//     const handleTabSelect = tabIndex => {
//         setActiveTab(tabIndex);
//     };

//     const jobCategories = ['All Jobs', 'On Site Job', 'Remote Job', 'Hybrid', 'Part-Time'];

//     return (
//         <div>
//             {loading ? (
//                 <div className="flex justify-center items-center h-screen">
//                     <span className="loading loading-spinner" style={{ width: "8rem", height: "8rem" }}></span>
//                 </div>
//             ) : (

//                 <div>
//                     <div className="text-center mt-20 mb-10">
//                         <h2 className="font-bold text-5xl text-gray-900 dark:text-gray-400 mb-5">Available Jobs</h2>
//                         <p className="text-xl text-gray-700 dark:text-gray-300">Explore thousands of job opportunities with all the information you need. Its your future
//                         </p>
//                     </div>
//                     <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
//                         <TabList>
//                             {jobCategories.map((category, index) => (
//                                 <Tab key={index}>{category}</Tab>
//                             ))}
//                         </TabList>
//                         {jobCategories.map((category, index) => (
//                             <TabPanel key={index}>
//                                 <div className="job-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
//                                     {jobs
//                                         .filter(job => {
//                                             if (activeTab === 0) return true; // Show all jobs for "All Jobs" tab
//                                             if (activeTab === 1) return job.job_category.includes("On Site"); // Filter jobs for "On Site Job" tab
//                                             if (activeTab === 2) return job.job_category.includes("Remote"); // Filter jobs for "Remote Job" tab
//                                             return job.job_category.includes(category); // Filter jobs for other categories
//                                         })
//                                         .map(job => (
//                                             <JobByCatagoryCard key={job._id} job={job} />
//                                         ))}
//                                 </div>
//                             </TabPanel>
//                         ))}
//                     </Tabs>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default JobByCatagory;


import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

const JobByCatagoryCard = ({ job }) => {
    const { _id, image, job_posted_by, job_category, job_title, posting_date, application_deadline, salary_range, applicants_number } = job;
    return (



        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg shadow-cyan-500/50 dark:bg-gray-800 dark:border-gray-700">
            {/* <img src={image} alt="" /> */}
            {image && <img src={image} alt="" />}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job_title}</h5>
            <p className="mb-3 font-normal text-black dark:text-gray-400">{job_posted_by}</p>
            <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Category:</strong> <span className='text-green-700 p-2 rounded-md border border-green-500 bg-gray-200 ml-2'>{job_category}</span></p>
            <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Posting Date:</strong> {new Date(posting_date).toLocaleDateString()}</p>
            <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Application Deadline:</strong> <span className='text-red-500 font-semibold'>{new Date(application_deadline).toLocaleDateString()}</span></p>
            <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Salary Range:</strong> {salary_range}</p>
            <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Job Applicants Number:</strong> {applicants_number}</p>

            <Link to={`/viewDetails/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>


    );
};

export default JobByCatagoryCard;
