import Context from "./Context";
import { useReducer } from "react";
import reducer, { initState } from "./reducer";
function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default ThemeProvider;
