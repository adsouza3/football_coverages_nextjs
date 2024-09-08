import React from 'react';
import { connect } from 'react-redux';

import { Text } from 'react-konva';
import { PXL_PER_YD, translateX, translateY } from '../helpers';
import { routes as routeOptions } from 'components/pb_config/offense/routes';

import Route from './route';

const PLAYER_SIZE_YD = 1;

const Receiver = ({ info, routes }) => {
  const origin = { x: info.x, y: info.y || 0 }

  let routeInfo;
  if (routes[info.key]) {
    routeInfo = routeOptions[routes[info.key].value];
  }

  return <React.Fragment>
    <Text
      x={translateX(origin.x)}
      y={translateY(origin.y)}
      text={info.label}
      fontSize={PLAYER_SIZE_YD * PXL_PER_YD}
      fill="yellow"
    />
    {routeInfo && <Route origin={origin} steps={routeInfo.steps}/>}
  </React.Fragment>;

};

const mapStateToProps = ({ settings: { routes } }) => {
  return {
    routes,
  };
};

export default connect(mapStateToProps)(Receiver);