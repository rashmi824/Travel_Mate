import React from "react";
import "../css/listProperty.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ListProperty = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getdata = async (e) => {
      const res = await fetch("http://localhost:8070/hotellist", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 404 || !data) {
        console.log("error");
      } else {
        setCards(data);
        console.log("data fetched");
      }
    };
    getdata();
  }, []);

  return (
    <div>
      <div className="header">
        <nav>
          <div className="logo">
            <span>Booking.com</span>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/properties">Accommodations</a>
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

        <div className="card-container">
          {cards.map((card, index) => (
            <div className="card" style={{ width: "25rem" }} key={index}>
              <img
                src={card.images}
                className="card-img-top"
                alt="hotel"
                style={{ height: "300px", width: "100%" }}
              />
              <div className="card-body">
                <div>
                  <div style={{ textAlign: "center" }}>
                    <p className="fs-3 fw-bold">
                      <span>{card.name}</span>
                    </p>
                  </div>
                  <div style={{ marginLeft: "30%" }}>
                    <p>
                      ID: <span className="fw-bold">{card.accomId}</span>
                    </p>
                    <p>
                      City : <span className="fw-bold">{card.city}</span>
                    </p>
                    <p>
                      Price : <span className="fw-bold">Rs. {card.price}</span>
                    </p>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Link
                    to={`/book/${card.accomId}`}
                    className="btn btn-primary"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer style={{ marginTop: "30px" }}>This part is for footer</footer>
    </div>
  );
};

export default ListProperty;
