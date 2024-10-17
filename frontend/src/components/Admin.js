import React from "react";

export default function Admin (){

return(

        <><nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
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
    </nav><div id="home" className="section">
                <div class="text-box">

                    <h1>Admin Panel</h1>
                    <p>Booking.Com- Revolutionize your accommodation management with<br></br> our user-friendly and efficient
             system, providing seamless management and unparalleled guest satisfaction
                        <br></br>Enjoy the entire life.</p>
                    <a href="/viewBookAdmin" class="hero-btn">Get Started</a>
                </div>


            </div></>


    )
}