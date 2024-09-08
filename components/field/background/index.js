import React from 'react';

import { Rect } from 'react-konva';

import { FIELD_WIDTH_YD, DEF_BACKFIELD_DEPTH_YD, translateX, translateY } from '../helpers';
import Markings from './markings';
import Trenches from './trenches';

const Background = () => {
  return <React.Fragment>
    <Rect
      x={0}
      y={0}
      width={translateX(FIELD_WIDTH_YD / 2)}
      height={translateY(DEF_BACKFIELD_DEPTH_YD)}
      fill="green"
    />
    <Markings />
    <Trenches />
  </React.Fragment>;
};

export default Background;