import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Bookingform() {
  const { accomId } = useParams();
  const id = accomId;
  //when fill the form all the values are assigns
  const [accomoId, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rooms, setRooms] = useState("");
  const [days, setDays] = useState("");
  const [price, setPrice] = useState("");
  const [arrivedDate, setDate] = useState("");

  const Navigate = useNavigate();

  function sendData(e) {
    //when click on submit button senddata function executes
    e.preventDefault();
    // alert("Insert")
    setID(id);
    //create js object
    const newBooking = {
      accomoId,
      name,
      email,
      phone,
      rooms,
      days,
      price,
      arrivedDate,
    };
    //console.log(newSupplier); You can see send data on console
    if (
      accomId === "" ||
      name === "" ||
      email === "" ||
      phone === "" ||
      rooms === "" ||
      days === "" ||
      days === "" ||
      price === "" ||
      arrivedDate === ""
    ) {
      alert("Must fill all fields");
    }
    console.log(newBooking);
    axios
      .post("http://localhost:8070/booking/add", newBooking)
      .then(() => {
        /* Navigate('/') */
        alert("Booking is Added");
        Navigate("/properties");
      })
      .catch((err) => {
        alert(err);
      });
    //put data to database from backend
  }

  return (
    <>
      <div>
        <nav>
          <div class="logo">
            <span>Booking.com</span>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/properties">Accomodations</a>
              </li>
              <li>
                <a href="/feedback">Feedback</a>
              </li>
              <li>
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="booking" className="section">
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="booking-form">
                  <div className="form-header"></div>
                  <form onSubmit={sendData}>
                    <div className="form-group col-md-8">
                      <label for="inputID" className="form-label">
                        Accomodation ID
                      </label>
                      <input
                        type="text"
                        value={accomId}
                        className="form-control"
                        id="inputID"
                        readOnly
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label for="inputName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Enter Full name here"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="form-group col-md-8">
                      <label for="inputEmail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter Email here"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="form-group col-md-8">
                      <label for="inputphone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputphone"
                        placeholder="Enter Phone number here"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="form-group col-md-8">
                      <label for="inputrooms" className="form-label">
                        Number of Rooms
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputrooms"
                        placeholder="Enter Number of Rooms here"
                        onChange={(e) => {
                          setRooms(e.target.value);
                        }}
                        autocomplete="off"
                        required
                      />
                    </div>

                    <div className="form-group col-md-8">
                      <label for="inputDays" className="form-label">
                        Number of Days
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputDays"
                        placeholder="Enter Number of Days here"
                        onChange={(e) => {
                          setDays(e.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className="form-group col-md-8">
                      <label for="inputPrice" className="form-label">
                        Price per Night
                      </label>
                      <select
                        className="form-control"
                        id="inputPrice"
                        placeholder="Enter Price per night"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      >
                        <option>--Select a Price--</option>
                        <option>10000.00</option>
                        <option>15000.00</option>
                        <option>20000.00</option>
                        <option>25000.00</option>
                        <option>30000.00</option>
                        <option>35000.00</option>
                        <option>40000.00</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>

                    <div className="form-group col-md-8">
                      <label for="inputDate" className="form-label">
                        Arrived Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputDate"
                        placeholder="Arrived Date"
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-btn">
                      <button type="submit" className="submit-btn">
                        BOOK NOW
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
