import React, { Component } from 'react';

class GoogleMap extends Component {

  // Called automaitically after our component
  // has been rendered to the screen
  componentDidMount() {
    let myLatLng = new google.maps.LatLng(this.props.lat, this.props.lon);

    let map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: myLatLng
    });

    let marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
