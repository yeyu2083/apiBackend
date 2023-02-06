require('dotenv').config();
require("./config/mongo");

const express = require('express')
const server = express();
const cors =require("cors");
const PORT = process.env.PORT || 3030;


server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended:false }));


server.get('/', (req, res)=> {
    res.send("Primera peticion a ruta raiz").status(200);
});
server.listen(PORT, (err) => {  
    !err ?
    console.log(`Server running://localhost:${PORT}`)
    :
    
    console.log(`Server fail:${err}`);
    
});
server.use(cors());
server.use("/api/users", require("./users/usersRt"));

server.use((req , res, next ) => {
    let error = new Error();
    error.message = "Resource Not Found";
    error.status = 404;
    next(error);
});

server.use((error, req, res) => {
    if(!error.status) {
        error.status = 500;

    }res 
    .status(error.status)
    .json( {status:error.status, message: error.message} )
})

