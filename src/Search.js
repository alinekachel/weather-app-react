import React from "react";

export default function Search() {
  return (
    <div className="forms-section">
      <form id="search-city-form">
        <label for="citySearch"></label>
        <input
          type="text"
          name="citySearch"
          id="inserted-city"
          className="form-control"
          required
        />
        <input
          type="submit"
          value="Search"
          id="search-button"
          className="btn btn-primary"
        />
      </form>

      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary temp-button"
          id="to-celsius"
        >
          °C
        </button>
        <button
          type="button"
          className="btn btn-primary temp-button"
          id="to-fahrenheit"
        >
          °F
        </button>
      </div>
      <button type="button" className="btn btn-primary" id="current-place">
        My current place
      </button>
    </div>
  );
}
