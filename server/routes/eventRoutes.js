import express from "express";
import Event from "../model/eventModel.js";

const eventRouter = express.Router();

eventRouter.get('/all', async (req, res) => {
    res.status(200).send(await Event.find());
});

export default eventRouter;