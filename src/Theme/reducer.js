import { SET_THEME } from "./Constants";

const themeStore = localStorage.getItem("theme");

export const initState = {
  theme: themeStore ? themeStore : "light",
};

function reducer(state, actions) {
  let newState;

  switch (actions.type) {
    case SET_THEME: {
      newState = {
        theme: actions.payload,
      };
      break;
    }
    default: {
      throw new Error("invalid actions");
    }
  }
  return newState;
}

export default reducer;
