import { useNavigate } from "react-router-dom";

export default function BhaktMandal() {
    const navigate = useNavigate();
    return (
        <>
            <div className="page">
                <h1 className="subtitle txt-ctr">About Bhakt Mandal</h1>

                <div className="page">
                    <h1 className="txt-ctr small-heading" id="text-red">|| To be updated soon ||</h1>
                    <div className="small-page">
                        <div onClick={() => { navigate("/") }} className="mg-a-a black-button">Visit Home Page</div>
                    </div>
                </div>
            </div>
        </>
    );
};
