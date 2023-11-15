import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        date: { type: Date, required: true },
    }
);

const Events = mongoose.model("events", eventSchema);
export default Events;