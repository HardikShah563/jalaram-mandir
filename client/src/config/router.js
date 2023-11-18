import { Outlet, createBrowserRouter } from "react-router-dom";
// importing components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
// importing pages
import Home from "../pages/Home";
import JalaramBappa from "../pages/JalaramBappa";
import BhaktMandal from "../pages/BhaktMandal";
import Team from "../pages/Team";
import Events from "../pages/Events";
import Donate from "../pages/Donate";
import Login from "../pages/Login";
import DonationEntry from "../pages/DonationEntry";
import DonationReports from "../pages/DonationReports";
import EventMaster from "../pages/EventMaster";
import BillTemplate from "../pages/BillTemplate";
import Dashboard from "../pages/Dashboard";
import CreateEvent from "../pages/CreateEvent";
import PrintReciept from "../pages/PrintReciept";

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
                        path: "/about/mandal",
                        element: <BhaktMandal />,
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
                        element: <Dashboard />
                    }, {
                        path: "/dashboard/donation-entry",
                        element: <DonationEntry />,
                    }, {
                        path: "/dashboard/donation-reports",
                        element: <DonationReports />,
                    }, {
                        path: "/dashboard/create-event",
                        element: <CreateEvent />,
                    }, {
                        path: "/dashboard/event-master",
                        element: <EventMaster />,
                    }, {
                        path: "/dashboard/reciepts",
                        element: <PrintReciept />,
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