const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const listhotelSchema = new Schema({

    accomId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
     city:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    }
   
    
})

const ListHotel= mongoose.model("ListHotel",listhotelSchema);

module.exports = ListHotel;