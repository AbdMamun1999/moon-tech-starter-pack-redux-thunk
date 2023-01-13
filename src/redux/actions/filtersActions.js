import { TOGGLE_BRANDS, TOGGLE_STACK } from "../actionTypes/actionTypes";

export const toggleBrand = (brandName) => {
  return {
    type: TOGGLE_BRANDS,
    payload: brandName,
  };
};

export const toggleStock = () => {
  return {
    type: TOGGLE_STACK,
  };
};
