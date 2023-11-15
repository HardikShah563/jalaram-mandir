// importing icons
import { ImLocation } from "react-icons/im";
// importing stylesheet
import "../style/events.css";

export default function UpcomingEvent(props) {
    return (
        <>
            <div className="outer">
                <div className="event-big">
                    <div className="upcoming-details">
                        <div className="upcoming-event-name">{props.eventName}</div>
                        <div className="flex gap-5">
                            <ImLocation className="location-icon" />
                            <div className="upcoming-event-location">{props.eventLocation}</div>
                        </div>
                        <div className="flex">
                            <div className="upcoming-event-date-time">{props.eventDate}, {props.eventStartTime} onwards</div>
                        </div>
                    </div>
                    <div className="upcoming-img-div">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/Assets/temple.png"
                            }
                            alt="upcoming event photo"
                            className="upcoming-img-img"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
