import express from "express";
import { dbConnect } from "./db";
import router from "./route";
const app = express();
const port = 3000;
import { configDotenv } from "dotenv";
import cors from "cors";

const frontend_origin = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: frontend_origin,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH']
  })
);

configDotenv();

dbConnect();

app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
