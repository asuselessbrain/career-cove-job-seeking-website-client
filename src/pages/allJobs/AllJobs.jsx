import { useEffect, useState } from "react";
import AllJobsTable from "./AllJobsTable";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://job-seeking-server-alpha.vercel.app/jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const filteredJobs = jobs.filter(job =>
        job.job_title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="my-10 p-4">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white text-center my-10">All Jobs</h2>
            <div className="flex justify-center mb-6 items-center gap-6 dark:text-white">
                <p className="text-3xl font-bold">Search your Job : </p>
                <input
                    type="text"
                    placeholder="Search by job title"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="px-4 w-1/2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner" style={{ width: "8rem", height: "8rem" }}></span>
                </div>
            ) : (
                <div>
                    <section className="container px-4 min-h-[calc(100vh-470px)] mx-auto my-10">
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">My Applied Job</h2>
                            {/* <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{filteredJobs.length} Applied Jobs</span> */}
                        </div>

                        <div className='flex flex-col mt-6'>
                            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                        <table className='min-w-full divide-y divide-gray-200'>
                                            <thead className='bg-gray-50'>
                                                <tr>
                                                    <th scope='col' className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                        <div className='flex items-center gap-x-3'>
                                                            <span>Title</span>
                                                        </div>
                                                    </th>
                                                    <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                        Category
                                                    </th>
                                                    <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                        <span>Buyer Email</span>
                                                    </th>
                                                    <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                        Salary
                                                    </th>
                                                    <th className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                        Posting Date
                                                    </th>
                                                    <th className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                        Application Deadline
                                                    </th>
                                                    <th className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
                                                        View Details
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white divide-y divide-gray-200 '>
                                                {filteredJobs.length > 0 ? (
                                                    filteredJobs.map(job => (
                                                        <AllJobsTable key={job._id} job={job} />
                                                    ))
                                                ) : (
                                                    <p className="text-center text-gray-600">No jobs found matching the search criteria.</p>
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default AllJobs;
