// importing from react
import { RouterProvider } from "react-router-dom";
// importing router
import router from './config/router';
// importing stylesheet
import "./style/globals.css";
import { SessionProvider } from "./config/utils";

export default function App() {
    return (
        <>
            <SessionProvider>
                <RouterProvider router={router} />
            </SessionProvider>
        </>
    );
};
