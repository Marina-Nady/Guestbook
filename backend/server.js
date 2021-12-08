require('./helper/db_connection');
const express = require('express');
const app = express();
let port =  8000;
const userRouter = require('./router/users')
const msgRouter = require('./router/messages')
var cors = require('cors');
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/api/users',userRouter)
app.use('/api/messages',msgRouter)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})