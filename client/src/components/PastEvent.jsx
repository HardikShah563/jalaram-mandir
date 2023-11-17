// importing icons
import {GrLocation} from "react-icons/gr";

export default function PastEvent(props) {
    return (
        <>
            <div className="past-event margin-top-bottom-20">
                <div className="past-event-name">{props.eventName}</div>
                <div className="past-event-location flex gap-5"><GrLocation />{props.eventLocation}</div>
                <div className="past-event-date flex">{props.eventDate}</div>
            </div>
        </>
    );
};
