import React from 'react';

import { Line } from 'react-konva';
import { PXL_PER_YD, translateX, translateY } from '../helpers';

const Route = ({ origin, steps }) => {
  const location = origin;
  location.y += 1; // TODO: constant
  location.x += 1/3;

  const getArrowPoints = (step) => {

    let angle;
    if (step.x) {
      angle = Math.atan((step.y || 0) / (step.x))
      if (step.x > 0) {
        angle = (angle + Math.PI) % (2 * Math.PI);
      }
    } else {
      angle = step.y > 0 ? 3 * Math.PI / 2 : Math.PI / 2;
    }

    const p1Angle = angle + Math.PI / 6;
    const p2Angle = angle - Math.PI / 6;

    return [
      0, 0,
      Math.cos(p1Angle)* 10, Math.sin(p1Angle) * 10,
      Math.cos(p2Angle) * 10, Math.sin(p2Angle) * 10,
      0, 0,
    ]
  };

  return <React.Fragment>
    {steps.map((step, i) => {
      const oldX = location.x;
      const oldY = location.y;

      if (step.y) {
        location.y += step.y;
      }
      if (step.x) {
        location.x += step.x;
      }

      return <React.Fragment>
        <Line
          key={i}
          x={translateX(oldX)}
          y={translateY(oldY)}
          points={[0, 0, (step.x || 0) * PXL_PER_YD ,  (step.y || 0) * PXL_PER_YD]}
          stroke="yellow"
        />
        {i === steps.length -1 && <Line
          key="arrow"
          closed
          x={translateX(location.x)}
          y={translateY(location.y)}
          fill="yellow"
          points={getArrowPoints(step)}
        />}
      </React.Fragment>
    })}    
  </React.Fragment>;

};



export default Route;