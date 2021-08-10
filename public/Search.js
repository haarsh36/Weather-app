import React from "react";
import './styles.css';
export class Search extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <h1>Weather Report</h1>
        <input
          type="text"
          value={this.props.city}
          placeholder="Enter your City"
          name="name"
          onChange={(event) => this.props.OnChange(event)}
        />
        <button onClick={() => this.props.OnClick()}>Get Weather</button>
      </div>
    );
  }
}