// importing from react

// importing stylesheet
import "../style/row.css";

export default function DonationRow(props) {
    return (
        <>
            <div
                className="row row-border"
                id={props.receiptNo}
                key={props.receiptNo}
            >
                <div className="flex-1">
                    <div className="name">
                        Event Name ex: Jalaram Jayanti
                    </div>
                </div>

                <div className="flex-1">
                    <div className="location">
                        Event Location ex: Bhandup West
                    </div>
                    <div className="date">
                        00-00-0000 XXXX 00
                    </div>
                    <div className="reciept-ct">
                        00
                    </div>
                </div>
            </div>
        </>
    );
};
