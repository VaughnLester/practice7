import { database } from "../database.js";

export async function getProjects(req, res){
    try{
        const [projects] = await database.query("SELECT * FROM projects");
        res.json([projects]);
    }
    catch(err){console.log(err);}
}