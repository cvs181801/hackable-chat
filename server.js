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

//server.listen(process.env.PORT || 3000);

server.listen(3000);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
  });

//login route
app.post(`/api/login`, async (req, res)=> {
    let {username, password} = req.body; 
    //console.log(username, password)

    try {
      const loginResponse1 = await pool.query({name: "select-user", text: `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`});
      //console.log(loginResponse1)
      console.log('username and pw within try block ', username, password)
      //const loginRes = await pool.query(`UPDATE users SET isloggedin = 'true' WHERE username = ${username} RETURNING *`)
      //const getSomeData = await pool.query('SELECT * FROM messages')
            //console.log("log in!! ", loginRes.rows[0])
            //console.log(getSomeData)
            if(loginResponse1.rows[0].username === username && loginResponse1.rows[0].password === password) {
              console.log( loginResponse1.rows[0], "is logged in")
              const allMessages = await pool.query({name: "select-msgs", text:`SELECT text, username, user_id FROM messages INNER JOIN users ON messages.user_id = users.id`}) 
              console.log(allMessages.rows)
              res.send([`Welcome back ${loginResponse1.rows[0].username}!`, allMessages.rows]) //send back something to log them in
            } else if (loginResponse1.Result.rowCount == 0){
              console.log(  "is NOT logged in")
              res.send('sorry Charlie')
            }

   } catch(e) {
       res.send(["Something went wrong.  Please try again.", e.stack])
   }
})

