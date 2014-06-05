var port = 1210;
var express = require('express');
var app = express();
var body_parser = require('body-parser');
app.use(body_parser());


app.get("/app/users", function(req, res) {
    //res.sendfile('Day4.html')
	if (req.query.filter){
		res.send("List of Users matching " + req.query.filter + " handled by Jaypee");
	}
	else{
		res.send('List of users handled by Jaypee');
	}
 }); 
 

 
app.get("/app/users/:name", function(req, res) {
    //res.sendfile('Day4.html')
	res.send("GET " + req.params.name + " user handled by Jaypee")
 });
 
/* app.get("/app/users/?filter=", function(req, res) {
    //res.sendfile('Day4.html')
	
	res.send("List of Users matching " + req.query.filter + " handled by Jaypee")
 }); */

 
 
 
 
 
 
 
app.post("/app/users", function(req, res) { 
    res.send('POST handled by Jaypee')
	/* var fullname = {
		name: req.body.uname + ' ' + req.body.pword
	};
	res.json(fullname); */
	
	
 });
 
app.put("/app/users", function(req, res) {
    res.send('PUT handled by Jaypee')
 });
 
app.delete("/app/users", function(req, res) {
    res.send('DELETE handled by Jaypee')
 });
 
app.use(express.static(__dirname));


var server = app.listen(port, function(){
	console.log('Listening on port %d', port);
});