const express = require('express');
const  mysql = require('mysql2');
const myconn = require("express-myconnection");
const routes = require('./routes');

//initialize
const app = express();
app.set('port', process.env.PORT||8080)
const dbOptions = {
    host:'localhost',
    port:3306,
    user: 'root',
    password: 'firefly',
    database: 'pagina'
}

//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
//routes
app.get('/', (req, res) =>{res.send("welcome to my api")})

app.use('/api',routes)

//server running
app.listen(app.get('port'), ()=> {console.log('server running on port', 8080);});

