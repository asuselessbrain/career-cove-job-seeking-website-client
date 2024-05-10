import { Outlet } from "react-router-dom";
import NavBar from "../pages/sharedComponent/navBar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;