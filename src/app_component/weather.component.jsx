import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}


        {/* humidity and pressure */}
        {humpress(props.humidity, props.pressure)}

        {/* rise and set */}
        {sunRiseSet(props.sunrise, props.sunset)}

        {/* wind speed */}
        <h4 className="py-4">
          <spna>
            {props.wind}
          </spna>
        </h4>

        {/* Weather description */}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

function sunRiseSet(rise, set) {
  if (set && rise) {
    return (
      <h3>
        <span className="px-4">{rise}</span>
        <span className="px-4">{set}</span>
      </h3>
    );
  }
}

function humpress(pressure, humidity) {
  if (humidity && pressure) {
    return (
      <h3>
        <span className="px-5">{pressure}hPa</span>
        <span className="px-5">{humidity}%</span>
      </h3>
    );
  }
}
