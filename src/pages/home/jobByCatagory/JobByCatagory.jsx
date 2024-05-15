import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobByCatagoryCard from "./JobByCatagoryCard";


const JobByCatagory = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);

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

    const handleTabSelect = tabIndex => {
        setActiveTab(tabIndex);
    };

    const jobCategories = ['All Jobs', 'On Site Job', 'Remote Job', 'Hybrid', 'Part-Time'];

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner" style={{ width: "8rem", height: "8rem" }}></span>
                </div>
            ) : (

                <div>
                    <div className="text-center mt-20 mb-10">
                        <h2 className="font-bold text-5xl text-gray-900 dark:text-gray-400 mb-5">Available Jobs</h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300">Explore thousands of job opportunities with all the information you need. Its your future
                        </p>
                    </div>
                    <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
                        <TabList>
                            {jobCategories.map((category, index) => (
                                <Tab key={index}>{category}</Tab>
                            ))}
                        </TabList>
                        {jobCategories.map((category, index) => (
                            <TabPanel key={index}>
                                <div className="job-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                                    {jobs
                                        .filter(job => {
                                            if (activeTab === 0) return true; // Show all jobs for "All Jobs" tab
                                            if (activeTab === 1) return job.job_category.includes("On Site"); // Filter jobs for "On Site Job" tab
                                            if (activeTab === 2) return job.job_category.includes("Remote"); // Filter jobs for "Remote Job" tab
                                            return job.job_category.includes(category); // Filter jobs for other categories
                                        })
                                        .map(job => (
                                            <JobByCatagoryCard key={job._id} job={job} />
                                        ))}
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            )}
        </div>
    );
};

export default JobByCatagory;
