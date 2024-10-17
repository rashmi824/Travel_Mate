import React,{useState} from 'react';
import axios from "axios"; 
import{useNavigate} from 'react-router-dom';

export default function Hotel(){


    //when fill the form all the values are assigns 
  const[accomId,setID]=useState("");
  const[name,setName]=useState("");
  const[type,setType]=useState("");
  const[city,setCity]=useState("");
  const[price,setPrice]=useState("");
  const[images,setImages]=useState("")
  
  
  const Navigate = useNavigate();
 
 function sendData(e){ //when click on submit button senddata function executes
   e.preventDefault();
 // alert("Insert")

 //create js object
 const newHotel={
    accomId,
    name,
    type,
    city,
    price,
    images
   

  
 }
  console.log(newHotel);//You can see send data on console

 axios.post("http://localhost:8070/hotellist/add",newHotel).then(()=>{
    /* Navigate('/') */
    alert("Hotel is Added")
 }).catch((err)=>{
  alert(err)
 })
//put data to database from backend
 }

return(

    <><div>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Booking.com</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/viewBookAdmin">View All Bookings<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/viewHotel">View All Accomodation List<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/hotel">Add an Accomodation<span class="sr-only">(current)</span></a>
                </li>
         </ul>

        </div>
    </nav>
   <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <div className="form-header">
                              
                            </div>
                            <form onSubmit={sendData}>


                                <div className="form-group col-md-8">
                                    <label for="inputID" className="form-label">Accomodation ID</label>
                                    <input type="text" className="form-control" id="inputID" placeholder="Enter Accomodation ID here" onChange={(e) => {

                                        setID(e.target.value);
                                    } } required />
                                </div>
                                <div className="form-group col-md-8">
                                    <label for="inputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Enter Full name here" onChange={(e) => {

                                        setName(e.target.value);
                                    } } required />
                                </div>




                                <div className="form-group col-md-8">
                                    <label for="inputEmail" className="form-label">Type</label>
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Enter Type here" onChange={(e) => {

                                  setType(e.target.value);
                                    } } required />
                                </div>

                                <div className="form-group col-md-8">
                                    <label for="inputphone" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputphone" placeholder="Enter City here" onChange={(e) => {

                                         setCity(e.target.value);
                                    } } required />
                                </div>



                                <div className="form-group col-md-8">
                                    <label for="inputrooms" className="form-label">Price</label>
                                    <input type="text" className="form-control" id="inputrooms" placeholder="Enter Price here" onChange={(e) => {

                                  setPrice(e.target.value);
                                    } } autocomplete="off" required />
                                </div>

                                <div className="form-group col-md-8">
                                    <label for="inputDays" className="form-label">Image-URL</label>
                                    <input type="text" className="form-control" id="inputDays" placeholder='Enter Image URL here' onChange={(e) => {

                                    setImages(e.target.value);

                                    } } required />
                                </div>
                                    <div className="form-btn">
                                    <button type="submit" className="submit-btn">Add Hotel</button></div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> </div></>

  )
}

     
     
