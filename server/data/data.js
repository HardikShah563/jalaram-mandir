// creating sample data
const donations = [
    {
        "receiptNo": 1,
        "DonorName": "Pragji Narshi Bhanushali",
        "DonorAddress": "Bhandup",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 2,
        "DonorName": "Virchandas Vasanji Somaiya",
        "DonorAddress": "Bhandup",
        "Amount": 251,
        "AmountInWords": "Two Hundred and Fifty-OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 3,
        "DonorName": "Dharam Rajesh Patel",
        "DonorAddress": "Bhandup",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 4,
        "DonorName": "Jai Jalaram",
        "DonorAddress": "Bhandup",
        "Amount": 100,
        "AmountInWords": "One Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 5,
        "DonorName": "Kalpana Katiya",
        "DonorAddress": "Bhandup",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 6,
        "DonorName": "Vipul Patel",
        "DonorAddress": "Bhandup",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 7,
        "DonorName": "himanshu panchal",
        "DonorAddress": "bhandup",
        "Amount": 152,
        "AmountInWords": "One Hundred and Fifty-TwoOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 8,
        "DonorName": "vipul upadhya",
        "DonorAddress": "bhandup",
        "Amount": 101,
        "AmountInWords": "One Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 9,
        "DonorName": "menaben kakkad",
        "DonorAddress": "bhandup",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 10,
        "DonorName": "hitesh shah",
        "DonorAddress": "parla",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 11,
        "DonorName": "viralbhai",
        "DonorAddress": "parla",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 12,
        "DonorName": "raju bhai ",
        "DonorAddress": "vashi",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 13,
        "DonorName": "kamlesh shah",
        "DonorAddress": "ghatkoper",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 14,
        "DonorName": "prakash kukreja",
        "DonorAddress": "chembur",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 15,
        "DonorName": "BHAVESH MARU",
        "DonorAddress": "BHANDUP",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 16,
        "DonorName": "MADHU CHEDHA",
        "DonorAddress": "BHANDUP",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 17,
        "DonorName": "BHARAT RUPAREL",
        "DonorAddress": "BHANDUP",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 18,
        "DonorName": "RAMESH RATHOD",
        "DonorAddress": "BHANDUP",
        "Amount": 1001,
        "AmountInWords": "One Thousand and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 19,
        "DonorName": "SURESH LALJI & CO",
        "DonorAddress": "MUMBAI",
        "Amount": 1100,
        "AmountInWords": "One Thousand One Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 20,
        "DonorName": "AMIT PRAVINCHANDRA VORA",
        "DonorAddress": "BHANDUP",
        "Amount": 500,
        "AmountInWords": "Five Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 21,
        "DonorName": "VINOD CHANDRA JOSHI & FAMILY",
        "DonorAddress": "BHANDUP",
        "Amount": 1102,
        "AmountInWords": "One Thousand One Hundred and TwoOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 22,
        "DonorName": "LT.NEELA PANCHAL",
        "DonorAddress": "BHANDUP",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 23,
        "DonorName": "RAJ RAMESH PANDYA",
        "DonorAddress": "BHANDUP",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 24,
        "DonorName": "BAPA SITARAM",
        "DonorAddress": "BHANDUP",
        "Amount": 201,
        "AmountInWords": "Two Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 25,
        "DonorName": "JAI JALARAM",
        "DonorAddress": "BHANDUP",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 26,
        "DonorName": "MAHASHANKAR M JOSHI",
        "DonorAddress": "BHANDUP",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 27,
        "DonorName": "SUDHAKAR PANDEY",
        "DonorAddress": "BHANDUP",
        "Amount": 500,
        "AmountInWords": "Five Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 28,
        "DonorName": "SUDHAKAR PANDEY",
        "DonorAddress": "BHANDUP",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 29,
        "DonorName": "CHANDRAKALA HASMUKH NAVSARIWALA",
        "DonorAddress": "BHANDUP",
        "Amount": 201,
        "AmountInWords": "Two Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 30,
        "DonorName": "Kishorbhai Khimji",
        "DonorAddress": "Bhandup",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 31,
        "DonorName": "Jayaben Bharatbhai ",
        "DonorAddress": "Thane",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 32,
        "DonorName": "Jai Jalaram",
        "DonorAddress": "Bhandup",
        "Amount": 500,
        "AmountInWords": "Five Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 33,
        "DonorName": "UMERSHI JETHMAL",
        "DonorAddress": "BHANDUP",
        "Amount": 1100,
        "AmountInWords": "One Thousand One Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 34,
        "DonorName": "ASHOK DEDHIYA",
        "DonorAddress": "BHANDUP ",
        "Amount": 100,
        "AmountInWords": "One Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 35,
        "DonorName": "HASMUKH MEHTA",
        "DonorAddress": "BHANDUP",
        "Amount": 151,
        "AmountInWords": "One Hundred and Fifty-OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 36,
        "DonorName": "PRAKASH NANDANI",
        "DonorAddress": "BHANDUP MANGATRAM",
        "Amount": 251,
        "AmountInWords": "Two Hundred and Fifty-OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 37,
        "DonorName": "HEMANTBHAI PANCHAL",
        "DonorAddress": "BHANDUP",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 38,
        "DonorName": "DR JHAVERI ",
        "DonorAddress": "BHANDUP",
        "Amount": 101,
        "AmountInWords": "One Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 39,
        "DonorName": "HEMANTBHAI PANCHAL",
        "DonorAddress": "BHANDUP ",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 40,
        "DonorName": "AMRUTLAL PANCHAL",
        "DonorAddress": "BHANDUP",
        "Amount": 500,
        "AmountInWords": "Five Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 41,
        "DonorName": "DARSHAN DRESSES",
        "DonorAddress": "BHANDUP",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 42,
        "DonorName": "JAGDISH GANDHI",
        "DonorAddress": "MULUND",
        "Amount": 101,
        "AmountInWords": "One Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 43,
        "DonorName": "LAXMICHAND MARU",
        "DonorAddress": "BHANDUP",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 44,
        "DonorName": "JAI JALARAM ",
        "DonorAddress": "MULUND",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 45,
        "DonorName": "JAI JALARAM",
        "DonorAddress": "BHANDUP",
        "Amount": 101,
        "AmountInWords": "One Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 46,
        "DonorName": "A TO Z STORES ",
        "DonorAddress": "BHANDUP",
        "Amount": 101,
        "AmountInWords": "One Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 47,
        "DonorName": "DESAI STORES ",
        "DonorAddress": "BHANDUP",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 48,
        "DonorName": "SUMIT PATEL",
        "DonorAddress": "BHANDUP",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 49,
        "DonorName": "DAKSHA PATEL ",
        "DonorAddress": "BHANDUP",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 50,
        "DonorName": "HARI OM",
        "DonorAddress": "BHANDUP",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 51,
        "DonorName": "SUDHA CHAWDA",
        "DonorAddress": "MULUND",
        "Amount": 101,
        "AmountInWords": "One Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 52,
        "DonorName": "NEMCHAND RATANSHI DEDHIYA",
        "DonorAddress": "BHANDUP",
        "Amount": 251,
        "AmountInWords": "Two Hundred and Fifty-OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 53,
        "DonorName": "JYOTI THAKKER",
        "DonorAddress": "BHANDUP ",
        "Amount": 501,
        "AmountInWords": "Five Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 54,
        "DonorName": "KAMLABEN SOHANLAL",
        "DonorAddress": "BHANDUP",
        "Amount": 500,
        "AmountInWords": "Five Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 55,
        "DonorName": "RAJESH CHAURASIYA",
        "DonorAddress": "BHANDUP ",
        "Amount": 101,
        "AmountInWords": "One Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 56,
        "DonorName": "SHAILESH NAGDA",
        "DonorAddress": "BHANDUP",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 57,
        "DonorName": "ARVINDBHAI",
        "DonorAddress": "BHANDUP",
        "Amount": 555,
        "AmountInWords": "Five Hundred and Fifty-FiveOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 58,
        "DonorName": "KAMLABEN KHATRI",
        "DonorAddress": "BHANDUP",
        "Amount": 251,
        "AmountInWords": "Two Hundred and Fifty-OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 59,
        "DonorName": "KAMLABEN KHATRI",
        "DonorAddress": "BHANDUP",
        "Amount": 50,
        "AmountInWords": "FiftyOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 60,
        "DonorName": "HITESH ARVINDBHAI SHAH",
        "DonorAddress": "BHANDUP",
        "Amount": 151,
        "AmountInWords": "One Hundred and Fifty-OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 61,
        "DonorName": "PRAMILATAI PATIL",
        "DonorAddress": "BHANDUP",
        "Amount": 500,
        "AmountInWords": "Five Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 62,
        "DonorName": "RAJESH HARIRAM ANAM",
        "DonorAddress": "BHANDUP",
        "Amount": 1001,
        "AmountInWords": "One Thousand and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 63,
        "DonorName": "UMESH",
        "DonorAddress": "BHANDUP",
        "Amount": 205,
        "AmountInWords": "Two Hundred and FiveOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 64,
        "DonorName": "NILESHBHAI PREMANAND",
        "DonorAddress": "BHANDUP",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 65,
        "DonorName": "SAKHI MANDAL ",
        "DonorAddress": "BHANDUP",
        "Amount": 300,
        "AmountInWords": "Three Hundred Only",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 66,
        "DonorName": "RAJ JADHAVI",
        "DonorAddress": "BHANDUP",
        "Amount": 101,
        "AmountInWords": "One Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 67,
        "DonorName": "SITARAM",
        "DonorAddress": "BHANDUP",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 68,
        "DonorName": "RAKESHBHAI M PATEL",
        "DonorAddress": "BHANDUP ",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 69,
        "DonorName": "SURYA TOBBACO",
        "DonorAddress": "BHANDUP",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
    {
        "receiptNo": 70,
        "DonorName": "JAGDISH THAKKER",
        "DonorAddress": "BHANDUP",
        "Amount": 301,
        "AmountInWords": "Three Hundred and OneOnly",
        "ReceiptDate": "11-Jul-16",
        "PurposeOfDonation": "Shri Jalaram Jayanti"
    },
];

const events = [
    {
        "eventId": 1,
        "EventName": "Jalaram Jayanti",
        "Location": "Bhandup",
        "Date": "11-Jul-16",
    },
    {
        "eventId": 2,
        "EventName": "Shri Jalaram Jayanti",
        "Location": "Mulund",
        "Date": "12-Aug-18",
    },
    {
        "eventId": 3,
        "EventName": "Jalaram Jayanti",
        "Location": "Bhandup",
        "Date": "11-Jul-16",
    },
    {
        "eventId": 4,
        "EventName": "Shri Jalaram Jayanti",
        "Location": "Mulund",
        "Date": "12-Aug-18",
    },
];

import bcrypt from "bcryptjs";
const users = [
    {
        "name": "Hardik",
        "email": "hardikts@gmail.com",
        "password": bcrypt.hashSync("hardik1234"),
    }, 
    {
        "name": "Tushar",
        "email": "tusharcomtek@gmail.com",
        "password": bcrypt.hashSync("tushar1234"),
    },
    {
        "name": "Jalaram Mandir",
        "email": "hardikts@gmail.com",
        "password": bcrypt.hashSync("jalaram1234"),
    }
];

// exporting sample data
export default {
    donations,
    events,
    users,
}