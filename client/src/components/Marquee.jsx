// importing stylesheet
import "../style/marquee.css";

export default function Marquee(props) {
    const marqueeText =
        <span className="marquee-text bobby">
            {props.text}
        </span>

    const marqueeList = [];

    for (let i = 0; i < 100; i++) {
        marqueeList.push(marqueeText);
    }

    return (
        <>
            <marquee
                className={`marquee flex ${props.color}-bg`}
                scrollamount="5"
            >
                {marqueeList}
            </marquee>
        </>
    );
};
