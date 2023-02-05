const express=require('express');
const mongoose=require('mongoose');
const User = require('../models/opting');

const app=express();
app.use(express.json());
const cors=require('cors');
app.use(cors());

app.post('/client/opt',(req,res)=>{
    const user=new User({
        userId:req.body.id,
        breakfast:req.body.breakfast,
        lunch:req.body.lunch,
        snacks:req.body.snacks,
        dinner:req.body.dinner
    });
    user.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
})
const dbURI = process.env.DB_URI;
const port = process.env.PORT || 5000;


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res)=>console.log("Connected to MongoDB database"))
.catch((err)=>console.log("Error in connection to MongoDB"))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);