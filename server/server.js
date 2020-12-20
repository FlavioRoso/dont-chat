var express = require('express');
const path = require('path')
var http = require('http')
const socketIo = require("socket.io");
const cors = require("cors");
var bodyParser = require('body-parser')
const app = express();


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


http = http.createServer(app);
app.use(express.static(path.join(__dirname,"../build")));

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});



const io = socketIo(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
}); 

app.io = io;

io.on("connection", (socket) => {


  socket.on("disconnect", (socket) => {
    console.log("User has disconnected" , socket);
    
  });


  
  socket.on("join_room", ( room) =>{

    socket.join(room);
    console.log("New connection on room : ",room);

  })

  
  
});






app.post("/sendmessage",(req, res) => {
  
  if(req.body.name && req.body.message && req.body.room)
  {
    req.app.io.to(req.body.room).emit("newmessage", {
      "message": req.body.message,
      "name" : req.body.name,
      "date" : new Date()
    });
    res.send().status(200);
  }
  else
  {
    res.send({error : "todos os parametros são necessarios é necessario"}).status(403);
  }
  
})

app.get("/*",(req,res)=>{
  res.sendFile("index.html",{root: __dirname +"/../build/"});
})





http.listen(8000, () => {
  console.log('listening on *:8000');
});
