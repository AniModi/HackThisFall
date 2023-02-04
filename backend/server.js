const express=require('express');
const mongoose=require('mongoose');
const User = require('../models/opt');

const app=express();
app.use(express.json());
app.use(cors());

app.post('/client/opt')
const dbURI = process.env.DB_URI;
const port = process.env.PORT || 5000;


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res)=>console.log("Connected to MongoDB database"))
.catch((err)=>console.log("Error in connection to MongoDB"))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);