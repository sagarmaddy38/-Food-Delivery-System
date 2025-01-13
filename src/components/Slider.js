import React from 'react'

function Slider() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain"}}>
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-caption " style={{ zIndex: "10" }}> 
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form> 
          </div>

            <div className="carousel-item active">
              <img src="https://th.bing.com/th/id/R.44d10945c0a134e5d18b403a2d4eca7c?rik=AO60awUclc7mXw&riu=http%3a%2f%2fassets.epicurious.com%2fphotos%2f57c5c6d9cf9e9ad43de2d96e%2fmaster%2fpass%2fthe-ultimate-hamburger.jpg&ehk=ovkmWw5FEuB86jZ%2fN9Gt9ATrG2oovgVkW0CHny4no8E%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" style={{filter:"brightness(30%)" }} alt="burger" />
            </div>

            <div className="carousel-item">
              <img src="https://mediavine-res.cloudinary.com/image/upload/s--NGif5kaM--/ar_16:9,c_fill,f_auto,fl_lossy,q_auto/v1544487685/hnztcbzoncrpaokkfap7.jpg" className="d-block w-100 "  style={{filter:"brightness(30%)"}}  alt="momos" />

            </div>
            <div className="carousel-item">
              <img src="https://th.bing.com/th/id/OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7?rs=1&pid=ImgDetMain" className="d-block w-100"  style={{filter:"brightness(30%)"}}  alt="pizza" />
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        
      </div>
    </div>
  )
}

export default Slider


