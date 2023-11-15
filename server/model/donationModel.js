import mongoose from "mongoose";

const donorSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        amount: { type: Number, required: true },
        recieptDate: { type: Date, required: true },
        eventName: { type: String, required: true },
        eventId: { type: String, required: true },
    }
);

const Donation = mongoose.model("donor", donorSchema);
export default Donation;