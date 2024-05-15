// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../authProvider/AuthProvider";

// const AppliedJob = () => {
//     const { user } = useContext(AuthContext);
//     const [jobs, setJobs] = useState([]);
//     const [filteredJobs, setFilteredJobs] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, [user]);

//     const fetchData = async () => {
//         try {
//             const { data } = await axios(`https://job-seeking-server-alpha.vercel.app/applying-job/${user?.email}`);
//             setJobs(data);
//             setFilteredJobs(data);
//         } catch (error) {
//             console.error('Error fetching job data:', error);
//         }
//     };

//     const handleCategoryChange = (e) => {
//         const category = e.target.value;
//         setSelectedCategory(category);
//         if (category === '') {
//             setFilteredJobs(jobs);
//         } else {
//             const filteredData = jobs.filter(job => job.job_category === category);
//             setFilteredJobs(filteredData);
//         }
//     };

//     return (
//         <section className="container px-4 min-h-[calc(100vh-470px)] mx-auto my-10">
//             <div className="flex items-center gap-x-3">
//                 <h2 className="text-lg font-medium text-gray-800 dark:text-white">My Applied Job</h2>
//                 <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{filteredJobs.length} Applied Jobs</span>
//             </div>

//             <div className="flex items-center gap-x-3 mt-4">
//                 <label htmlFor="category" className="text-sm font-medium text-gray-600">Filter by Category:</label>
//                 <select id="category" name="category" className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" value={selectedCategory} onChange={handleCategoryChange}>
//                     <option value="">All</option>
//                     <option value="On Site">On Site</option>
//                     <option value="Remote">Remote</option>
//                     <option value="Hybrid">Hybrid</option>
//                     <option value="Part Time">Part Time</option>
//                 </select>
//             </div>

//             <div className='flex flex-col mt-6'>
//                 <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
//                     <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
//                         <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
//                             <table className='min-w-full divide-y divide-gray-200'>
//                                 <thead className='bg-gray-50'>
//                                     <tr>
//                                         <th scope='col' className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-gray-500'>
//                                             <div className='flex items-center gap-x-3'>
//                                                 <span>Title</span>
//                                             </div>
//                                         </th>
//                                         <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
//                                             <span>Buyer Email</span>
//                                         </th>
//                                         <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
//                                             Salary
//                                         </th>
//                                         <th scope='col' className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
//                                             Category
//                                         </th>
//                                         <th className='px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500'>
//                                             Status
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className='bg-white divide-y divide-gray-200 '>
//                                     {filteredJobs.map(job => (
//                                         <tr key={job._id}>
//                                             <td className='px-4 py-4 text-lg text-gray-500 whitespace-nowrap'>
//                                                 {job.job_title}
//                                             </td>
//                                             <td className='px-4 py-4 text-lg text-gray-500 whitespace-nowrap'>
//                                                 {job.buyer_email}
//                                             </td>
//                                             <td className='px-4 py-4 text-lg whitespace-nowrap'>
//                                                 ${job.salary}
//                                             </td>
//                                             <td className='px-4 py-4 text-lg whitespace-nowrap'>
//                                                 <span className={`px-3 py-1 rounded-full text-xs ${job.job_category === 'On Site' ? 'text-blue-500 bg-blue-100' :
//                                                     job.job_category === 'Remote' ? 'text-emerald-500 bg-emerald-100' :
//                                                         job.job_category === 'Hybrid' ? 'text-pink-500 bg-pink-100' :
//                                                             job.job_category === 'Part Time' ? 'text-purple-500 bg-purple-100' : ''}`}>
//                                                     {job.job_category}
//                                                 </span>
//                                             </td>
//                                             <td className='px-4 py-4 text-lg whitespace-nowrap'>
//                                                 <span className={`px-3 py-1 rounded-full text-xs ${job.status === 'Accepted' ? 'text-green-500 bg-green-100' :
//                                                     job.status === 'pending' ? 'text-yellow-500 bg-yellow-100' :
//                                                         job.status === 'Rejected' ? 'text-red-500 bg-red-100' :
//                                                             'text-gray-500 bg-gray-100'}`}>
//                                                     {job.status}
//                                                 </span>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AppliedJob;
