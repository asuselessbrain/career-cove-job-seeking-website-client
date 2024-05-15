import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext) || {};
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner" style={{ width: "8rem", height: "8rem" }}></span>
            </div>
        );
    }

    if (!user) {
        return <Navigate state={location?.pathname || "/"} to={`/login`} replace />
    }

    return children;
};

export default PrivateRoute;
