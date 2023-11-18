// importing from react
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// importing components
import UpcomingEvent from "../components/UpcomingEvent";
import PastEvent from "../components/PastEvent";
// importing icons
import { MdArrowForwardIos } from "react-icons/md";

export default function Events() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-80 mg-a-a">

                <div className="small-page">
                    <h1 className="subtitle txt-ctr main-title" id="text-red">Today's Events</h1>

                    <div className="small-page">
                        <h1 className="subtitle txt-ctr">Jalaram Jayanti 2023</h1>
                        <h1 className="txt-ctr margin-top-bottom-20">19th October 2023, 6:30 A.M. Onwards</h1>
                        <img
                            className="mg-a-a"
                            src={process.env.PUBLIC_URL + "/Assets/event-banner-2023.jpg"}
                            alt=""
                        />
                    </div>
                </div>

                <h1 className="subtitle txt-ctr main-title" id="text-red">Our Upcoming Events</h1>

                <div className="events">
                    <UpcomingEvent
                        eventName={"Julelal Jayanti"}
                        eventDate={"10th April 2024"}
                        eventStartTime={"5:30 P.M."}
                    />
                </div>

                <h1 className="subtitle txt-ctr main-title" id="text-red">Past Events</h1>

                <div className="events">
                    <PastEvent
                        eventName={"Jalaram Jayanti"}
                        eventDate={"31 October 2022"}
                    />
                </div>

                <div className="flex jstf-ctr">
                    <div className="black-button" onClick={() => { navigate("/events") }}>
                        View All Past Events
                        <MdArrowForwardIos className="left-arrow" />
                    </div>
                </div>
            </div>
        </>
    );
};
