import React from 'react';

const Filter = ({
  years,
  makes,
  models,
  filterYear,
  filterMake,
  filterModel,
  filterPrice,
  setFilterYear,
  setFilterMake,
  setFilterModel,
  setFilterPrice
}) => {
  return (
    <div className="filter-container">
      <h2>Classification of the Cars</h2>
      <div>
        <label>Year</label>
        <select value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
          <option value="">All</option>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Make</label>
        <select value={filterMake} onChange={(e) => setFilterMake(e.target.value)}>
          <option value="">All</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>{make}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Model</label>
        <select value={filterModel} onChange={(e) => setFilterModel(e.target.value)}>
          <option value="">All</option>
          {models.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Max Price</label>
        <input
          type="number"
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
