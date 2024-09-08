export const FIELD_WIDTH_YD = 53 + 1 / 3;
export const HASH_SPACING_YD = 18.5 / 3;
export const HASH_MARK_LENGTH_YD = 2 / 3;

export const DEF_BACKFIELD_DEPTH_YD = 20;

export const PXL_PER_YD = 20;
export const YD_OFFSET_X = HASH_SPACING_YD;
export const YD_OFFSET_Y = 5;


export const translateX = (x) => {
  return (x + YD_OFFSET_X) * PXL_PER_YD;
};

export const translateY = (y) => {
  return (y + YD_OFFSET_Y) * PXL_PER_YD;
};

export const translateXY = (x, y) => {
  return { x: translateX(x), y: translateY(y) };
};