import React from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

import { Text } from 'react-konva';
import { HASH_SPACING_YD, PXL_PER_YD, translateX, translateY } from '../helpers';
import { positionings } from 'components/pb_config/offense/alignments';
import { getReponsibility } from 'components/pb_config/defense/coverages';

import Route from './route';

const PLAYER_SIZE_YD = 1;

const DefensiveBack = ({ coverage, positioning, player, routes }) => {
  const alignment = coverage.alignment[player];
  const origin = { x: 0, y: 0 };

  if (alignment.key === 'hash') {
    origin.x = HASH_SPACING_YD / 2;
  }
  else {
    const receiverPosition = positionings[positioning.key];
    const routeInfo = receiverPosition[alignment.key]
    origin.x = routeInfo.x;
  }

  if (alignment.alignment === 'press') {
    origin.y = 3;
  } else if (alignment.alignment === 'deep') {
    origin.y = 15;
  }

  const responsibilityInfo = coverage.responsibilities[player];
  const responsibility = getReponsibility(responsibilityInfo, routes);

  return <React.Fragment>
    <Text
      x={translateX(origin.x)}
      y={translateY(origin.y)}
      text={_.capitalize(player)}
      fontSize={PLAYER_SIZE_YD * PXL_PER_YD}
      fill="black"
    />
    <Route origin={origin} responsibility={responsibility} routes={routes}/>
  </React.Fragment>;

};

const mapStateToProps = ({ settings: { positioning, routes } }) => {
  return {
    positioning,
    routes,
  };
};

export default connect(mapStateToProps)(DefensiveBack);