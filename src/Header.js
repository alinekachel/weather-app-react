import React from "react";

export default function Header() {
  return (
    <div className="row app-header">
      <div className="col-6">
        <h1 id="header-location">Tokyo</h1>
        <ul>
          <li>
            <span id="current-day-hour">17:00 Monday</span>,
            <span id="header-condition">clouds</span>
          </li>
          <li id="header-extra-info">Humidity: 40%, Wind: 5 km/h</li>
        </ul>
      </div>
      <div className="col-6">
        <h2>
          <span id="header-icon">☁</span> <strong id="header-temp">24</strong>
          <span id="header-degree">°C</span>
        </h2>
      </div>
    </div>
  );
}
