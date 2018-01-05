import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spark_chart from '../components/spark_chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {

    if (!cityData) {
      let randomValue = Math.random().toString(36).substring(10);
      return <tr key={randomValue}><td>City not found.</td></tr>;
    }

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Spark_chart weatherData={temps} color="orange" units="C" /></td>
        <td><Spark_chart weatherData={pressures} color="green" units="hPa" /></td>
        <td><Spark_chart weatherData={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Preassure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// Import the data from our weather reducer,
// so that we are able to use it in our containers state

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

// Same as above
function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
