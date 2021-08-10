import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
class Map extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{
          lat: this.props.lat,
          lng: this.props.lon
        }}
        defaultZoom={13}
      ></GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default Map;
