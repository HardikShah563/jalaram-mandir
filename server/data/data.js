// creating sample data
const donations = [
    {
        "recieptNo": 1,
        "name": "Pragji Narshi Bhanushali",
        "address": "Bhandup",
        "phoneNo": "1111111111",
        "mode": "cash",
        "amount": 501,
        "recieptDate": "11-06-2023",
        "eventName": "Shri Jalaram Jayanti"
    },
    {
        "recieptNo": 2,
        "name": "Virchandas Vasanji Somaiya",
        "address": "Bhandup",
        "phoneNo": "1111111111",
        "mode": "cash",
        "amount": 251,
        "recieptDate": "11-06-2023",
        "eventName": "Shri Jalaram Jayanti"
    },
];

const events = [
    {
        "name": "Shri Jalaram Jayanti 2023",
        "time": "6:30",
        "date": "10-4-2023",
    },
    {
        "name": "Shri Jalaram Jayanti 2023",
        "time": "6:30",
        "date": "12-6-2023",
    },
    {
        "name": "Shri Jalaram Jayanti 2023",
        "time": "6:30",
        "date": "13-9-2023",
    },
    {
        "name": "Shri Jalaram Jayanti 2023",
        "time": "6:30",
        "date": "19-11-2023",
    },
    {
        "name": "Julelal Jayanti 2024",
        "time": "5:00",
        "date": "10-1-2024",
    }
];

import bcrypt from "bcryptjs";
const users = [
    {
        "name": "Hardik",
        "email": "hardikts@gmail.com",
        "password": bcrypt.hashSync("hardik1234"),
        "isAdmin": true,
    },
    {
        "name": "Tushar",
        "email": "tusharcomtek@gmail.com",
        "password": bcrypt.hashSync("tushar1234"),
        "isAdmin": true,
    },
    {
        "name": "Jalaram Mandir",
        "email": "hardikts@gmail.com",
        "password": bcrypt.hashSync("jalaram1234"),
        "isAdmin": false,
    }
];

// exporting sample data
export default {
    donations,
    events,
    users,
}