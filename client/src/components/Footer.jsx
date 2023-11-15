import React from 'react';
import '../style/footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="footer" id="footer">
            <div className="footer-sections">
                <div className="foot-section">
                    <img
                        className="mg-a-a main-logo"
                        src={process.env.PUBLIC_URL + "/Assets/jbm-logo.png"}
                        alt="jalaram bhakt mandal logo"
                    />
                </div>

                <div
                    className="foot-section">
                    <li className="heading">
                        <span className="green-text">About</span>
                    </li>
                    <li>
                        <div onclick={() => navigate("/about-jalaram-bappa")}>Jalaram Bappa</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/about-temple")}>Temple</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/about-us")}>About Us</div>
                    </li>
                </div>

                <div className="foot-section">
                    <li className="heading">
                        <span className="green-text">Events</span>
                    </li>
                    <li>
                        <div onclick={() => navigate("/")}>Upcoming Events</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/")}>Past Events</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/")}>Gallery</div>
                    </li>
                </div>

                <div className="foot-section">
                    <li className="heading">
                        <span className="green-text">Other</span>
                    </li>
                    <li>
                        <div onclick={() => navigate("/temple-acts")}>Temple Acts</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/e-darshan")}>E-Darshan</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/templesevas")}>Temple Sevas</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/donation")}>Donation</div>
                    </li>
                </div>

                <div className="foot-section">
                    <li className="heading"><span className="green-text">Social</span></li>
                    <li>
                        <div onclick={() => navigate("/")}>Instagram</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/")}>Youtube</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/")}>Facebook</div>
                    </li>
                    <li>
                        <div onclick={() => navigate("/")}>Twitter</div>
                    </li>
                </div>
            </div>
            <hr />
            <div className="below-footer-links">
                <div className="below-footer-section privacy-policy">
                    <li><div onclick={() => navigate("/")}><span className="yellow-text">Terms</span></div></li>
                    <li><div onclick={() => navigate("/")}><span className="yellow-text">Privacy</span></div></li>
                    <li><div onclick={() => navigate("/")}><span className="yellow-text">Policy</span></div></li>
                </div>

                <div className="below-footer-section gap30 below-footer-brands">
                    <div target="_blank" href="https://instagram.com/thekhaaschaas/"><i className="fa-brands fa-instagram"></i></div>
                    <div target="_blank" href=""><i className="fa-brands fa-youtube"></i></div>
                    <div target="_blank" href=""><i className="fa-brands fa-twitter"></i></div>
                    <div target="_blank" href="https://www.linkedin.com/company/khaas-chaas/"><i className="fa-brands fa-linkedin"></i></div>
                </div>

                <div className="below-footer-section">
                    <span>@{new Date().getFullYear()}&nbsp;</span>
                    <span className="yellow-text">Jalaram Bhakt Mandal, Bhandup, Mumbai 400078&nbsp;</span>
                    <span>|&nbsp;All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}