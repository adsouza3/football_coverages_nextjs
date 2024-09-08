import React from 'react';
import { connect } from 'react-redux';

import { updateCoverage, updateFamily } from 'store/actions';

import { positionings } from 'components/pb_config/offense/alignments';
import { coverages } from 'components/pb_config/defense/coverages';
import { families } from 'components/pb_config/defense/families';

import Select from 'react-select';

const Defense = ({ coverage, family, positioning, updateCoverage, updateFamily }) => {
  const available_families = positionings[positioning.key].available_families;
  const familyOptions = available_families.map(key => families.key);

  const coverageOptions = Object.values(coverages[family.key]);

  return <React.Fragment>
    Family:
    <Select
      className="select"
      options={familyOptions}
      value={family || familyOptions[0]}
      onChange={updateFamily}
    />
    Coverage:
    <Select
      className="select"
      options={coverageOptions}
      value={coverage || coverageOptions[0]}
      onChange={updateCoverage}
    />

  </React.Fragment>;
};


const mapDispatchTopProps = {
  updateCoverage,
  updateFamily,
};

const mapStateToProps = ({ settings: { coverage, family, positioning } }) => {
  return {
    coverage,
    family,
    positioning,
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Defense);