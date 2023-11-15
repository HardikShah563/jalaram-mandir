// importing dependencies
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// importing routes
import seedRouter from "./routes/seedRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log("Database connected!");
    })
    .catch((err) => {
        console.log(err.message);
    });

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/user', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});