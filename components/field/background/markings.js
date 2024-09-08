import React from 'react';

import _ from 'lodash';

import { Line } from 'react-konva';

import { DEF_BACKFIELD_DEPTH_YD, FIELD_WIDTH_YD, HASH_MARK_LENGTH_YD, HASH_SPACING_YD, PXL_PER_YD, YD_OFFSET_Y, translateX, translateY } from '../helpers';

const Markings = () => {
  return <React.Fragment>
    {_.range(YD_OFFSET_Y * -1, DEF_BACKFIELD_DEPTH_YD, 5).map((yd) => {
      return <Line
        key={`5${yd}}`}
        x={0}
        y={translateY(yd)}
        points={[0, 0, translateX(FIELD_WIDTH_YD / 2), 0]}
        stroke="white"
      />
    })}
    {_.range(YD_OFFSET_Y * -1, DEF_BACKFIELD_DEPTH_YD, 1).map((yd) => {
      if (yd % 5 === 0) {
        return null;
      }

      return <React.Fragment>
        <Line
          key={`${yd}l`}
          x={translateX((HASH_SPACING_YD * -1) / 2)}
          y={translateY(yd)}
          points={[0, 0, HASH_MARK_LENGTH_YD * PXL_PER_YD, 0]}
          stroke="white"
        />
        <Line
          key={`${yd}r`}
          x={translateX(HASH_SPACING_YD / 2)}
          y={translateY(yd)}
          points={[0, 0, HASH_MARK_LENGTH_YD * PXL_PER_YD, 0]}
          stroke="white"
        />
      </React.Fragment>;
    })}
  </React.Fragment>;
};

export default Markings;
