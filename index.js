require('dotenv').config();
require("./config/mongo");
const express = require('express')
const server = express();
const PORT = process.env.PORT || 3030;

server.get('/api/teams', (req, res) => {
    res.send("accedemos a los equipos");
})
server.post('/api/teams', (req, res) => {
    res.send("agregamos un equipo");
});
server.delete('/api/teams/:id', (req, res) => {
    res.send("borramos al equipo " + req.params.id);
}) ;

server.use(express.static("public"));

server.get('/', (req, res)=> {
    res.send("Primera peticion a ruta raiz").status(200);
});
server.listen(PORT, (err) => {  
    !err ?
    console.log(`Server running://localhost:${PORT}`)
    :
    
    console.log(`Server fail:${err}`);

});
    
