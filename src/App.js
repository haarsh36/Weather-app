import "./styles.css";
import React from "react";
import axios from "axios";
import { Display } from "./Display";
import { Search } from "./Search";
import Map from "./Map";
import logo from "./362.gif";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      name: "",
      country: "",
      temp: "",
      wind: "",
      weather: "",
      pressure: "",
      humidity: "",
      geoloc: [0, 0],
      message: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick() {
    this.setState({ isLoading: true });
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          this.state.name +
          "&units=metric&appid=4d29464a1c597933cb16b76571226a2b"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          country: response.data.sys.country,
          temp: response.data.main.temp,
          wind: response.data.wind.speed,
          weather: response.data.weather[0].main,
          pressure: response.data.main.pressure,
          humidity: response.data.main.humidity,
          message: "",
          geoloc: [response.data.coord.lon, response.data.coord.lat]
          
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          
          name: "",
          country: "",
          temp: "",
          wind: "",
          weather: "",
          pressure: "",
          humidity: "",
          geoloc: [0, 0],
          message: "Sorry, No Data Available!"
        });
        //alert("Try Again!");
      });
  }
  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  render() {
      return (
        <div className="App">
          <div className="Right">
            <Search
              city={this.state.name}
              OnClick={this.handleClick}
              OnChange={this.handleChange}
            />
            <Display
              city={this.state.name}
              country={this.state.country}
              temp={this.state.temp}
              wind={this.state.wind}
              weather={this.state.weather}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              geoloc={this.state.geoloc}
              message={this.state.message}
            />
          </div>
          <div className="Left">
            <Map
              lat={parseFloat(this.state.geoloc[1])}
              lon={parseFloat(this.state.geoloc[0])}
            />
          </div>
        </div>
      );
  }
}
