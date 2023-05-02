import React from 'react';
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <Navbar/>
      <div className="banner_content">
        <div className="container">
          <h3>Pizza Delivery</h3>
          <h1>MESTRO<br></br> PIZINNI</h1>
          <p>Search for Flower Delivery Oklahoma. Instant<br></br> and personalized results
            is at Visymo Search. <br></br>99% Match on Your Search Query.
          </p>
          <button type="button" className = "btn1">DELIVERY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Header