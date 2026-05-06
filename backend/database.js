import sql from "mysql2/promise";

const database = sql.createPool({
    host: "sql5.freesqldatabase.com",
    user: "sql5820138",
    password: "y6ly8SwB53",
    database: "sql5820138",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export {database};