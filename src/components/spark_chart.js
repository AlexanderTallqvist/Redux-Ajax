import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {

  function average(weatherData, units) {
    return _.round(_.sum(weatherData)/weatherData.length);
  }

  return (
    <div>
      <Sparklines style={{"height":"120px", "width":"180px"}} data={props.weatherData}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.weatherData)}{props.units}</div>
    </div>
  );
};
