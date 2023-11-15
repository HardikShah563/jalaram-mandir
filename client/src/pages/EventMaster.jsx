// importing from react
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
// importing stylesheet
import "../style/dashboard.css";
import "../style/table.css";
// importing icons
//  action row 1 - action buttons
import { FaFilter } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaSort } from "react-icons/fa6";
import { TbLoader } from "react-icons/tb";
import { TbFileDownload } from "react-icons/tb";
//  action row 2 - filter row icons
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
// importing utilities
import { getError } from "../config/utils";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, events: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default function EventMaster() {

    const [{ loading, error, events }, dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        events: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            // setting the context at a loading state
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await axios.get('http://localhost:5000/api/events/all');
                // sending data to the state and updating the context
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: data,
                })
            } catch (err) {
                // sending an error message to the context
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: getError(err),
                })
            }
        }
        fetchData();
    }, []);

    async function reloadFetchData() {
        dispatch({ type: 'FETCH_REQUEST' });
        console.log("loading...");
        try {
            const { data } = await axios.get('http://localhost:5000/api/events/all');
            // sending data to the state and updating the context
            console.log("works...");
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: data,
            })
        } catch (err) {
            // sending an error message to the context
            dispatch({
                type: 'FETCH_FAIL',
                payload: getError(err),
            })
        }
    }

    const [showDropDown, setShowDropDown] = useState({
        filter: false,
        sort: false,
        download: false
    });

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
                        <TbLoader className="action-icon" onClick={reloadFetchData} /> Reload
                    </div>

                    <div className="action-btn">
                        <TbFileDownload className="action-icon" size={24} /> Download <BsFillCaretDownFill size={12} />
                    </div>
                </div>

                <div className="tr th flex mg-a-a event-table">
                    <div className="th-name name">Event Name</div>
                    <div className="th-name location">Time</div>
                    <div className="th-name amt">Date</div>
                    <div className="th-name action">Actions</div>
                </div>

                <div className="table event-table">
                    {
                        loading
                            ? <div>Loading...</div>
                            : error
                                ? <div>{error}</div>
                                : events.map((donor) => (
                                    <div className="tr flex" key={donor._id}>
                                        <div className="name">{donor.name}</div>
                                        <div className="location">{donor.time}</div>
                                        <div className="amt">{donor.date}</div>
                                        <div className="action flex gap-10">
                                            <FiEdit2 size={20} className="cur" />
                                            {/* other action options */}
                                        </div>
                                    </div>
                                ))
                    }
                </div>
            </div>
        </>
    );
};
