import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import UserProfilel from "../pages/userProfile/UserProfilel";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ViewDetails from "../pages/home/viewDetails/ViewDetails";
import Blogs from "../pages/blogs/Blogs";
import AddJob from "../pages/addJob/AddJob";
import MyJobs from "../pages/myJobs/MyJobs";
import UpdateJob from "../pages/updateJob/UpdateJob";
import AppliedJob from "../pages/appliedJob/AppliedJob";
import AllJobs from "../pages/allJobs/AllJobs";
import JobRequest from "../pages/jobRequest/JobRequest";
import NotFound from "../pages/errorPage/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/user-profile",
        element: <PrivateRoute>
          <UserProfilel />
        </PrivateRoute>
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute>
          <ViewDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://job-seeking-server-alpha.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/add-job",
        element: <PrivateRoute>
          <AddJob />
        </PrivateRoute>
      },
      {
        path: "/my-jobs",
        element: <PrivateRoute>
          <MyJobs />
        </PrivateRoute>
      },
      {
        path: "/update-job/:id",
        element: <PrivateRoute>
          <UpdateJob />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://job-seeking-server-alpha.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/applied-jobs",
        element: <PrivateRoute>
          <AppliedJob />
        </PrivateRoute>
      },
      {
        path: "/all-jobs",
        element: <AllJobs />
      },
      {
        path: "/job-request",
        element: <PrivateRoute>
          <JobRequest />
        </PrivateRoute>
      }
    ],
  }
]);

export default router;