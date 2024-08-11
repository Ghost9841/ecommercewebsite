import React from 'react'
import Image from "../assets/banner.jpg"

const Carousel = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img src={Image} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src="..." className="d-block w-100" alt="second.img"/>
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src="..." className="d-block w-100" alt="third.img"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel;

