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
            if (!userInfo.isAdmin) {
                navigate("/donation-entry");
                return;
            }
        }
        else {
            navigate("/dashboard/donation-entry");
        }
    }, [])
    return (
        <>
            <div>
                <div className="black-button">Load Sample Users Data</div>
                <div className="black-button">Load Sample Events Data</div>
                <div className="black-button">Load Sample Donation Data</div>
            </div>
        </>
    );
};
