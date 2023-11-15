// importing from react
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Session, delay } from "../config/utils";

export default function Login() {
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Session);
    const { userInfo } = state;

    useEffect(() => { }, []);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/user/login', {
                email: formData.email,
                password: formData.password
            });
            console.log(data);
            if (data.message === "success") {
                ctxDispatch({
                    type: 'USER_SIGNIN',
                    payload: data
                });
                localStorage.setItem("userInfo", JSON.stringify(data.user));
                setMsg("Login Successful!");
                setColor("green");
                await delay(500);
                setMsg("Redirecting... wait");
                await delay(500);
                navigate("/dashboard");
            }
            else {
                setMsg(data.message);
                setColor("red");
            }
        } catch (error) {
            setMsg("Login Unsuccessful!");
            setColor("red");
        }
    }

    return (
        <>
            <div className="page">
                <h1 className="subtitle txt-ctr">Log In</h1>
                <h3 className="margin-top-bottom-20 txt-ctr">** Only for admins **</h3>

                <form onSubmit={handleSubmit} className="form login-form">
                    {msg &&
                        (
                            <div className="input-box">
                                <div className="input msg-box" id={color}>
                                    {msg}
                                </div>
                            </div>
                        )
                    }

                    <div className="input-box">
                        <label
                            htmlFor="email">
                            Email Address:
                        </label>

                        <input
                            className="input"
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abc@gmail.com"
                            autocomplete="off"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label
                            for="password">
                            Password:
                        </label>

                        <input
                            className="input"
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Pass****"
                            autocomplete="off"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <button
                            className="form-btn"
                            type="submit">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
