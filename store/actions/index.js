import { coverages } from "components/pb_config/defense/coverages";
import { families } from "components/pb_config/defense/families";

const defaultFamily = (positioning) => {
  return families[positioning.available_families[0]];
};
const defaultCoverage = (family) => {
  return Object.values(coverages[family.key])[0];
};

export const UPDATE_ROUTE = 'UPDATE_ROUTE';
export const updateRoute = (key, route) => {
  return {
    type: UPDATE_ROUTE,
    key,
    route,
  }
};

export const UPDATE_COVERAGE = 'UPDATE_COVERAGE';
export const updateCoverage = (coverage) => {
  return {
    type: UPDATE_COVERAGE,
    coverage,
  }
};

export const UPDATE_POSITIONING = 'UPDATE_POSITIONING';
export const updatePositioning = (positioning) => {
  const family = defaultFamily(positioning);
  const coverage = defaultCoverage(family);

  return {
    type: UPDATE_POSITIONING,
    positioning,
    family,
    coverage,
  }
};

export const UPDATE_FAMILY = 'UPDATE_FAMILY';
export const updateFamily = (family) => {
  const coverage = defaultCoverage(family);

  return {
    type: UPDATE_FAMILY,
    family,
    coverage,
  }
};