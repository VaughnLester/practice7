import { database } from "../database.js";

//get all projects
export async function getProjects(req, res){
    try{
        const [projects] = await database.query("SELECT * FROM projects");
        res.json([projects]);
    }
    catch(err){console.log(err);}
}

//get project at ID 
export async function getProjectsByID(req, res){
    console.log(req.params);
    try{
        const [project] = await database.query(`SELECT * FROM projects WHERE ID = ${req.params.id}`)
        res.json([project]);
    }
    catch(err){console.log(err);}
}

export async function createProject(req, res){
    try{
        database.query(`INSERT INTO projects(link, title) VALUES ("${req.params.link}", "${req.params.title}")`);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
    res.send(`created project ${req.params.title}`)
}