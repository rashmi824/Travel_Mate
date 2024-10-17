const router = require("express").Router();
let Booking = require("../models/Booking");

router.route("/add").post((req,res)=>{ //add a new booking

    const accomoId=req.body.accomoId;
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const rooms=req.body.rooms;
    const days=req.body.days;
    const price=req.body.price;
    const arrivedDate=req.body.arrivedDate;
    
    

    const newBooking = new Booking({
      
        accomoId,
        name,
        email,
        phone,
        rooms,
        days,
        price,
        arrivedDate
        

})

    newBooking.save().then(()=>{
        res.json("Your Booking is Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{ //get all booking details

    Booking.find().then((booking)=>{
        res.json(booking)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{ //update a booking
    let bookingID=req.params.id;
    const {accomoId,name,email,phone,rooms,days,price,arrivedDate}=req.body;

    const updateBooking={
        accomoId,
        name,
        email,
        phone,
        rooms,
        days,
        price, 
        arrivedDate
      
        
        
     }
     const update=await Booking.findByIdAndUpdate(bookingID,updateBooking).then(()=>{
        res.status(200).send({status:"Booking Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.messege});
    })
})


router.route("/delete/:id").delete(async(req,res) =>{//delete a booking
    let bookingID=req.params.id;

    await Booking.findByIdAndDelete(bookingID).then(()=>{
        res.status(200).send({status:"Booking Deleted"});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with delete user",error:err.messege});
    })
})

router.route("/get/:id").get(async(req,res)=>{ //get only one booking details
    let bookingID=req.params.id;
    const user=await Booking.findById(bookingID).then((booking)=>{
        res.status(200).send({status:"Booking is Fetched",booking});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with get user",error:err.messege});   
    })
})

module.exports=router;