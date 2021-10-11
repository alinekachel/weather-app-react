import React from "react";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row other-days">
        <div className="col-2" id="week-1">
          Monday
        </div>
        <div className="col-6" id="temps-1">
          max: <span id="max-1">30</span> min: <span id="min-1">20</span>
        </div>
        <div className="col-4" id="condition-1">
          🌞 Sunny
        </div>
      </div>
      <div className="row other-days">
        <div className="col-2" id="week-2">
          Monday
        </div>
        <div className="col-6" id="temps-2">
          max: <span id="max-2">30</span> min: <span id="min-2">20</span>
        </div>
        <div className="col-4" id="condition-2">
          🌞 Sunny
        </div>
      </div>
      <div className="row other-days">
        <div className="col-2" id="week-3">
          Monday
        </div>
        <div className="col-6" id="temps-3">
          max: <span id="max-3">30</span> min: <span id="min-3">20</span>
        </div>
        <div className="col-4" id="condition-3">
          🌞 Sunny
        </div>
      </div>
      <div className="row other-days">
        <div className="col-2" id="week-4">
          Monday
        </div>
        <div className="col-6" id="temps-4">
          max: <span id="max-4">30</span> min: <span id="min-4">20</span>
        </div>
        <div className="col-4" id="condition-4">
          🌞 Sunny
        </div>
      </div>
      <div className="row other-days">
        <div className="col-2" id="week-5">
          Monday
        </div>
        <div className="col-6" id="temps-5">
          max: <span id="max-5">30</span> min: <span id="min-5">20</span>
        </div>
        <div className="col-4" id="condition-5">
          🌞 Sunny
        </div>
      </div>
    </div>
  );
}
