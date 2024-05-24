import React from 'react';

const CarListing = ({ car }) => (
  <div className="car-listing">
    <img src={process.env.PUBLIC_URL + '/' + car.image} alt={`${car.make} ${car.model}`} />
    <p><strong>Year:</strong> {car.year}</p>
    <p><strong>Make:</strong> {car.make}</p>
    <p><strong>Model:</strong> {car.model}</p>
    <p><strong>Price:</strong> ${car.price}</p>
  </div>
);

export default CarListing;
