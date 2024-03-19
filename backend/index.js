const {connectToMongo}=require("./db")
const express = require('express')
const cors = require('cors');
connectToMongo()
const app = express()
const port = 4000




app.use(cors());
app.use(express.json())

//available route
app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`) 
})

//write here