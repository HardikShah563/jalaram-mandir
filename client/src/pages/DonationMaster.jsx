// importing from react
import { useState, useEffect } from "react";
// importing stylesheet
import "../style/dashboard.css";
import "../style/table.css";
// importing data
import data from "../config/data";
// importing icons
//  action row 1 - action buttons
import { FaFilter } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaSort } from "react-icons/fa6";
import { TbLoader } from "react-icons/tb";
import { TbFileDownload } from "react-icons/tb";
//  action row 2 - filter row icons
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

import { GoArrowDownLeft } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

export default function DonationMaster() {
    const [donorData, setDonorData] = useState([]);
    useEffect(() => {
        setDonorData(data.donors);
    }, []);

    const [showDropDown, setShowDropDown] = useState({
        filter: false,
        sort: false,
        download: false
    });

    function sendEmail(donor) {
        console.log(donor);
        console.log("email sent");
    }

    return (
        <>
            <div className="w-100 dashboard-pages">
                <h1 className="subtitle txt-ctr margin-top-bottom-20">Donation Master</h1>

                {/* 
                    <div className="action-bar flex gap-10">
                        <div className="action-btn flex gap-10">
                            <FaFilter className="action-icon" /> Filter <BsFillCaretDownFill className="action-icon" size={12} />
                        </div>
                    </div>

                    <div className="action-bar flex gap-10">
                        <div className="action-btn action-icon-btn flex gap-10">
                            <AiOutlineSortAscending className="action-icon" size={30} />
                        </div>

                        <div className="action-btn action-icon-btn flex gap-10">
                            <AiOutlineSortDescending className="action-icon" size={30} />
                        </div>
                    </div> 
                */}

                <div className="th table-heading action-bar">
                    <div className="action-btn cur">
                        <FaFilter className="action-icon" /> Filter <BsFillCaretDownFill size={12} />
                    </div>

                    <div className="action-btn">
                        <FaSort className="action-icon" /> Sort <BsFillCaretDownFill size={12} />
                    </div>

                    <div className="action-btn">
                        <TbLoader className="action-icon" /> Reload
                    </div>

                    <div className="action-btn">
                        <TbFileDownload className="action-icon" size={24} /> Download <BsFillCaretDownFill size={12} />
                    </div>
                </div>

                <div className="tr th flex mg-a-a">
                    <div className="th-name name">Name</div>
                    <div className="th-name addr">Address</div>
                    <div className="th-name purpose">Purpose of Donation</div>
                    <div className="th-name amt">Amount</div>
                    <div className="th-name action">Actions</div>
                </div>

                <div className="table">
                    {donorData.map((donor) => (
                        <div className="tr flex" key={donor.receiptNo}>
                            <div className="name">{donor.DonorName}</div>
                            <div className="addr">{donor.DonorAddress}</div>
                            <div className="purpose">{donor.PurposeOfDonation}</div>
                            <div className="amt">₹{donor.Amount} <GoArrowDownLeft className="amt-arrow" /></div>
                            <div className="action flex gap-10">
                                <MdOutlineMail size={24} className="cur" onClick={() => {
                                    sendEmail(donor)
                                }} />
                                <FiEdit2 size={20} className="cur" />
                                {/* other action options */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
