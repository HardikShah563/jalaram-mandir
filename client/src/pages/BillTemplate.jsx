import Bill from "../components/Bill";

export default function BillTemplate() {
    return (
        <>
            <div>
                <div className="black-button">Edit Bill Details</div>
                <Bill 
                    donorName={"Hardik Shah"}
                    recieptNo={1}
                    address={"Mulund"}
                    amount={501}
                    donationDate={"01.01.2003"}
                />
            </div>
        </>
    );
};
