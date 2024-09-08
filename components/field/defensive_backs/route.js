import React from 'react';
import { connect } from 'react-redux';

import { Line } from 'react-konva';
import { PXL_PER_YD, translateX, translateY } from '../helpers';
import { zones } from 'components/pb_config/defense/coverages';
import { routes as routeOptions } from 'components/pb_config/offense/routes';
import { positionings } from 'components/pb_config/offense/alignments';

const Route = ({ positioning, origin, responsibility, routes }) => {
  positioning = positionings[positioning.key];
  const location = origin;
  location.y += 1; // TODO: constant
  location.x += 1/3;

  // TODO: extract
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

  let zoneStep = { stay: true };
  if (responsibility.zone) {
    const zone = zones[responsibility.zone]; 
    zoneStep = { x: zone.x, y: zone.y }; 
  }

  let steps = [];
  if (responsibility.key) {
    if (routes[responsibility.key]) {
      const routeInfo = routeOptions[routes[responsibility.key].value];
      const receiverAlignment = positioning[responsibility.key];
      let receiverLocation = { x: receiverAlignment.x, y: receiverAlignment.y || 0 }
  
      steps = routeInfo.steps.map((step, i) => {
        if (step.y) {
          receiverLocation.y += step.y;
        }
        if (step.x) {
          receiverLocation.x += step.x;
        }
  
        if (responsibility.until === 'vertical' && receiverLocation.y > 10) {
          return zoneStep;
        } else if (responsibility.once  === 'vertical' && receiverLocation.y <= 10) {
          return { stay: true };
        } else {
          return {
            x: receiverLocation.x - 1,
            y: receiverLocation.y + 1,
          };
        }
      });
    }
  } else if (responsibility.zone) {
    steps = [zoneStep]
  }

  steps = steps.filter(step => !step.stay);

  return <React.Fragment>
    {steps.map((step, i) => {
      const oldX = location.x;
      const oldY = location.y;

      if (step.y) {
        location.y = step.y;
      }
      if (step.x) {
        location.x = step.x;
      }

      return <React.Fragment>
        <Line
          key={i}
          x={translateX(oldX)}
          y={translateY(oldY)}
          points={[0, 0, (location.x - oldX) * PXL_PER_YD ,  (location.y - oldY) * PXL_PER_YD]}
          stroke="black"
        />
        {i === steps.length -1 && <Line
          closed
          x={translateX(location.x)}
          y={translateY(location.y)}
          fill="black"
          points={getArrowPoints({ x: location.x - oldX, y: location.y - oldY })}
        />}
      </React.Fragment>
    })}    
  </React.Fragment>;

};

const mapStateToProps = ({ settings: { positioning } }) => {
  return {
    positioning,
  };
};

export default connect(mapStateToProps)(Route);