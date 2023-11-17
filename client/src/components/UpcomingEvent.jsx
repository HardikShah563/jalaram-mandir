// importing stylesheet
import "../style/events.css";

export default function UpcomingEvent(props) {
    return (
        <>
            <div className="outer">
                <div className="event-big ">
                    <div className="upcoming-details">
                        <div className="upcoming-event-name">{props.eventName}</div>
                        <div className="upcoming-event-date-time">{props.eventDate}</div>
                        <div className="upcoming-event-date-time">{props.eventStartTime} onwards</div>
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
