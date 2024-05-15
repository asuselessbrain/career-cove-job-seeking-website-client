// import { useContext, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../../authProvider/AuthProvider";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useLoaderData, useNavigate } from "react-router-dom";


// const UpdateJob = () => {
//     const job = useLoaderData()
//     const navigation = useNavigate()

    
    
//     const { user } = useContext(AuthContext)

//     const { _id, job_posted_by, job_title, job_category, salary_range, posting_date, application_deadline, image, description, applicants_number, buyer_email } = job;

//     const [startDate, setStartDate] = useState(new Date(posting_date) || new Date());
//     const [postingDate, setPostingDate] = useState(new Date(application_deadline) || new Date());

//     const handleUpdateJob = async (e) => {
//         e.preventDefault();

//         const form = e.target;
//         const job_posted_by = form.name.value;
//         const buyer_email = form.email.value;
//         const job_title = form.jobTitle.value;
//         const job_category = form.jobCategory.value;
//         const salary_range = form.salaryRange.value;
//         const posting_date = postingDate;
//         const application_deadline = startDate;
//         const description = form.description.value;
//         const image = form.pictureUrl.value;
//         const applicants_number = form.applicantsNumber.value;

//         const addJobInfo = { job_posted_by, job_title, job_category, salary_range, posting_date, application_deadline, image, description, applicants_number, buyer_email };

//         console.log(addJobInfo)

//         try {
//             const { data } = await axios.put(`https://job-seeking-server-alpha.vercel.app/jobs/${_id}`, addJobInfo);
//             toast.success("Updated Successfully!");
//             console.log(data)
//             navigation("/my-jobs")
//         } catch (err) {
//             console.log(err);
//         }
//     };


//     return (
//         <div className="max-w-[900px] mx-auto p-10 border border-primary my-10 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
//             <h2 className="text-4xl font-bold mb-8 text-center">Update Job</h2>
//             <form onSubmit={handleUpdateJob}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="mb-4">
//                         <label htmlFor="pictureUrl" className="block text-sm font-medium text-gray-700">
//                             Picture URL of the Job Banner:
//                         </label>
//                         <input
//                             type="text"
//                             id="pictureUrl"
//                             name="pictureUrl"
//                             defaultValue={image}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
//                             Job Title:
//                         </label>
//                         <input
//                             type="text"
//                             id="jobTitle"
//                             name="jobTitle"
//                             defaultValue={job_title}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="jobCategory" className="block text-sm font-medium text-gray-700">
//                             Job Category:
//                         </label>
//                         <select
//                             id="jobCategory"
//                             name="jobCategory"
//                             defaultValue={job_category}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         >
//                             <option value="">Select Category</option>
//                             <option value="On Site">On Site</option>
//                             <option value="Remote">Remote</option>
//                             <option value="Part-Time">Part-Time</option>
//                             <option value="Hybrid">Hybrid</option>
//                         </select>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">
//                             Salary Range:
//                         </label>
//                         <input
//                             type="text"
//                             id="salaryRange"
//                             name="salaryRange"
//                             defaultValue={salary_range}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                             Job Description:
//                         </label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             defaultValue={description}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         ></textarea>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="postingDate" className="block text-sm font-medium text-gray-700">
//                             Job Posting Date:
//                         </label>
//                         <DatePicker className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" selected={startDate} onChange={(date) => setPostingDate(date)} />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700">
//                             Application Deadline:
//                         </label>
//                         <DatePicker className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" selected={postingDate} onChange={(date) => setStartDate(date)} />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">
//                             Posted By:
//                         </label>
//                         <input
//                             type="text"
//                             defaultValue={user?.displayName}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                             readOnly
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">
//                             Email of the Person Posting:
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             defaultValue={user?.email}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                             readOnly
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="applicantsNumber" className="block text-sm font-medium text-gray-700">
//                             Job Applicants Number:
//                         </label>
//                         <input
//                             type="number"
//                             id="applicantsNumber"
//                             name="applicantsNumber"
//                             defaultValue={0}
//                             readOnly
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                     </div>
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-indigo-500 block mx-auto hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
//                 >
//                     Update Job
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default UpdateJob;