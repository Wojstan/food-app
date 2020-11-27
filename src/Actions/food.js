import { GET_FOOD } from "./types";

export const getFood = (today) => (dispatch) => {

  fetch(`http://localhost:4454/food/${today + 1}`)
    .then(response => response.json())
    .then(json => dispatch({
      type: GET_FOOD,
      payload: json
    }));
}
