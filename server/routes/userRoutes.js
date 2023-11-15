import express from "express";
import data from "../data/data.js";
import User from "../model/userModel.js";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    await User.find({ email: req.body.email });
    res.send({ message: "Login Successful!" });
});

export default userRouter;