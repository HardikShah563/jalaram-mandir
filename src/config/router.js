import { Outlet, createBrowserRouter } from "react-router-dom";
// importing components
import Navbar from "../components/Navbar";
// importing pages
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import JalaramBappa from "../pages/JalaramBappa";
import History from "../pages/History";
import Team from "../pages/Team";
import Footer from "../components/Footer";

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
            }
        ],
    }
]);

export default router;