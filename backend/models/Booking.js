const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const bookingSchema = new Schema({

    accomoId :{
        type:String,
        required:true
    },
    name :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
     phone:{
        type:String,
        required:true
    },
    rooms:{
        type:String,
        required:true
    },
    days:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    arrivedDate:{
        type:String,
        required:true
    }
    
})

const Booking= mongoose.model("Booking",bookingSchema);

module.exports = Booking;