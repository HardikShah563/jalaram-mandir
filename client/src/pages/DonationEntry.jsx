// importing from react
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// importing stylesheet
import "../style/form.css";
// importing icons
import { MdArrowForwardIos } from "react-icons/md";
// importing from utils
import { delay } from "../config/utils";
import { Session } from "../config/utils";

export default function DonationEntry() {
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Session);
    const { userInfo, eventDetails } = state;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phoneNo: "",
        email: "",
        mode: "",
        amount: null,
        panNo: "", //pan number required only if amount exceeds 5k
        eventName: eventDetails && eventDetails.eventName || "",
    });

    const date = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if (!formData.eventName) {}
            const { data } = await axios.post('http://localhost:5000/api/donation/new', {
                name: formData.name,
                address: formData.address,
                phoneNo: formData.phoneNo,
                email: formData.email,
                mode: formData.mode,
                amount: formData.amount,
                panNo: formData.panNo,
                eventName: formData.eventName,
            });

            ctxDispatch({
                type: "RECIEPT_SET",
                payload: { ...formData, eventDate: date }
            });

            if (data.message === "success") {
                localStorage.setItem("currentReciept", JSON.stringify({ ...formData, eventDate: date }));
                setMsg("Yayy! Submit ho raha hai!");
                setColor("green");
                await delay(1000);
                setMsg("Redrirecting... wait");
                await delay(500);
                setMsg("Entry Successful!");
                navigate("/dashboard/reciepts");
            }
            else {
                setMsg(data.message);
                setColor("red");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="mg-a-a page">
                <h1 className="subtitle txt-ctr">Donation Entry</h1>

                <form onSubmit={handleSubmit} className="form home-form">
                    <div className="input-box">
                        <h3>Event Name: {eventDetails && eventDetails.eventName || "doesn't exists"}</h3>
                    </div>

                    <div className="input-box">
                        <h3>Event Date: {date}</h3>
                    </div>

                    <br />

                    {msg &&
                        (
                            <div className="input-box">
                                <div className="input msg-box" id={color}>
                                    {msg}
                                </div>
                            </div>
                        )
                    }

                    <div className="input-flex flex">
                        <div className="input-box">
                            <div className="input-title margin-top-15 bobby">
                                Name
                            </div>
                            <input
                                className="input margin-block-5"
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Full Name"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <div className="input-title margin-top-15 bobby">
                                Address
                            </div>
                            <input
                                className="input margin-block-5"
                                type="text"
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Address"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-flex flex">
                        <div className="input-box">
                            <div className="input-title margin-top-15 bobby">
                                Phone Number
                            </div>
                            <input
                                className="input margin-block-5"
                                type="number"
                                name="phoneNo"
                                id="phoneNo"
                                value={formData.phoneNo}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Phone Number"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <div className="input-title margin-top-15 bobby">
                                E-mail
                            </div>
                            <input
                                className="input margin-block-5"
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-flex">
                        <div className="input-box">
                            <div className="input-title margin-top-15 bobby">
                                Mode of payment
                            </div>
                            <select
                                className="input margin-block-5"
                                name="mode"
                                id="mode"
                                value={formData.mode}
                                onChange={handleChange}
                                required
                            >
                                <option value="">-- Cash/Online --</option>
                                <option value="cash">Cash</option>
                                <option value="online">Online</option>
                            </select>
                        </div>

                        <div className="input-box">
                            <div className="input-title margin-top-15 bobby">
                                Amount
                            </div>
                            <input
                                className="input margin-block-5"
                                type="number"
                                name="amount"
                                id="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="₹ ---"
                            />
                        </div>
                    </div>

                    <div className="input-flex">
                        {formData.amount >= 5000 && (
                            <div className="input-box">
                                <div className="input-title margin-top-15 bobby">
                                    PAN Number
                                </div>
                                <input
                                    className="input margin-block-5"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="PAN Number"
                                />
                            </div>
                        )}
                    </div>

                    <div className="input-box">
                        <button
                            className="form-btn gap-10 cur"
                            type="submit"
                        >
                            Submit <MdArrowForwardIos className="left-arrow" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
