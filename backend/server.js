const express = require("express");
//const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const sql = require("mssql/msnodesqlv8");

const config = {
  connectionString:
    "Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS2;Database=porkypylon;Trusted_Connection=Yes;"
};


let pool;

async function connectDB(){
  pool = await sql.connect(config);
  console.log("Connected to the SQL Server");
}

connectDB();

/*sql.connect(config)
  .then(() => console.log("Connected!"))
  .catch(err => console.log(err));
*/

app.get("/teams/:selectteam",async (req,res) => {
  const { selectteam } = req.params;

  const result = await pool.request()
  .input("selectteam", sql.VarChar, selectteam)
  .query("SELECT * FROM teamsystems WHERE Team = @selectteam");

  res.json(result.recordset[0]);

});


app.get("/users", async (req, res) => {
try{
    await sql.connect(config);
    const result = await sql.query("SELECT * FROM teamsystems");
    res.json(result.recordset);
}
catch(err){
    res.status(500).send(err.message);
}
});


app.listen(5000, ()=> console.log("Server is running"));