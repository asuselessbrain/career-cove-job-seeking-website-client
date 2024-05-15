
// import 'react-tabs/style/react-tabs.css';
// import { Link } from 'react-router-dom';

// const AllJobsTable = ({ job }) => {
//     const { _id, image, job_posted_by, job_category, buyer_email, job_title, posting_date, application_deadline, salary_range, applicants_number } = job;
//     return (



//         // <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg shadow-cyan-500/50 dark:bg-gray-800 dark:border-gray-700">
//         //     {/* <img src={image} alt="" /> */}
//         //     {image && <img src={image} alt="" />}
//         //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job_title}</h5>
//         //     <p className="mb-3 font-normal text-black dark:text-gray-400">{job_posted_by}</p>
//         //     <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Category:</strong> <span className='text-green-700 p-2 rounded-md border border-green-500 bg-gray-200 ml-2'>{job_category}</span></p>
//         //     <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Posting Date:</strong> {new Date(posting_date).toLocaleDateString()}</p>
//         //     <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Application Deadline:</strong> <span className='text-red-500 font-semibold'>{new Date(application_deadline).toLocaleDateString()}</span></p>
//         //     <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Salary Range:</strong> {salary_range}</p>
//         //     <p className="mb-3 font-normal text-black dark:text-gray-400"><strong>Job Applicants Number:</strong> {applicants_number}</p>


//         // </div>



//         <tr>
//             <td className='px-4 py-4 text-lg text-gray-500 whitespace-nowrap'>
//                 {job_title}
//             </td>
//             <td className='px-4 py-4 text-lg whitespace-nowrap'>
//                 <span className={`px-3 py-1 rounded-full text-xs ${job.job_category === 'On Site' ? 'text-blue-500 bg-blue-100' :
//                     job.job_category === 'Remote' ? 'text-emerald-500 bg-emerald-100' :
//                         job.job_category === 'Hybrid' ? 'text-pink-500 bg-pink-100' :
//                             job.job_category === 'Part-Time' ? 'text-purple-500 bg-purple-100' : ''}`}>
//                     {job_category}
//                 </span>
//             </td>
//             <td className='px-4 py-4 text-lg text-gray-500 whitespace-nowrap'>
//                 {buyer_email}
//             </td>
//             <td className='px-4 py-4 text-lg whitespace-nowrap'>
//                 {salary_range}
//             </td>

//             <td className='px-4 py-4 text-lg whitespace-nowrap'>
//                 {new Date(posting_date).toLocaleDateString()}
//             </td>

//             <td className='px-4 py-4 text-lg whitespace-nowrap'>
//                 {new Date(application_deadline).toLocaleDateString()}
//             </td>

//             <td className='px-4 py-4 text-lg whitespace-nowrap'>
//                 <Link to={`/viewDetails/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     View Details
//                 </Link>
//             </td>
//         </tr>





//     );
// };
// export default AllJobsTable;