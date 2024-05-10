import { Outlet } from "react-router-dom";
import NavBar from "../pages/sharedComponent/navBar/NavBar";
import Footer from "../pages/sharedComponent/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;