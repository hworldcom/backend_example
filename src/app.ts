import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (reg, res)=> {
    res.send("Hello World!");
});

export default app;