import { createBrowserRouter } from "react-router-dom";
// importing components
import Navbar from "../Components/Navbar";
// importing pages
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ],
    }
]);

export default router;