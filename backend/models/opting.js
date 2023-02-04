const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {isEmail}=require('validator');

const OptingSchema=new Schema({
    userId:{
        type:String
    },
    breakfast:{
        type:boolean
    },
    lunch:{
        type:boolean
    },
    snacks:{
        type:boolean
    },
    dinner:{
        type:boolean
    },
    
});

module.exports=User=mongoose.model('opt',OptingSchema);