import React from 'react';
import { connect } from 'react-redux';

import { Stage, Layer } from 'react-konva';

import { FIELD_WIDTH_YD, translateX } from './helpers';

import Background from './background';
import DefensiveBacks from './defensive_backs';
import Receivers from './receivers';

import './styles.css';

const Field = ({ coverage }) => {
  return (
    <div className="field-container">
      <h2>{coverage.label}</h2>
      <Stage width={translateX(FIELD_WIDTH_YD / 2)} height={window.innerHeight}>
        <Layer>
          <Background />
          <Receivers />
          <DefensiveBacks />
        </Layer>
      </Stage>
    </div>
  );
};

const mapStateToProps = ({ settings: { coverage } }) => {
  return {
    coverage,
  };
};

export default connect(mapStateToProps)(Field);