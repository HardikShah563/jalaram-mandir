// importing from react
import { useState, useEffect } from "react";
// importing stylesheet
import "../style/table.css";
// importing data
import data from "../config/data";
// importing icons
import { MdOutlineMail } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { GoArrowDownLeft } from "react-icons/go";

export default function DonationMaster() {
    function sendEmail() {
        console.log("email sent");
    }

    return (
        <>
            <div className="w-100 dashboard-pages">
                <h1 className="subtitle txt-ctr margin-top-bottom-20">Donation Master</h1>
                <div className="table">
                    <div className="tr th flex table-heading" id="tr">
                        <div className="th name">Name</div>
                        <div className="th addr">Address</div>
                        <div className="th purpose">Purpose of Donation</div>
                        <div className="th amt">Amount</div>
                        <div className="th action">Actions</div>
                    </div>

                    {data.donors.map((donor) => (
                        <div className="tr flex" key={donor.receiptNo}>
                            <div className="name">{donor.DonorName}</div>
                            <div className="addr">{donor.DonorAddress}</div>
                            <div className="purpose">{donor.PurposeOfDonation}</div>
                            <div className="amt">₹{donor.Amount} <GoArrowDownLeft className="amt-arrow" /></div>
                            <div className="action">
                                <MdOutlineMail className="mail cur" onClick={sendEmail} />
                                {/* other action options */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
