import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
const JobRequest = () => {

    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([])

    useEffect(() => {

        fetchData();
    }, [user]);

    const fetchData = async () => {
        try {
            const { data } = await axios(`https://job-seeking-server-alpha.vercel.app/job-request/${user?.email}`);
            setJobs(data);
        } catch (error) {
            console.error('Error fetching job data:', error);
        }
    };

    const handleStatus = async(id, prevStatus, status) =>{
        console.log(id, prevStatus, status)
        const { data } = await axios.patch(`https://job-seeking-server-alpha.vercel.app/updateStatus/${id}`, {status});
        console.log(data)
        fetchData();
    }


    return (
        <section className='container px-4 mx-auto my-10 min-h-[calc(100vh-470px)]'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>Job Requests</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {jobs.length} Requests
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Title</span>
                                            </div>
                                        </th>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Email</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Salary</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Category
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Status
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {
                                        jobs.map(job => (
                                            <tr key={job._id}>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {job.job_title}
                                                </td>
                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {job.applicantEmail}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                    {job.salary_range}
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <span className={`px-3 py-1 rounded-full ${job.job_category === 'On Site' ? 'text-blue-500 bg-blue-100' :
                                                            job.job_category === 'Remote' ? 'text-emerald-500 bg-emerald-100' :
                                                                job.job_category === 'Hybrid' ? 'text-pink-500 bg-pink-100' :
                                                                    job.job_category === 'Part Time' ? 'text-purple-500 bg-purple-100' : ''}`}>
                                                            {job.job_category}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                        <span className={`px-3 py-1 rounded-full ${job.status === 'Accepted' ? 'text-green-500 bg-green-100' :
                                                            job.status === 'pending' ? 'text-yellow-500 bg-yellow-100' :
                                                                job.status === 'Rejected' ? 'text-red-500 bg-red-100' :
                                                                    'text-gray-500 bg-gray-100'}`}>
                                                            {job.status}
                                                        </span>
                                                </td>
                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-6'>
                                                        <button onClick={() => handleStatus((job._id), job.status, 'Accepted')} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                fill='none'
                                                                viewBox='0 0 24 24'
                                                                strokeWidth='1.5'
                                                                stroke='currentColor'
                                                                className='w-5 h-5'
                                                            >
                                                                <path
                                                                    strokeLinecap='round'
                                                                    strokeLinejoin='round'
                                                                    d='m4.5 12.75 6 6 9-13.5'
                                                                />
                                                            </svg>
                                                        </button>

                                                        <button
                                                        onClick={() => handleStatus((job._id), job.status, 'Rejected')}
                                                        className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                fill='none'
                                                                viewBox='0 0 24 24'
                                                                strokeWidth='1.5'
                                                                stroke='currentColor'
                                                                className='w-5 h-5'
                                                            >
                                                                <path
                                                                    strokeLinecap='round'
                                                                    strokeLinejoin='round'
                                                                    d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobRequest;