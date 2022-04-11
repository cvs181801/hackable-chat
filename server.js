const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
const pool = require('./db-pool.js')
const Pool = require('pg').Pool;
const http = require("http");
const server = http.createServer(app);

require("dotenv").config(); 

app.use(express.json())
app.use('/', express.static(path.join(__dirname, "client")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
  })

server.listen(process.env.PORT || 3000);

//server.listen(3000);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
  });

//login route
app.post(`/api/login`, async (req, res)=> {
    const {username, password} = req.body; 

    try {
      const loginResponse1 = await pool.query({name: "select-user", text: `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`});
      
      //we can bypass authentication using the following:
      //const loginResponse1 = await pool.query({name: "select-user", text: `SELECT * FROM users WHERE username = '' OR 1=1 --' AND password = '' OR 1=1--'`});

      console.log(loginResponse1.rows)
     
      //I commented out the 'check username and password' if...else logic for an easier deonstration of how this works but even with it in place,
      //a bad actor can still do damage (such as deleting tables in your db by inerting SQL commands into the initial query)
            
      //if(loginResponse1.rows[0].username === username && loginResponse1.rows[0].password === password) {
              
        const allMessages = await pool.query({name: "select-msgs", text:`SELECT text, username, user_id FROM messages INNER JOIN users ON messages.user_id = users.id`}) 
        console.log("allMessages.rows", allMessages.rows)
        res.send([`Welcome back ${loginResponse1.rows[0].username}!`, allMessages.rows]) //send back something to log them in

            //} else if (loginResponse1.Result.rowCount == 0){
               //console.log(  "is NOT logged in")
               //res.send('sorry Charlie you're not logged in')
             //}

   } catch(e) {
       res.send(["Something went wrong.  Please try again.", e.stack])
   }
})

app.post('/api/postMsg', async(req, res)=> {
  const {text} = req.body;
  console.log(text)
  res.send(['you posted a message!', text])
  
})