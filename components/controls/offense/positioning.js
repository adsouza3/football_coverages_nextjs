import React from 'react';
import { connect } from 'react-redux';

import { updatePositioning } from 'store/actions';

import { positionings } from 'components/pb_config/offense/alignments';

import Select from 'react-select';

const Positioning = ({ positioning, updatePositioning }) => {

  return <React.Fragment>
    Formation:
    <Select
      className="select"
      options={Object.values(positionings)}
      value={positioning}
      onChange={updatePositioning}
    />

  </React.Fragment>;
};


const mapDispatchTopProps = {
  updatePositioning
};

const mapStateToProps = ({ settings: { positioning } }) => {
  return {
    positioning,
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Positioning);