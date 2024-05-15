
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