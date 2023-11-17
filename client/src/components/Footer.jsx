// importing from react
import { useNavigate } from 'react-router-dom';
// importing stylesheet
import '../style/footer.css';
import Marketing from './Marketing';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <Marketing />
            <div className="footer-sections">
                <div className="foot-section" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
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
                        <div className="foot-link-name" onClick={() => { navigate("/about/jalaram-bappa"); window.scrollTo(0, 0); }}>Jalaram Bappa</div>
                    </li>
                    <li>
                        <div className="foot-link-name" onClick={() => { navigate("/about/mandal"); window.scrollTo(0, 0); }}>Jalaram Bhakt Mandal</div>
                    </li>
                </div>

                <div className="foot-section">
                    <li className="heading">
                        <span className="green-text">Events</span>
                    </li>
                    <li>
                        <div className="foot-link-name" onClick={() => { navigate("/events"); window.scrollTo(0, 0); }}>Upcoming Events</div>
                    </li>
                    <li>
                        <div className="foot-link-name" onClick={() => { navigate("/events"); window.scrollTo(0, 0); }}>Past Events</div>
                    </li>
                    <li>
                        <div className="foot-link-name">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.google.com/maps/place/Shree+Jalaram+Mandir/@19.1438035,72.9370087,3a,75y,90t/data=!3m8!1e5!3m6!1sAF1QipMdSAVLSe5h3kk7YJCamGsVYPZQRG9lTx9jI0No!2e10!3e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMdSAVLSe5h3kk7YJCamGsVYPZQRG9lTx9jI0No%3Dw224-h398-k-no!7i720!8i1280!4m9!3m8!1s0x3be7b87a338996e1:0xd3f9bda0ed597510!8m2!3d19.1438035!4d72.9370087!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1ptx3xy2g?entry=ttu">
                                Gallery
                            </a>
                        </div>
                    </li>
                </div>

                <div className="foot-section">
                    <li className="heading">
                        <span className="green-text">Other</span>
                    </li>
                    <li>
                        <div className="foot-link-name" onClick={() => { navigate("/donation"); window.scrollTo(0, 0); }}>Donation</div>
                    </li>
                </div>

                <div className="foot-section">
                    <li className="heading"><span className="green-text">Social</span></li>
                    <li>
                        <div className="foot-link-name" onClick={() => navigate("/")}>Instagram</div>
                    </li>
                    <li>
                        <div className="foot-link-name" onClick={() => navigate("/")}>Youtube</div>
                    </li>
                    <li>
                        <div className="foot-link-name" onClick={() => navigate("/")}>Facebook</div>
                    </li>
                    <li>
                        <div className="foot-link-name" onClick={() => navigate("/")}>Twitter</div>
                    </li>
                </div>
            </div>

            <hr className="hr" />

            <div className="below-footer-links gap-10">
                <div className="below-footer-section privacy-policy">
                    <li><div onclick={() => navigate("/")}><span className="yellow-text">Terms</span></div></li>
                    <li><div onclick={() => navigate("/")}><span className="yellow-text">Privacy</span></div></li>
                    <li><div onclick={() => navigate("/")}><span className="yellow-text">Policy</span></div></li>
                </div>

                <div className="below-footer-section">
                    <b>@{new Date().getFullYear()}&nbsp;Jalaram Bhakt Mandal, Bhandup, Mumbai 400078&nbsp;|&nbsp;All Rights Reserved</b>
                </div>
            </div>
        </footer>
    );
}