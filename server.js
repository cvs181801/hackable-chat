const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
const http = require("http");
const server = http.createServer(app);

require("dotenv").config(); 

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
  })

server.listen(process.env.PORT || 3000);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
  });

//login route
app.post(`/login`, async (req, res)=> {
    let {username, password} = req.body; 

    try {
      //`UPDATE users SET isloggedin = 'true' WHERE username = ${username} RETURNING *`
            //         const payload = {
            //             id: loginResponse1.rows[0].id,
            //             username: loginResponse1.rows[0].username
            //         }

            //res.json(["Welcome back!", loginResponse1.rows[0].id, loginResponse1.rows[0].username, token]) 

            //res.send('Welcome back!') //send back something to log them in

            res.send(['something went wrong', err])
 
    } catch(e) {
        res.send(["Something went wrong.  Please try again.", e.stack])
    }
})

//why isn't the style showing up when I run the server?