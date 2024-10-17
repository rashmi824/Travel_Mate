import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
//import { getSuggestedQuery } from '@testing-library/react';

const UpdateHotel = () => {
  let { id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(`http://localhost:8070/hotellist/get/${id}`);
      const result = res.data.listhotel;

      console.log(res.data.listhotel);

      setID(result.accomId);
      setName(result.name);
      setType(result.type);
      setCity(result.city);
      setPrice(result.price);
      setImages(result.images);
    };
    getUserData();
  }, [id]);

  const [accomId, setID] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState("");

  const sendDataToUpdate = async () => {
    try {
      let payload = {
        accomId,
        name,
        type,
        city,
        price,
        images,
      };

      const res = await axios.put(
        `http://localhost:8070/hotellist/update/${id}`,
        payload
      );
      alert("You have successfully updated.");
      window.location.href = "/";
    } catch (e) {
      alert(e);
    }
  };

  return (
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
    </nav><div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="booking-form">
                <div className="form-header">
                  <p>Update Hotel</p>
                  <form onSubmit={sendDataToUpdate}>
                    <div className="form-row">
                      <div className="form-group col-md-10">
                        <label for="inputID" className="form-label">
                          Accomodation ID
                        </label>
                        <input
                          type="text"
                          value={accomId || ""}
                          name="supierId"
                          onChange={(e) => setID(e.target.value)}
                          className="form-control"
                          id="inputID"
                          placeholder="Enter Accomodation ID here"
                          required />
                      </div>
                      <div className="form-group col-md-10">
                        <label for="inputCompanyname" className="form-label">
                          Accomodation Name
                        </label>
                        <input
                          type="text"
                          value={name || ""}
                          name="compaName"
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          id="inputCompanyname"
                          placeholder="Enter Accomodation name here"
                          required />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-group col-md-10">
                        <label for="inputAddress" className="form-label">
                          Accomodation Type
                        </label>
                        <input
                          type="text"
                          value={type || ""}
                          name="adess"
                          onChange={(e) => setType(e.target.value)}
                          className="form-control"
                          id="inputAddress"
                          placeholder="Enter Accomodation Type here"
                          required />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-group col-md-10">
                        <label for="inputAddress" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          value={city || ""}
                          name="adess"
                          onChange={(e) => setCity(e.target.value)}
                          className="form-control"
                          id="inputAddress"
                          placeholder="Enter City here"
                          required />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-10">
                        <label for="inputphone" className="form-label">
                          Price per Night
                        </label>
                        <input
                          type="text"
                          value={price || ""}
                          name="compaPhone"
                          onChange={(e) => setPrice(e.target.value)}
                          className="form-control"
                          id="inputphone"
                          placeholder="Enter Price per night here"
                          required />
                      </div>
                      <div className="form-group col-md-10">
                        <label for="inputemail" className="form-label">
                          Image-URL
                        </label>
                        <input
                          type="text"
                          value={images || ""}
                          name="emil"
                          onChange={(e) => setImages(e.target.value)}
                          className="form-control"
                          id="inputemail"
                          placeholder="Enter Image-URL here"
                          required />
                      </div>
                    </div>

                    <div className="form-btn">
                      <button type="submit" className="submit-btn">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};
export default UpdateHotel;

 