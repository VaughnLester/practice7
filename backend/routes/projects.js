import express from "express";
import { getProjects } from "../controllers/projectsController.js";


const router = express.Router();
router.get("/projects", getProjects);


export {router};
