// importing from react
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Session } from "../config/utils";

export default function Dashboard() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Session);
    const { userInfo } = state;

    useEffect(() => {
        if (userInfo) {
            if (!userInfo.isAdmin === true) {
                navigate("/dashboard/donation-entry");
                return;
            }
        }
        else {
            navigate("/dashboard/donation-entry");
        }
    }, [])
    return (
        <>
            <div className="page w-100">
                <h1 className="subtitle txt-ctr">Dashboard</h1>

                <div className="black-button">Load Sample Users Data</div>
                <div className="black-button">Load Sample Events Data</div>
                <div className="black-button">Load Sample Donation Data</div>
            </div>
        </>
    );
};
