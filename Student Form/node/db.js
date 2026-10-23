const mysql=require("mysql2");
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kumudhab2004",
    database:"student_db",
});
db.connect((err)=>{
    if(err){
        console.log("database connection error",err.message);
        return;
    }
    else{
        console.log("mysql connected");
    }
});
module.exports=db;