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
import Donate from "../pages/Donate";
import Login from "../pages/Login";
import DonationEntry from "../pages/DonationEntry";
import DonationMaster from "../pages/DonationMaster";
import EventMaster from "../pages/EventMaster";
import BillTemplate from "../pages/BillTemplate";

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
                path: "/donation",
                element: <Donate />,
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
                        element: <DonationEntry />,
                    }, {
                        path: "/dashboard/donation-master",
                        element: <DonationMaster />,
                    }, {
                        path: "/dashboard/event-entry",
                        element: "event entry",
                    }, {
                        path: "/dashboard/event-master",
                        element: <EventMaster />,
                    }, {
                        path: "/dashboard/reciepts",
                        element: "bill template",
                    }, {
                        path: "/dashboard/bill",
                        element: <BillTemplate />,
                    }, {
                        path: "/dashboard/update-bill",
                        element: "update bill",
                    }, {
                        path: "/dashboard/*",
                        // element: "",
                    }
                ],
            }
        ],
    }
]);

export default router;