import express from "express";
import { router } from "./routes/projects.js";

const app = express();

app.use(express.static("../frontend/practice7/dist"))
app.use("/api",router);

app.listen(1001, ()=>{
    console.log("listening on port 1001");
})