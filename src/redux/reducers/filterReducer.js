import { TOGGLE_BRANDS, TOGGLE_STACK } from "../actionTypes/actionTypes";

export const initialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: "",
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRANDS:
      if (!state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }
    case TOGGLE_STACK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stock: !state.filters.stock,
        },
      };
    default:
      return state;
  }
};
