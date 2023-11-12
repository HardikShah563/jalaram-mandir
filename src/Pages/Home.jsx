// importing components
import Marquee from "../components/Marquee";
// importing icons
import { MdArrowForwardIos } from "react-icons/md";
// importing stylesheet
import "../style/home.css";
import { useNavigate } from "react-router-dom";
import UpcomingEvent from "../components/UpcomingEvent";
import PastEvent from "../components/PastEvent";

export default function Home() {
    // creating variable responsible for web navigation
    const navigate = useNavigate();

    return (
        <>
            <div className="page">
                {/* main section */}
                <h1 className="txt-ctr title main-title">|| Jai Jalaram ||</h1>
                <img
                    className="main-img w-100 mg-a-a"
                    src={
                        process.env.PUBLIC_URL +
                        "/Assets/main-img.png"
                    }
                    alt="main-img"
                />

                {/* quote 1 section */}
                <h1 className="main-quote txt-ctr">|| રામ નામ મેં લીન હૈ દેખત સબમે રામ ||<br />|| તાકે પદ વંદન કરે જય જય જલારામ ||</h1>

                {/* Events Section */}
                <div className="w-80 mg-a-a">
                    <h1 className="subtitle main-title">Our <br />Upcoming Events</h1>

                    <div className="events">
                        <UpcomingEvent
                            eventName={"Jalaram Jayanti 2023"}
                            eventLocation={"Bhandup"}
                            eventDate={"19th October 2023"}
                            eventStartTime={"8:30"}
                        />
                    </div>

                    <h1 className="small-heading">Past Events</h1>

                    <div className="events">
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

                    <div className="flex jstf-ctr">
                        <div className="black-button" onClick={() => { navigate("/events") }}>
                            View All Past Events
                            <MdArrowForwardIos className="left-arrow" />
                        </div>
                    </div>
                </div>

                <div className="marquee-div">
                    <Marquee
                        limit={20}
                        text="રામ નામ મેં લીન હૈ દેખત સબમે રામ&nbsp;&nbsp;&nbsp;&nbsp;તાકે પદ વંદન કરે જય જય જલારામ&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;"
                        color={"yellow"}
                    />
                </div>

                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/O5Pmz7nNMXY?si=zdNStuf3tkjt8p6Y"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="youtube-iframe flex"
                >
                </iframe>

                <a href="https://www.shreejalarammandir.org/">https://www.shreejalarammandir.org/</a>
            </div>
        </>
    );
};
