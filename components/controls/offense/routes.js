import React from 'react';
import { connect } from 'react-redux';

import { updateRoute } from 'store/actions';

import { routes as routeOptions } from 'components/pb_config/offense/routes';
import { positionings } from 'components/pb_config/offense/alignments';

import Select from 'react-select';

const Offense = ({ positioning, routes, updateRoute }) => {
  const option = positionings[positioning.key];

  const handleSelect = (key, route) => {
    updateRoute(key, route);
  };

  return <React.Fragment>
    {[1, 2, 3].map((key) => {
      if (!option[key]) {
        return null;
      }

      return <React.Fragment>
        {key}:
        <Select
          className="select"
          options={Object.values(routeOptions)}
          value={routes[key]}
          onChange={route => handleSelect(key, route)}
        />
      </React.Fragment>
    })}
  </React.Fragment>;
};


const mapDispatchTopProps = {
  updateRoute
};

const mapStateToProps = ({ settings: { positioning, routes } }) => {
  return {
    positioning,
    routes,
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Offense);