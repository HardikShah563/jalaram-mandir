import { Outlet, createBrowserRouter } from "react-router-dom";
// importing components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
// importing pages
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import JalaramBappa from "../pages/JalaramBappa";
import History from "../pages/History";
import Team from "../pages/Team";
import Events from "../pages/Events";
import JoinUs from "../pages/JoinUs";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Outlet /><Footer /></>,
        children: [
            {
                path: "/",
                element: <Home />,
            }, {
                path: "/about",
                children: [
                    {
                        path: "/about/jalaram-bappa",
                        element: <JalaramBappa />,
                    },
                    {
                        path: "/about/history",
                        element: <History />,
                    }, {
                        path: "/about/team",
                        element: <Team />
                    }
                ],
            }, {
                path: "/events",
                element: <Events />,
            }, {
                path: "/join-us",
                element: <JoinUs />,
            }, {
                path: "/login",
                element: <Login />,
            }, {
                path: "/dashboard",
                element: <SideBar />,
                children: [
                    {
                        path: "/dashboard",
                        element: "Hello World"
                    }, {
                        path: "/dashboard/donation-entry",
                        element: "donation entry",
                    }, {
                        path: "/dashboard/event-master",
                        element: "event master",
                    }, {
                        path: "/dashboard/reciepts",
                        element: "bill template",
                    }, {
                        path: "/dashboard/*",
                        element: "",
                    }
                ],
            }
        ],
    }
]);

export default router;