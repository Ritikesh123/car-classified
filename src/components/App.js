import React, { useState } from 'react';
import CarListing from './carListing';
import Filter from './Filter';
import '../index.css';

const App = () => {
  const [cars, setCars] = useState([
    { image: 'car1.png', year: 2024, make: 'Maruti', model: 'Ertiga', price: 15000 },
    { image: 'car2.png', year: 2023, make: 'Toyota', model: 'Corolla', price: 20000 },
    { image: 'car3.png', year: 2022, make: 'Honda', model: 'Civic', price: 22000 },
    { image: 'car4.png', year: 2021, make: 'Ford', model: 'Mustang', price: 30000 },
    { image: 'car5.png', year: 2024, make: 'Maruti', model: 'Swift', price: 14000 },
    { image: 'car6.png', year: 2023, make: 'Toyota', model: 'Camry', price: 25000 },
    { image: 'car7.png', year: 2022, make: 'Honda', model: 'Accord', price: 27000 },
    { image: 'car8.png', year: 2021, make: 'Ford', model: 'Fiesta', price: 13000 },
    { image: 'car9.png', year: 2024, make: 'Maruti', model: 'Alto', price: 12000 },
    { image: 'car10.png', year: 2023, make: 'Toyota', model: 'Avalon', price: 35000 },
    { image: 'car11.png', year: 2022, make: 'Honda', model: 'Fit', price: 16000 },
    { image: 'car12.png', year: 2021, make: 'Ford', model: 'Explorer', price: 32000 },
    { image: 'car13.png', year: 2024, make: 'Maruti', model: 'Baleno', price: 17000 },
    { image: 'car14.png', year: 2023, make: 'Toyota', model: 'RAV4', price: 28000 },
    { image: 'car15.png', year: 2022, make: 'Honda', model: 'Pilot', price: 29000 },
    { image: 'car16.png', year: 2021, make: 'Ford', model: 'Edge', price: 26000 },
    { image: 'car17.png', year: 2024, make: 'Maruti', model: 'Ciaz', price: 19000 },
    { image: 'car18.png', year: 2023, make: 'Toyota', model: 'Highlander', price: 40000 },
    { image: 'car19.png', year: 2022, make: 'Honda', model: 'CR-V', price: 31000 },
    { image: 'car20.png', year: 2021, make: 'Ford', model: 'Escape', price: 25000 },
    { image: 'car21.png', year: 2024, make: 'Maruti', model: 'Vitara Brezza', price: 20000 },
    { image: 'car22.png', year: 2023, make: 'Toyota', model: '4Runner', price: 45000 },
    { image: 'car23.png', year: 2022, make: 'Honda', model: 'Ridgeline', price: 35000 },
    { image: 'car24.png', year: 2021, make: 'Ford', model: 'Ranger', price: 28000 },
  ]);

  const [filterYear, setFilterYear] = useState('');
  const [filterMake, setFilterMake] = useState('');
  const [filterModel, setFilterModel] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

  const years = [2024, 2023, 2022, 2021];
  const makes = ['Maruti', 'Toyota', 'Honda', 'Ford'];
  const models = ['Ertiga', 'Corolla', 'Civic', 'Mustang', 'Swift', 'Camry', 'Accord', 'Fiesta', 'Alto', 'Avalon', 'Fit', 'Explorer', 'Baleno', 'RAV4', 'Pilot', 'Edge', 'Ciaz', 'Highlander', 'CR-V', 'Escape', 'Vitara Brezza', '4Runner', 'Ridgeline', 'Ranger'];

  const applyFilter = () => {
    setCars(prevCars => prevCars.filter(car => {
      return (!filterYear || car.year === parseInt(filterYear)) &&
             (!filterMake || car.make === filterMake) &&
             (!filterModel || car.model === filterModel) &&
             (!filterPrice || car.price <= parseInt(filterPrice));
    }));
  };

  return (
    <div>
      <Filter
        years={years}
        makes={makes}
        models={models}
        filterYear={filterYear}
        filterMake={filterMake}
        filterModel={filterModel}
        filterPrice={filterPrice}
        setFilterYear={setFilterYear}
        setFilterMake={setFilterMake}
        setFilterModel={setFilterModel}
        setFilterPrice={setFilterPrice}
        applyFilter={applyFilter}
      />
      <div className="car-listings">
        {cars.map((car, index) => (
          <CarListing key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default App;
