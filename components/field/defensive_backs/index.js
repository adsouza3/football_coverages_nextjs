import React from 'react';
import { connect } from 'react-redux';


import DefensiveBack from './defensive_back';

const DefensiveBacks = ({ coverage, family }) => {
  return <React.Fragment>
    {family.players.map((player) => {
      return <DefensiveBack key={player} coverage={coverage} player={player} />;
    })}
  </React.Fragment>;
};

const mapStateToProps = ({ settings: { coverage, family } }) => {
  return {
    coverage,
    family,
  };
};

export default connect(mapStateToProps)(DefensiveBacks);