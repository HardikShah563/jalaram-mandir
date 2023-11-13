// importing from react
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
// importing stylesheet
import "../style/sidebar.css";
// importing icons
import { BiSolidRightArrow } from "react-icons/bi";
import { RiContrast2Line } from "react-icons/ri";

export default function SideBar() {
    const navigate = useNavigate();

    const [collapse, setCollapse] = useState(false);

    function toggleCollapse() {
        setCollapse(prevState => !prevState);
    }

    const [activeEl, setActiveEl] = useState("Dashboard");

    useEffect(() => {
        const path = window.location.pathname;
        setActiveEl(path.slice(10, path.length));
    });

    const [links, setLinks] = useState([
        {
            name: "Dashboard",
            link: ""
        }, {
            name: "Donation Entry",
            link: "/donation-entry",
        }, {
            name: "Event Master",
            link: "/event-master",
        }, {
            name: "Donation Master",
            link: "/donation-master",
        }, {
            name: "Reciepts",
            link: "/reciepts",
        }, {
            name: "Bill Template",
            link: "/portfolio-entries",
        },
    ]);

    return (
        <>
            <div className="flex">
                <div className={`sidebar-arrow-div invisible ${!collapse && "collapse"}`}>
                    <BiSolidRightArrow className="sidebar-arrow cur" onClick={toggleCollapse} />
                </div>

                <div className={`sidebar ${collapse && "collapse"}`}>
                    <div className="sidebar-arrow-div">
                        <BiSolidRightArrow className="sidebar-arrow cur" onClick={toggleCollapse} />
                    </div>

                    {links.map(link => (
                        <div key={link.link}>
                            {
                                <div
                                    className={`level ${activeEl === link.link && "active"}`}
                                    onClick={() => {
                                        navigate(`/dashboard${link.link}`)
                                    }}>
                                    <div className="flex gap-10"><RiContrast2Line className="level-icon" /><span>{link.name}</span></div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <Outlet />
            </div>
        </>
    );
};
