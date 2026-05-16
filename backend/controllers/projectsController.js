import { database } from "../database.js";


//READ
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

//CREATE 
export async function createProject(req,res){
    //req.body is coming from the frontend FETCH request 
    try{
        console.log(`${req.body.link}", "${req.body.title}`);
        database.query(`INSERT INTO projects(link, title) VALUES ("${req.body.link}", "${req.body.title}")`);
        res.send(`created project ${req.body.title}`)
    }
    catch(err){console.log(err);}
}