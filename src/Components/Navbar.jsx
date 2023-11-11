import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/navbar.css";

export default function Navbar() {
    // creating variable responsible for web navigation
    const navigate = useNavigate();

    const [login, setLogin] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [showNav, setShowNav] = useState(false);

    function toggleNavbar() {
        setShowNav(prevState => !prevState);
    }

    return (
        <>
            <nav className="nav">
                <div className="nav-items">
                    <div className="nav-logo cur" onClick={() => {navigate("/")}}>
                        <h1>Jalaram Mandir</h1>
                    </div>

                    <div className={`nav-links ${showNav && "active"}`}>
                        <div className="dropdown">
                            <li>
                                <div className="link-name cur">About</div>
                            </li>
                            <div className="dropdown-content">
                                <div onClick={() => navigate("/about/jalaram-bappa")}>Jalaram Bappa</div>
                                <div onClick={() => navigate("/about/history")}>History</div>
                                <div onClick={() => navigate("/team")}>Team</div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <li>
                                <div className="link-name cur" onClick={() => navigate("/events")}>Events</div>
                            </li>
                            <div className="dropdown-content">
                            </div>
                        </div>

                        <div className="dropdown">
                            <li>
                                <div className="link-name cur" onClick={() => navigate("/join-us")}>Join Us</div>
                            </li>
                            <div className="dropdown-content">
                                {/* drop down items */}
                            </div>
                        </div>

                        <div className="dropdown">
                            <li>
                                <div className="link-name cur" onClick={() => navigate("/donate")}>Donate</div>
                            </li>
                            <div className="dropdown-content">
                                {/* drop down items */}
                            </div>
                        </div>

                        <div className="dropdown">
                            <li>
                                <div className="link-name cur" onClick={() => navigate("/login")}>Login</div>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="nav-lines" onClick={toggleNavbar}>
                    <div className="Bar"></div>
                    <div className="Bar"></div>
                    <div className="Bar"></div>
                </div>
            </nav>
        </>
    );
};
