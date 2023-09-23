import express from "express";
import indexRouter from "./routers";
import healthRouter from "./routers/health";
import dotenv from "dotenv";
import { fromRoot } from "./functions/path";

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(fromRoot("public")));

app.use("/", indexRouter);

app.use("/health", healthRouter);

app.listen(process.env.PORT, () => {
    console.log(`server listening on ${process.env.PORT}...`);
});