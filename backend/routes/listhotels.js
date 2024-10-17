const router = require("express").Router();
let ListHotel = require("../models/ListHotel");

router.route("/add").post((req,res)=>{ //add a new hotel

    const accomId=req.body.accomId;
    const name=req.body.name;
    const type=req.body.type;
    const city=req.body.city;
    const price=req.body.price;
    const images=req.body.images;
    
    

    const newListHotel= new ListHotel({
      
        accomId,
        name,
        type,
        city,
        price,
        images
       

})

    newListHotel.save().then(()=>{
        res.json("You have successfully added!!")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{ //get all hotel list details

    ListHotel.find().then((listhotel)=>{
        res.json(listhotel)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{ //update a hotel
    let listhotelID=req.params.id;
    const {accomId,name,type,city,price,images}=req.body;

    const updateListHotel={
        accomId,
        name,
        type,
        city,
        price,
        images
        
        
        
     }
     const update=await ListHotel.findByIdAndUpdate(listhotelID,updateListHotel).then(()=>{
        res.status(200).send({status:"Hotel list Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.messege});
    })
})


router.route("/delete/:id").delete(async(req,res) =>{//delete a hotel
    let listhotelID=req.params.id;

    await ListHotel.findByIdAndDelete(listhotelID).then(()=>{
        res.status(200).send({status:"Hotel Deleted"});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with delete user",error:err.messege});
    })
})

router.route("/get/:id").get(async(req,res)=>{ //get only one hotel details
    let listhotelID=req.params.id;
    const user=await ListHotel.findById(listhotelID).then((listhotel)=>{
        res.status(200).send({status:"Booking is Fetched",listhotel});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status:"Error with get user",error:err.messege});   
    })
})

module.exports=router;