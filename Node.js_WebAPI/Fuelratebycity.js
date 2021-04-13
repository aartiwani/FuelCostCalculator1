const express=require('express');
const app=express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const cors=require('cors');
app.use(cors());

//app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fuelpricecal',
	port:3306
});
console.log("Connection is established");


app.get('/sselect', function (req, res) {
	//What is to be returned to clientInformation
	let sendtoclient={city:"",rate:0};	
	
	//what is to be the input from client
	let cityfromclient=req.query.city;
	//console.log("reading params"+city);
	
	//start Database logic
	const city=cityfromclient;
	const sql='select city,rate from fuelrate where city=?';  

	const fillargs=[city];
	connection.query(sql,fillargs,function(err,sel,fields){
		if(err)
		{
			console.log("Error occured due to incorrect where clause");
		}
		else
		{
		    console.log("rows selected: "+sel[0].city+" "+sel[0].rate);
			sendtoclient.city=sel[0].city;
			sendtoclient.rate=sel[0].rate;		
			
		}
	//End Database logic and send to client	
	
		res.send(sendtoclient);
	});
});				



app.listen(8081, function () {
   console.log("server listening at port 8081...");});