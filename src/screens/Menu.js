
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Menu() {
  const [foodCategories, setFoodCategories] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/foodData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setFoodItems(data[0] || []);
      setFoodCategories(data[1] || []);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />

      {/* Carousel Section */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: '10' }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Carousel Images */}
          <div className="carousel-item active">
            <img
              src="https://th.bing.com/th/id/R.44d10945c0a134e5d18b403a2d4eca7c?rik=AO60awUclc7mXw&riu=http%3a%2f%2fassets.epicurious.com%2fphotos%2f57c5c6d9cf9e9ad43de2d96e%2fmaster%2fpass%2fthe-ultimate-hamburger.jpg&ehk=ovkmWw5FEuB86jZ%2fN9Gt9ATrG2oovgVkW0CHny4no8E%3d&risl=&pid=ImgRaw&r=0"
              className="d-block w-100"
              style={{ objectFit: 'cover', filter: 'brightness(30%)' }}
              alt="burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://mediavine-res.cloudinary.com/image/upload/s--NGif5kaM--/ar_16:9,c_fill,f_auto,fl_lossy,q_auto/v1544487685/hnztcbzoncrpaokkfap7.jpg"
              className="d-block w-100"
              style={{ objectFit: 'cover', filter: 'brightness(30%)' }}
              alt="momos"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7?rs=1&pid=ImgDetMain"
              className="d-block w-100"
              style={{ objectFit: 'cover', filter: 'brightness(30%)' }}
              alt="pizza"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Food Categories and Items */}
      <div className="container">
        {foodCategories.length > 0 ? (
          foodCategories.map((category) => (
            <div key={category._id} className="row mb-3">
              <div className="fs-3 m-3">{category.CategoryName}</div>
              <hr />
              {foodItems.length > 0 ? (
                foodItems
                  .filter(
                    (item) =>
                      item.CategoryName === category.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filteredItem) => (
                    <div
                      key={filteredItem._id}
                      className="col-10 col-md-6 col-lg-3"
                    >
                      <Card
                        item={filteredItem}
                        foodName={filteredItem.name}
                        options={filteredItem.options[0]}
                        img={filteredItem.img}
                      />
                    </div>
                  ))
              ) : (
                <div>No items match your search.</div>
              )}
            </div>
          ))
        ) : (
          <div>Loading categories...</div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Menu;

