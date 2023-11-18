import { createContext, useReducer } from "react";

export const getError = (error) => {
    return error.response && error.response.data.message
        ? error.message.data.message
        : error.message;
}

export const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export const Session = createContext();

const initialState = {
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,

    currentEvent: localStorage.getItem("currentEvent")
        ? JSON.parse(localStorage.getItem("currentEvent"))
        : null,

    currentReciept: localStorage.getItem("currentReciept")
        ? JSON.parse(localStorage.getItem("currentReciept"))
        : null,

    recieptDetails: "",

    eventDetails: localStorage.getItem('eventDetails')
        ? JSON.parse(localStorage.getItem('eventDetails'))
        : null,
};

function reducer(state, action) {
    switch (action.type) {
        case "USER_SIGNIN":
            return {
                ...state,
                userInfo: action.payload
            };

        case "USER_SIGNOUT":
            localStorage.removeItem("userInfo");
            return {
                ...state,
                userInfo: null,
            };

        case "RECIEPT_SET":
            return {
                ...state,
                currentRecipet: action.payload
            };

        case "RECIEPT_CLEAR":
            localStorage.removeItem("currentReciept");
            return {
                ...state,
                currentRecipet: null
            };

        case "EVENT_SET":
            return {
                ...state,
                currentEvent: action.payload
            };

        default:
            return state;
    }
}

export function SessionProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Session.Provider value={value}>{props.children}</Session.Provider>
}