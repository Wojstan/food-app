import { GET_FOOD } from "../Actions/types";

const initialState = {
  food: {
    meals: [],
    breakfast: {
      ingrids: [],
      details: [],
      recipe: ""
    },
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FOOD:
      return {
        ...state,
        food: action.payload,
      };

    default:
      return state;
  }

}