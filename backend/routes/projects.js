import express from "express";
import { getProjects, getProjectsByID, createProject } from "../controllers/projectsController.js";


const router = express.Router();

//projects CRUD operations:

//SELECT ALL
router.get("/projects", getProjects);

//SELECT BY ID
// :id defines the id varaible so you can declare "id" in your request url parameters!
router.get("/:id", getProjectsByID);

//method declared on the frontend 
//this is the form path on frontend form 

router.post("/newproject", createProject);




export {router};
