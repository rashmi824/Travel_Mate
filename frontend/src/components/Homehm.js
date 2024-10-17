import React from "react";

export default function Homehm (){
return(
   <div class ="header">
    <nav>
        <div class="logo">
        <span>Booking.com</span>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/properties">Accomodations</a></li>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/admin">Admin</a></li>
        </ul>
        </div>
    </nav>
    <div class="content">
        <h1 class="slide-left">Spend<br/>Your Holiday</h1>
        <p class="slide-left">Revolutionize your accommodation management with our user-friendly and efficient
             system, providing seamless management and unparalleled guest satisfaction</p>
             <div class="links slide-left">
                <a href="/properties" class="btn">Book Now</a>
                <a href="/feedback">or Contact</a>
             </div>
    </div>

   </div>
)}