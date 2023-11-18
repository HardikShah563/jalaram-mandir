// importing from react
import { useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";
// importing stylesheet
import "../style/globals.css";
// importing icons
import { CgClose } from "react-icons/cg";
import { FiEdit2 } from "react-icons/fi";
// importing from utils
import { getError, Session } from "../config/utils";

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

export default function SetEvent(props) {

    const { dispatch: ctxDispatch } = useContext(Session);

    const [{ loading, error, events }, dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        events: [],
    });

    const [currentlyHappening, setCurrentlyHappening] = useState({
        _id: "",
        name: "",
        time: "",
        date: "",
    });

    function setEvent() {
        ctxDispatch({
            type: "EVENT_SET",
            payload: currentlyHappening
        });
        localStorage.setItem("currentEvent", JSON.stringify(currentlyHappening));
        props.toggleSetEvent();
    }

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

    return (
        <>
            <div>
                <div className="modal">
                    <div className="close-icon cur" onClick={props.toggleSetEvent}><CgClose size={30} /></div>

                    <h1 className="small-heading txt-ctr">Set Event</h1>

                    <div className="small-page mg-a-a modal-table">
                        {
                            loading
                                ? <div>Loading...</div>
                                : error
                                    ? <div>{error}</div>
                                    : events.map((event) => (
                                        <div
                                            className="tr flex cur"
                                            key={event._id}
                                            onClick={() => { setCurrentlyHappening(event) }}
                                            id={currentlyHappening._id === event._id && "active"}
                                        >
                                            <div className="name">{event.name}</div>
                                            <div className="location">{event.time}</div>
                                            <div className="amt">{event.date}</div>
                                            <div className="action gap-10">
                                                <div className="select-button" id={currentlyHappening._id === event._id && "active"}>{currentlyHappening._id === event._id ? ("Selected") : ("Select")}</div>
                                            </div>
                                        </div>
                                    ))
                        }
                    </div>

                    <div className="black-button mg-a-a" onClick={setEvent}>Set as current event</div>
                </div>
            </div>
        </>
    );
};
