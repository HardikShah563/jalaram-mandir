import { MdArrowForwardIos } from "react-icons/md";
// importing stylesheet
import "../style/home.css";
import { useNavigate } from "react-router-dom";
import UpcomingEvent from "../components/UpcomingEvent";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="page">
                <h1 className="txt-ctr title main-title">|| Jai Jalaram ||</h1>
                <img
                    className="main-img w-100 mg-a-a"
                    src={
                        process.env.PUBLIC_URL +
                        "/Assets/main-img.png"
                    }
                    alt="main-img"
                />

                <h1 className="main-quote txt-ctr">|| રામ નામ મેં લીન હૈ દેખત સબમે રામ ||<br />|| તાકે પદ વંદન કરે જય જય જલારામ ||</h1>

                <div className="w-80">
                    <h1 className="subtitle main-title">Our <br />Upcoming Events</h1>

                    <div className="events">
                        <UpcomingEvent />
                    </div>

                    <h1 className="small-heading">Past Events</h1>

                    <div className="flex jstf-ctr">
                        <div className="black-button" onClick={navigate("/events")}>
                            View All Past Events
                            <MdArrowForwardIos className="left-arrow" />
                        </div>
                    </div>
                </div>

                <a href="https://www.shreejalarammandir.org/">https://www.shreejalarammandir.org/</a>
            </div>
        </>
    );
};
