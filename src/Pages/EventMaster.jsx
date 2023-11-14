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

export default function EventMaster() {
    const [eventData, setEventData] = useState([]);
    useEffect(() => {
        setEventData(data.events);
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
                <h1 className="subtitle txt-ctr margin-top-bottom-20">Event Master</h1>

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

                <div className="tr th flex mg-a-a event-table">
                    <div className="th-name name">Event Name</div>
                    <div className="th-name location">Location</div>
                    <div className="th-name amt">Date</div>
                    <div className="th-name action">Actions</div>
                </div>

                <div className="table event-table">
                    {eventData.map((donor) => (
                        <div className="tr flex" key={donor.eventId}>
                            <div className="name">{donor.EventName}</div>
                            <div className="location">{donor.Location}</div>
                            <div className="amt">₹{donor.Date}</div>
                            <div className="action flex gap-10">
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
