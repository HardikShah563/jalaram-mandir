// importing from react
import { RouterProvider } from "react-router-dom";
// importing router
import router from './config/router';
// importing stylesheet
import "./style/globals.css";

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
