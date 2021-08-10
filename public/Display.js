import React from "react";
import "./styles.css";
export class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.city.length === 0 && this.props.message !== "") {
      return <h4>{this.props.message}</h4>;
    } else
      return (
        <div className="display">
{this.props.city.length == 0 ? "" : <h2>Place : {this.props.city}</h2>}
  {this.props.country.length == 0 ? "" : <h2>Country : {this.props.country}</h2>}
          <div className="weather">
          {this.props.temp.length == 0 ? "" : <p>Temprature : {this.props.temp}</p>}
          {this.props.wind.length == 0 ? "" : <p>Wind Speed : {this.props.wind}</p>}
          {this.props.weather.length == 0 ? "" : <p>Weather : {this.props.weather}</p>}
          {this.props.humidity.length == 0 ? "" : <p>Humidity : {this.props.humidity}</p>}
          {this.props.pressure.length == 0 ? "" : <p>Pressure : {this.props.pressure}</p>}
            {(this.props.geoloc[0]==0 && this.props.geoloc[1]==0)?"":<p>
              Location : ({this.props.geoloc[0]},{this.props.geoloc[1]})
            </p>}
          </div>
        </div>
      );
  }
}
