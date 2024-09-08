import React from 'react';
import { connect } from 'react-redux';

import { positionings } from 'components/pb_config/offense/alignments';
import Receiver from './receiver';

const Receivers = ({ positioning }) => {
  const alignment = positionings[positioning.key];
  return <React.Fragment>
    {[1, 2, 3 /* update keying after mvp */].map((key) => {
      return alignment[key] && <Receiver key={key} info={alignment[key]} />;
    })}
  </React.Fragment>;
};

const mapStateToProps = ({ settings: { positioning } }) => {
  return {
    positioning,
  };
};

export default connect(mapStateToProps)(Receivers);