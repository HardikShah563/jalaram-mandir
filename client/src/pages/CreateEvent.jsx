// importing from react
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// importing stylesheet
import "../style/form.css";
// importing icons
import { MdArrowForwardIos } from "react-icons/md";
// importing from utils
import { delay, Session } from "../config/utils";

export default function CreateEvent() {
    const navigate = useNavigate();

    const { state } = useContext(Session);
    const { userInfo } = state;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        time: "",
        date: "",
    });

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
        console.log(formData);
        try {
            const { data } = await axios.post('http://localhost:5000/api/events/new', {
                name: formData.name,
                date: formData.date,
                time: formData.time,
            });

            if (data.message === "success") {
                localStorage.setItem("currentReciept", JSON.stringify(formData));
                setMsg("Event created successfully!");
                setColor("green");
                await delay(1000);
                setMsg("Redrirecting... wait");
                await delay(500);
                navigate("/dashboard/event-master");
                // window.scrollTo(0, 0); 
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
                <h1 className="subtitle txt-ctr mg-a-a">Create Event</h1>

                <form onSubmit={handleSubmit} className="form">
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
                                Name of the event
                            </div>
                            <input
                                className="input margin-block-5"
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Event Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-flex flex">
                        <div className="input-box">
                            <div className="input-title margin-top-15 bobby">
                                Time of the event
                            </div>
                            <input
                                className="input margin-block-5"
                                type="time"
                                name="time"
                                id="time"
                                value={formData.time}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Event Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-flex flex">
                        <div className="input-box">
                            <div className="input-title margin-top-15 bobby">
                                Date of the event
                            </div>
                            <input
                                className="input margin-block-5"
                                type="date"
                                pattern="\d{2}-\d{2}-\d{4}"
                                name="date"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="DD-MM-YYYY"
                                required
                            />
                        </div>
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
