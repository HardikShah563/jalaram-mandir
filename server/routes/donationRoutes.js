import express from "express";
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler";
import Donation from "../model/donationModel.js";

const donationRouter = express.Router();

donationRouter.get('/all', async (req, res) => {
    res.status(200).send(await Donation.find());
});

donationRouter.post(
    "/new",
    expressAsyncHandler(async (req, res) => {
        const name = req.body.name;
        const address = req.body.address;
        const phoneNo = req.body.phoneNo;
        const email = req.body.email;
        const mode = req.body.mode;
        const amount = req.body.amount;
        const panNo = req.body.panNo;
        const eventName = req.body.eventName;
        if (await Donation.create({
            name: name,
            address: address,
            phoneNo: phoneNo,
            email: email,
            mode: mode,
            amount: amount,
            panNo: panNo,
            recieptDate: new Date().toDateString(),
            eventName: eventName
        })) {
            const donation = await Donation.find({name: name, address: address, mode: mode, amount: amount})
            res.send({ message: "success", donation: donation });
        }
        else {
            res.send({ message: "Some unexpected error occured" });
        }
    })
);

export default donationRouter;