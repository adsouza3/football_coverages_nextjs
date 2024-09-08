import React from 'react';

import _ from 'lodash';
import { Text } from 'react-konva';

import { PXL_PER_YD, translateX, translateY } from '../helpers';

const PLAYER_SIZE_YD = 1;

const Trenches = () => {
  return <React.Fragment>
    {_.range(-2, 3).map((yd) => {
      return <Text
        key={`o${yd}`}
        x={translateX(yd)}
        y={translateY(PLAYER_SIZE_YD * -1)}
        text="O"
        fontSize={PLAYER_SIZE_YD * PXL_PER_YD}
        fill="yellow"
      />
    })}
    {_.range(-2, 3, 1.3).map((yd) => {
      return <Text
        key={`d${yd}`}
        x={translateX(yd)}
        y={translateY(0)}
        text="X"
        fontSize={PLAYER_SIZE_YD * PXL_PER_YD}
        fill="black"
      />
    })}
    <Text
      x={translateX(0)}
      y={translateY(PLAYER_SIZE_YD * -2)}
      text="Q"
      fontSize={PLAYER_SIZE_YD * PXL_PER_YD}
      fill="yellow"
    />
  </React.Fragment>;
};

export default Trenches;