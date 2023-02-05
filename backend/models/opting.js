const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {isEmail}=require('validator');

const OptingSchema=new Schema({
    userId:{
        type:String
    },
    breakfast:{
        type:String
    },
    lunch:{
        type:String
    },
    snacks:{
        type:String
    },
    dinner:{
        type:String
    },
    
});

module.exports=Opting=mongoose.model('opt',OptingSchema);