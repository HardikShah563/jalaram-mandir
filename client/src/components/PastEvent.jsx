// importing icons
import { GrLocation } from "react-icons/gr";

export default function PastEvent(props) {
    return (
        <>
            <div className="past-event margin-top-bottom-20">
                <div className="past-event-name">{props.eventName}</div>
                <div className="past-event-location flex gap-5">
                    <a href="https://www.google.com/maps/place/Shree+Jalaram+Mandir/@19.1438035,72.9370087,3a,75y,90t/data=!3m8!1e5!3m6!1sAF1QipMdSAVLSe5h3kk7YJCamGsVYPZQRG9lTx9jI0No!2e10!3e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMdSAVLSe5h3kk7YJCamGsVYPZQRG9lTx9jI0No%3Dw224-h398-k-no!7i720!8i1280!4m9!3m8!1s0x3be7b87a338996e1:0xd3f9bda0ed597510!8m2!3d19.1438035!4d72.9370087!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1ptx3xy2g?entry=ttu"><b>(View Photos)</b></a>
                </div>
                <div className="past-event-date flex">{props.eventDate}</div>
            </div>
        </>
    );
};
