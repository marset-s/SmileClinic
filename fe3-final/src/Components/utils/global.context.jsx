import { createContext, useContext, useReducer, useState } from "react";



export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      default:
      return state;
  }
};


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
const [data, setData] = useState([])
const [state, dispatch] = useReducer(reducer, initialState);

const toggleTheme = () => {
  dispatch({ type: "TOGGLE_THEME" });
};

  return (
    <ContextGlobal.Provider value={{data, setData, state, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)


