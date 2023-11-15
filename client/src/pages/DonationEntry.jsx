// importing from react
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/form.css";
// importing icons
import { MdArrowForwardIos } from "react-icons/md";
// importing from utils
import { delay } from "../config/utils";
import { Session } from "../config/utils";

export default function DonationEntry() {
    const navigate = useNavigate();

    const { state } = useContext(Session);
    const { userInfo } = state;

    // useEffect(() => {
    //     if (!userInfo) {
    //         navigate('/login');
    //     }
    // }, []);

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phoneNo: "",
        email: "",
        mode: "",
        amount: null,
        panNo: "", //pan number required only if amount exceeds 5k
    });

    const [msg, setMsg] = useState("Entry Successful!");
    const [color, setColor] = useState("green");

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // database operation
        setMsg("Yayy! Submit ho raha hai!");
        await delay(1000);
        setMsg("Redrirecting... wait");
        await delay(500);
        setMsg("Entry Successful!");
        navigate("/dashboard/reciepts");
    }

    return (
        <>
            <div className="mg-a-a page">
                <h1 className="subtitle txt-ctr">Donation Entry</h1>

                <form onSubmit={handleSubmit} className="form home-form">
                    <div className="input msg-box" id={color}>
                        {msg}
                    </div>

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
                            onClick={handleSubmit}
                        >
                            Submit <MdArrowForwardIos className="left-arrow" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
