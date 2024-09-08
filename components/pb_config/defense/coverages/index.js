import _ from 'lodash';

import { FIELD_WIDTH_YD } from 'components/field/helpers';
import { categories } from 'components/pb_config/offense/routes';
import { coverages as triangle } from './triangle';
import { coverages as backside } from './backside';

// TODO: see triangle

export const zones = {
  deep_qtr: { x: FIELD_WIDTH_YD / 2 - 5, y: 12 },
  flat: { x: FIELD_WIDTH_YD / 2 - 5, y: 5 },
  hook: { x: 0, y: 7 },
  middle: { x: 0, y: 10 },
}

export const coverages = {
  triangle,
  backside,
};

export const getReponsibility = (responsibilities, routeCombination) => {
  let responsibility = responsibilities[0];

  const routeMatchesCondition = (decision) => {
    let keys = _.castArray(decision.key);
    let ifs = _.castArray(decision.if);
    let unlesses = _.castArray(decision.unless);

    return keys.every((key, i) => {
      const route = routeCombination[key];

      if (ifs[i]) {
        return categories[ifs[i]].indexOf(route) !== -1;
      } else if (unlesses[i]) {
        return categories[unlesses[i]].indexOf(route) === -1;
      }

      return false;
    });
  };

  while (true) {
    for (const decision of responsibility.decisions || []) {
      if (decision.unless && routeMatchesCondition(decision)) {
        responsibility = responsibilities[decision.result];
        continue;
      } else if (responsibility.if && routeMatchesCondition(decision)) {
        responsibility = responsibilities[decision.result];
        continue;
      }
    }

    if (
      responsibility.zone &&
      responsibility.else &&
      Object.values(routeCombination).every(route => categories[responsibility.zone].indexOf(route) === -1)
    ) {
      responsibility = responsibilities[responsibility.else];
      continue;
    }

    break;
  }

  return responsibility;
};