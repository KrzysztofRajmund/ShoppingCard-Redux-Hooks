import { GET_ITEMS } from "./types";

//get all products
export const getItems = () => async dispatch => {
  try {
    var res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.reasonapps.pl/data.json",
      {
        method: "GET",
        headers: {
          Authorization: "No Auth",
          "Content-Type": "application/json"
        }
      }
    );

    if (res.ok) {
      var items = await res.json();

      dispatch({
        type: GET_ITEMS,
        payload: items
      });
    }
  } catch (error) {
    console.log(error);
  }
};
