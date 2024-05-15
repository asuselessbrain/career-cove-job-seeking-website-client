import Banner from "./banner/Banner";
import ContactUs from "./contactUs/ContactUs";
import CustomerReview from "./customerReview/CustomerReview";
import JobByCatagory from "./jobByCatagory/JobByCatagory";


const Home = () => {
    return (
        <div>
            <Banner />
            <JobByCatagory />
            <CustomerReview />
            <ContactUs />
        </div>
    );
};

export default Home;