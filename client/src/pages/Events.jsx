// importing from react
import { useEffect } from "react";
// importing components
import UpcomingEvent from "../components/UpcomingEvent";
import PastEvent from "../components/PastEvent";

export default function Events() {
    return (
        <>
            <div className="page">
                <div className="w-80 mg-a-a">
                    <h1 className="subtitle txt-ctr">Upcoming Events</h1>

                    <div className="small-page">
                        <UpcomingEvent
                            eventName={"Jalaram Jayanti 2023"}
                            eventDate={"19th October 2023"}
                            eventStartTime={"8:30"}
                        />

                        <UpcomingEvent
                            eventName={"Julelal Jayanti"}
                            eventDate={"19th October 2023"}
                            eventStartTime={"8:30"}
                        />
                    </div>

                    <h1 className="subtitle txt-ctr">Past Events</h1>

                    <div className="small-page">
                        <PastEvent
                            eventName={"Jalaram Jayanti"}
                            eventLocation={"Bhandup"}
                            eventDate={"10 May 2023"}
                        />

                        <PastEvent
                            eventName={"Shri Jalaram Jayanti"}
                            eventLocation={"Mulund"}
                            eventDate={"14 Nov 2018"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
