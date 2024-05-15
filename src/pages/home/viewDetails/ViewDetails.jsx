// import { useContext, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../../authProvider/AuthProvider";
// import DatePicker from "react-datepicker";
// import axios from 'axios';
// import { toast } from 'react-toastify'; // Import toast from react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
// import { useNavigate } from "react-router-dom";


// const ViewDetails = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const job = useLoaderData();
//     const { user } = useContext(AuthContext);
//     const navigation = useNavigate()



//     const { job_posted_by, image, job_category, job_title, description, posting_date, application_deadline, buyer_email, salary_range, applicants_number } = job;

//     const handleApplication = async (e) => {
//         e.preventDefault();
//         if (user && user.email === buyer_email) {
//             // Show a toast notification if the user is the buyer
//             toast.error("Action is not permitted");
//             return;
//         }

//         const currentDate = new Date(); // Current date
//     if (currentDate > new Date(application_deadline)) {
//         toast.error("Deadline is over better Luck for next time");
//         navigation("/all-jobs");
//         return;
//     }

//         const form = e.target;
//         const applicantName = form.name.value;
//         const applicantEmail = form.email.value;
//         const job_title = form.jobTitle.value;
//         const job_category = form.jobCategory.value;
//         const salary = form.salaryRange.value;
//         const appliedDate = startDate;
//         const applicantComment = form.comment.value;
//         const image = form.image.value;
//         const status = 'pending';

//         const applicatedJobInfo = { applicantName, applicantEmail, job_title, job_category, salary, appliedDate, applicantComment, image, status, buyer_email };

//         try {
//             const { data } = await axios.post('https://job-seeking-server-alpha.vercel.app/applying-jobs', applicatedJobInfo);
//             toast.success("Application Submitted Successfully!");
//             navigation("/applied-jobs")
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="flex my-10 justify-center items-center min-h-[calc(100vh-470px)] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]">
//             <div className="container mx-auto p-10 md:flex gap-10 items-center">

//                 <div>
//                     <img src={image} alt="" />
//                 </div>
//                 <div>
//                     <h1 className="text-5xl font-bold mb-2">{job_title}</h1>
//                     <h1 className="text-2xl text-gray-600 font-bold mb-2">{job_category}</h1>
//                     <div className="flex gap-10 my-6 text-xl">
//                         <p><strong>Posting Date: </strong>{new Date(posting_date).toLocaleDateString()}</p>
//                         <p><strong>Deadline: </strong>{new Date(application_deadline).toLocaleDateString()}</p>
//                     </div>
//                     <h2 className="text-2xl mb-2"><strong>Posted By: </strong>{job_posted_by}</h2>
//                     <p className="mb-2 text-xl">{description}</p>
//                     <p className="mb-2 text-xl"><strong>Salary Range:</strong> <span className="text-red-500">{salary_range}</span></p>
//                     <p className="mb-4 text-xl"><strong>Number of Applicants:</strong> {applicants_number}</p>
//                     <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply Now</button>
//                     <dialog id="my_modal_3" className="modal">
//                         <div className="modal-box">
//                             <form method="dialog">
//                                 <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                             </form>
//                             <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
//                                 <h1 className="text-2xl mb-4">Job Application Form</h1>
//                                 <form onSubmit={handleApplication}>
//                                     <div className="mb-4">
//                                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Applicant Name:</label>
//                                         <input type="text" id="name" name="name" required defaultValue={user?.displayName} readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
//                                         <input type="email" id="email" name="email" required defaultValue={user?.email} readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title:</label>
//                                         <input type="text" id="jobTitle" name="jobTitle" required defaultValue={job_title} readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="jobCategory" className="block text-sm font-medium text-gray-700">Job Category:</label>
//                                         <input type="text" id="jobCategory" name="jobCategory" required defaultValue={job_category} readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">Salary:</label>
//                                         <input type="text" id="salaryRange" name="salaryRange" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="date" className="block text-sm font-medium text-gray-700">Application Date</label>
//                                         <DatePicker className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" selected={startDate} onChange={(date) => setStartDate(date)} />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment:</label>
//                                         <textarea id="comment" name="comment" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">PhotoURL</label>
//                                         <input type="text" id="image" name="image" required defaultValue={user?.photoURL} readOnly className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//                                     </div>
//                                     <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                                         Submit
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </dialog>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewDetails;