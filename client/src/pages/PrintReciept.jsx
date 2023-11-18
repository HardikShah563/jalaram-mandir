// importing from react
import { useState, useContext, useEffect } from "react";
// importing components
import Bill from "../components/Bill";
// importing from utils
import { Session } from "../config/utils";

export default function PrintReciept() {
    const { state, dispatch: ctxDispatch } = useContext(Session);
    const { currentEvent, currentReciept } = state;

    const [printInfo, setPrintInfo] = useState({});
    useEffect(() => {
        setPrintInfo(currentReciept[0]);
    }, []);

    function PrintReciept() {
        var printContents = document.getElementById("print-div").innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    function recieptClear() {
        ctxDispatch({
            type: "RECIEPT_CLEAR"
        });
    }

    const date = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();

    return (
        <>
            <div>
                {
                    currentReciept &&
                    currentEvent &&
                    <div id="print-div">
                        <Bill
                            donorName={printInfo.name}
                            recieptNo={String(printInfo._id).substr(-5)}
                            address={printInfo.address}
                            date={date}
                            amount={printInfo.amount}
                        />
                    </div>
                }

                <button className="black-button mg-a-a" onClick={PrintReciept} type="submit">Print Reciept</button>
            </div>
        </>
    );
};
