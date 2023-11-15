// import Users from "../model/userModel.js";
// import bcrypt from "bcryptjs";

// async function login(email, password) {
//     const user = await Users.findOne({ email: email });
//     if (user) {
//         if (bcrypt.compareSync(password, user.password)) {
//             return { color: "green", message: "Login Successful!" };
//         }
//         else {
//             return { color: "red", message: "Incorrect Password!" };
//         }
//     }
//     else {
//         return { color: "red", message: "Email not found!" };
//     }
// }
