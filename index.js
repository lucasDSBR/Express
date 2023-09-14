const express = require("express"); //Import the express
const app = express(); //Initialize express

app.get("/", (req, res) => {
	res.send("Bem vindo")
});

app.get("/blog", (req, res) => {
	res.send("Bem vindo ao blog")
});


app.get("/oi/:nome", (req, res) => {
	res.send("<h1>oi</h1>"+req.params.nome)
});

app.get("/oi/:blog?", (req, res) => {
	res.send("<h1>oi</h1>"+req.params.nome)
});

app.get("/canal/youtube", (req, res) => {
	var canal = req.query["canal"];
	res.send(`O canal é: ${canal}`);
});
app.listen(4000, (error) => {
	if(error) console.log("Error in server...");
	else console.log("Server initialized")
});
