import { UPDATE_COVERAGE, UPDATE_FAMILY, UPDATE_POSITIONING, UPDATE_ROUTE } from 'store/actions';

import { routes } from 'components/pb_config/offense/routes';
import { coverages } from 'components/pb_config/defense/coverages';
import { families } from 'components/pb_config/defense/families';
import { positionings } from 'components/pb_config/offense/alignments';

const defaultState = {
  positioning: positionings._11_weak_balanced,
  routes: {
    1: routes.go,
    2: routes.go,
  },
  family: families.triangle,
  coverage: coverages.triangle.meg,
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
  case UPDATE_ROUTE:
    return {
      ...state,
      routes: {
        ...state.routes,
        [action.key]: action.route,
      }
    };
  case UPDATE_COVERAGE:
    return {
      ...state,
      coverage: action.coverage,
    };
  case UPDATE_POSITIONING:
    return {
      ...state,
      positioning: action.positioning,
      coverage: action.coverage,
      family: action.family,
    };
  case UPDATE_FAMILY:
    return {
      ...state,
      family: action.family,
      coverage: action.coverage,
    };
  default:
    return state;
  }
};

export default reducer;